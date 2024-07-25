<script lang="ts">
  import {
    Envelope,
    Phone,
    Home,
    Cake,
    Printer,
    Identification,
    Language,
  } from "@steeze-ui/heroicons";
  import Education from "./lib/components/Experience/Education/Education.svelte";
  import ExperienceSection from "./lib/components/Experience/ExperienceSection.svelte";
  import { JobLocation } from "./lib/components/Experience/Job";
  import Job from "./lib/components/Experience/Job/Job.svelte";
  import Skills from "./lib/components/Experience/Skills/Skills.svelte";
  import IconBadge from "./lib/components/IconBadge/IconBadge.svelte";
  import { Icon } from "@steeze-ui/svelte-icon";
</script>

<main>
  <div class="flex justify-center">
    <div class="space-y-8 m-8 max-w-prose print:max-w-full">
      <div class="space-y-2">
        <h1
          class="pl-0 sm:pl-8 text-slate-800 font-mono uppercase font-extrabold text-3xl text-center sm:text-left"
        >
          Marino Rottier
        </h1>
        <div
          class="p-4 break-inside-avoid overflow-hidden border border-slate-500 border-opacity-20 mx-3 rounded-xl space-y-1"
        >
          <div class="sm:flex sm:flex-row-reverse gap-4">
            <div class="avatar ml-auto">
              <div class="w-full sm:w-40 rounded-md">
                <img alt="Marino Rottier" src="marino.jpeg" />
              </div>
            </div>
            <div class="space-y-3 h-full">
              <div class="flex flex-row items-center">
                <p class="text-slate-500 text-sm h-fit">
                  Broadly oriented software developer from The Netherlands.
                  Experienced in building desktop and web applications
                  front-to-back. A self-taught programmer with a history in
                  building (graphical) applications for the television
                  broadcasting industry. Passionate about modern UI and CI. Also
                  an experienced drummer, just ask my neighbors!
                </p>
              </div>
              <div class="flex flex-row flex-wrap gap-1">
                <IconBadge
                  href="tel:+31619930842"
                  icon={Phone}
                  label="+31 6 19930842"
                />
                <IconBadge
                  href="mailto:marino@rottier.nl"
                  icon={Envelope}
                  label="marino@rottier.nl"
                />
                <IconBadge
                  href="https://www.google.com/maps/place/J.+Reyneke+van+Stuwestraat+6,+3604+DJ+Maarssen"
                  icon={Home}
                  label="J. Reyneke van Stuwestraat 6, Maarssen"
                />
                <IconBadge
                  icon={Identification}
                  label="Driving License B + AM"
                />
                <IconBadge
                  href="https://www.onthisday.com/date/1993/september/8"
                  icon={Cake}
                  label="08-09-1993"
                />
                <IconBadge icon={Language} label="Dutch + English" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExperienceSection sectionName="Skills">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Skills
            skillSetName="Development"
            skills={[
              "React.js",
              "Svelte",
              "C++",
              "TypeScript",
              "JavaScript",
              "Node.js",
              "Rust",
              "Lua",
              "C#",
              "Unreal Engine",
              "Visual Basic",
              "Tailwind CSS",
              "Storybook",
              "Network Protocols",
              "WebSocket",
              "Rest APIs",
              "Google Test",
              "React Testing Library",
              "Artifactory",
              "Turborepo",
              "Lerna",
              "Jest",
              "Webpack",
              "Mermaid",
              "PlantUML",
              "Cypress",
              "Dear ImGui",
              "MFC",
              "Python",
              "Git",
              "Bash",
              "HTML5",
              "CSS",
            ]}
          />
          <Skills
            skillSetName="Working Practices"
            skills={[
              "Scrum",
              "Scaled Agile",
              "Technical Investigation",
              "Documentation",
              "Architecture Diagrams",
              "Unit Testing",
              "End-to-End Testing",
              "Continuous Integration",
              "Continuous Delivery",
              "Test-Driven Development",
              "Automation",
              "Prototyping",
              "Mockups",
            ]}
          />
          <Skills
            skillSetName="Creative"
            skills={[
              "Drumming",
              "Guitar",
              "Hardware Modding",
              "PC Building",
              "Figma",
              "Photoshop",
              "InDesign",
              "Illustrator",
              "Game Design",
              "Interior Design",
            ]}
          />
          <Skills
            skillSetName="Social"
            skills={[
              "Autodidactic",
              "Teamplayer",
              "Sharing is Caring",
              "Eager",
              "Realistic",
              "Analytical",
              "Problem Solver",
              "Extravert",
              "Humorous",
            ]}
          />
        </div>
      </ExperienceSection>
      <ExperienceSection sectionName="Experience">
        <Job
          companyName="EVS Broadcast Equipment"
          companyWebsite="http://www.evs.com"
          companyLocation="Wokingham, England, United Kingdom"
          jobLocation={JobLocation.Remote}
          roles={["Application Engineer", "Software Engineer"]}
          yearStart={2021}
          yearEnd={0}
          jobDescription={"Starting off as an application engineer, I developed control and monitoring applications for major broadcasters like BBC, ITN, and ORF. This also involved setting up the development environment, including version control, deployment workflows, and code documentation, as well as creating a package/module framework for the proprietary scripting language. Transitioning to a software engineering role, I work on Cerebrum, a broadcast control and monitoring system. My primary focus: web-based control of the C++ server application using React and TypeScript. Additionally, I prototyped applications with Figma, worked on CI/CD pipelines, and, as part of an interdepartmental UI team, improved and standardized our front-end practices and tools."}
          techStack={[
            "C++",
            "React.js",
            "TypeScript",
            "MFC",
            "CI",
            "Node.js",
            "SASS",
            "WebSocket",
            "REST APIs",
            "Cypress",
            "Git",
            "Jest",
            "Webpack",
            "Lerna",
            "Figma",
            "Google Test",
            "Artifactory",
            "TeamCity",
          ]}
        />
        <Job
          companyName="NEP The Netherlands"
          companyWebsite="http://www.nepworldwide.nl"
          companyLocation="Hilversum, The Netherlands"
          jobLocation={JobLocation.Hybrid}
          roles={["Technical Artist", "Software Engineer"]}
          yearStart={2018}
          yearEnd={2021}
          jobDescription={"In my role as a software engineer, I worked on a C++/Lua-based broadcast control system for virtual production and real-time graphics, used in large-scale TV productions like the Eurovision Song Contest, Extreme E, and Sky News Arabia. This involved implementing third-party protocols (HTTP, WebSockets, raw TCP, and UDP) and creating a GUI framework configurable from Lua, enabling technical artists and operators to quickly compose workspaces and playlists for time-critical broadcasting operations."}
          techStack={[
            "C++",
            "Lua",
            "Dear ImGui",
            "Unreal Engine",
            "Python",
            "C#",
            "Rust",
            "Network Protocols",
            "WebSocket",
            "CI",
            "Git",
          ]}
        />
        <Job
          companyName="EMG NL"
          companyWebsite="http://www.nl.emglive.com"
          companyLocation="Hilversum, The Netherlands"
          jobLocation={JobLocation.OnSite}
          roles={["Graphics Operator", "Technical Artist"]}
          yearStart={2016}
          yearEnd={2018}
          jobDescription={"My broadcasting career began as a graphics operator, where I created, scripted, and operated real-time graphics for live TV productions, from Dutch daily talk shows to international broadcasts. To enhance the company's augmented reality offerings, I transitioned to a technical artist, self-teaching gaming technology principles. In this role, I programmed real-time graphics pipelines and applications for live TV, specializing in virtual production. I developed data-driven augmented reality graphics for several Dutch elections and the 2017 FIFA World Cup coverage on Mediaset in Italy."}
          techStack={[
            "Visual Basic",
            "Unreal Engine",
            "Photoshop",
            "XPression",
          ]}
        />
        <Job
          companyName="Utrecht University"
          companyWebsite="http://www.elevatehealth.eu"
          companyLocation="Utrecht, The Netherlands"
          jobLocation={JobLocation.OnSite}
          roles={["Media Developer"]}
          yearStart={2015}
          yearEnd={2016}
          jobDescription={"E-learning (platform/web) development, media management and moderation for the virtual learning environment of Elevate Health, an in-house startup of the Utrecht University that develops an online academy for international health professionals."}
          techStack={[
            "HTML5",
            "CSS",
            "Moodle",
            "Articulate Storyline",
            "Adobe Premiere",
          ]}
        />
        <Job
          companyName="OOSEOO Internetmarketing"
          companyWebsite="http://www.ooseoo.com"
          companyLocation="Amersfoort, The Netherlands"
          jobLocation={JobLocation.OnSite}
          roles={["Media Developer"]}
          yearStart={2013}
          yearEnd={2014}
          jobDescription={"Audiovisual media development and search engine optimization for an internet marketing agency."}
          techStack={["Google AdWords", "Google Analytics", "After Effects"]}
        />
      </ExperienceSection>
      <ExperienceSection sectionName="Education">
        <Education
          schoolName="Utrecht University of Applied Sciences"
          schoolLocation="Utrecht, The Netherlands"
          degree="Journalism"
          degreeDescription="Specialized in television. Member of the Board of Appeals and the Dispute Committee. Not finished."
          yearStart={2013}
          yearEnd={2014}
        />
        <Education
          schoolName="Grafisch Lyceum Utrecht"
          schoolLocation="Utrecht, The Netherlands"
          degree="Media Management"
          degreeDescription="Followed the media intermediary specialization, accelerated course. Interned as an online marketeer at a book publisher and a technical producer for the online TV channel of a Dutch national newspaper."
          yearStart={2010}
          yearEnd={2013}
        />
        <Education
          schoolName="'t Atrium"
          schoolLocation="Amersfoort, The Netherlands"
          degree="MAVO"
          degreeDescription="Economics and sports study program."
          yearStart={2005}
          yearEnd={2009}
        />
      </ExperienceSection>
    </div>
  </div>
  <div class="fixed bottom-0 right-0 p-2 print:hidden">
    <button
      class="btn btn-outline btn-xs sm:btn-sm sm:border-2 lg:btn-md lg:border-2 text-slate-800 opacity-25 hover:opacity-100"
      on:click={() => {
        window.alert(
          "Please consider saving my resume as a PDF instead of printing it. Mother Nature thanks you!"
        );
        window.print();
      }}
    >
      <Icon src={Printer} theme="outline" /></button
    >
  </div>
</main>
