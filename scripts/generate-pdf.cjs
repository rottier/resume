const { spawn } = require('child_process');
const puppeteer = require('puppeteer');
const path = require('path');

// Use the absolute path to npm if necessary

const startServer = () => {
  return new Promise((resolve, reject) => {
    const server = spawn('npm', ['run', 'dev', '--', '--port=3000'], {
      stdio: ['pipe', 'pipe', 'pipe'],
      shell: true, // Ensures correct handling of commands
    });

    server.stdout.on('data', (data) => {
      console.log(`Server stdout: ${data}`);
      if (data.toString().includes('ready in')) { // Adjust based on your server's output
        resolve(server);
      }
    });

    server.stderr.on('data', (data) => {
      console.error(`Server stderr: ${data}`);
    });

    server.on('exit', (code) => {
      if (code !== 0) {
        reject(`Server exited with code ${code}`);
      }
    });

    server.on('error', (error) => {
      reject(`Server error: ${error}`);
    });
  });
};

const stopServer = (server) => {
  return new Promise((resolve, reject) => {
    server.kill('SIGTERM'); // Send SIGTERM for a graceful shutdown

    // Set a timeout to force kill if it takes too long
    const timeout = setTimeout(() => {
      server.kill('SIGKILL'); // Force kill if SIGTERM doesn't work
      reject(new Error('Server did not shut down gracefully, forced kill.'));
    }, 5000); // 5 seconds timeout

    server.on('exit', () => {
      clearTimeout(timeout);
      resolve();
    });

    server.on('error', (error) => {
      clearTimeout(timeout);
      reject(`Error stopping server: ${error}`);
    });
  });
};

const generatePdf = async () => {
  let server;
  try {
    server = await startServer();
    
    // Adjust the URL to match your dev server
    const url = 'http://localhost:3000';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({ width: 1920, height: 1080 });

    await page.evaluate(() => {
      document.body.style.zoom = '1'; // Ensure no zoom scaling
    });

    await page.goto(url, { waitUntil: 'networkidle2' });
    await page.pdf({
      path: 'public/Marino Rottier - curriculum vitae.pdf',
      format: 'A4',
      width: '1920px',  // Specify width as per viewport
      height: '1080px', // Specify height as per viewport
      margin: {
        top: '0.4in',
        bottom: '0.4in',
        left: '0.4in',
        right: '0.4in'
      },
      printBackground: true,
    });

    await browser.close();
    
    // Stop the server
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

generatePdf().then(() => {
  console.log('PDF generation complete.');
  process.exit(0); // Ensure Node.js exits after script completion
}).catch((err) => {
  console.error(`Script failed: ${err.message}`);
  process.exit(1); // Exit with error code
});