const { spawn } = require("child_process");
const puppeteer = require("puppeteer");

const startServer = () => {
  return new Promise((resolve, reject) => {
    const server = spawn("npm", ["run", "dev", "--", "--port=3000"], {
      stdio: ["pipe", "pipe", "pipe"],
      shell: true,
    });

    server.stdout.on("data", (data) => {
      console.log(`Server stdout: ${data}`);
      if (data.toString().includes("ready in")) {
        resolve(server);
      }
    });

    server.stderr.on("data", (data) => {
      console.error(`Server stderr: ${data}`);
    });

    server.on("exit", (code) => {
      if (code !== 0) {
        reject(`Server exited with code ${code}`);
      }
    });

    server.on("error", (error) => {
      reject(`Server error: ${error}`);
    });
  });
};

const stopServer = (server) => {
  return new Promise((resolve, reject) => {
    server.kill("SIGTERM");

    const timeout = setTimeout(() => {
      server.kill("SIGKILL");
      reject(new Error("Server did not shut down gracefully, forced kill."));
    }, 5000);

    server.on("exit", () => {
      clearTimeout(timeout);
      resolve();
    });

    server.on("error", (error) => {
      clearTimeout(timeout);
      reject(`Error stopping server: ${error}`);
    });
  });
};

const generatePdf = async () => {
  let server;
  try {
    server = await startServer();

    const url = "http://localhost:3000";

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({ width: 1920, height: 1080 });

    await page.evaluate(() => {
      document.body.style.zoom = "1";
    });

    await page.goto(url, { waitUntil: "networkidle2" });
    await page.pdf({
      path: "public/cv.pdf",
      format: "A4",
      width: "1920px",
      height: "1080px",
      margin: {
        top: "0.4in",
        bottom: "0.4in",
        left: "0.4in",
        right: "0.4in",
      },
      printBackground: true,
    });

    await browser.close();

    await stopServer(server);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    if (server) {
      try {
        await stopServer(server);
      } catch (stopError) {
        console.error(`Failed to stop server: ${stopError.message}`);
      }
    }
  }
};

generatePdf()
  .then(() => {
    console.log("PDF generation complete.");
    process.exit(0);
  })
  .catch((err) => {
    console.error(`Script failed: ${err.message}`);
    process.exit(1);
  });
