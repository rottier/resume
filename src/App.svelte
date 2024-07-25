<script lang="ts">
    import Education from "./lib/components/Experience/Education/Education.svelte";
    import ExperienceSection from "./lib/components/Experience/ExperienceSection.svelte";
    import { JobLocation } from "./lib/components/Experience/Job";
    import Job from "./lib/components/Experience/Job/Job.svelte";
</script>

<main>
    <div class="flex items-center justify-center">
        <div class="space-y-8 m-16 max-w-prose print:max-w-full">
            <ExperienceSection sectionName="Who am I?">
                <div class="flex flex-row">
                    <p class="text-slate-500 px-3 text-sm">
                        My name is Marino Rottier, a wide-oriented software
                        developer. I'm experienced in building desktop/web
                        applications front-to-back and passionate about modern
                        UI and CI. I'm also an experienced drummer, just ask my
                        neighbors!
                    </p>
                    <div class="avatar">
                        <div class="w-24 rounded">
                            <img
                                alt="Photo of Marino Rottier"
                                src="marino.jpeg"
                            />
                        </div>
                    </div>
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
                    jobDescription={"Starting off as an application engineer, I developed control and monitoring applications for major broadcasters like BBC, ITN, and ORF. This involved setting up the development environment, including version control, deployment workflows, and code documentation, as well as creating a package/module framework for the proprietary scripting language. Transitioning to a software engineer role, I worked on Cerebrum, a broadcast control and monitoring system, focusing on web-based control using React and TypeScript and extending the C++ based UI. Additionally, I prototyped applications with Figma, worked on CI/CD pipelines, and, as part of an interdepartmental UI team, improved and standardized our front-end practices and tools."}
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
                    jobDescription={"My broadcasting career began as a graphics operator, where I created, scripted, and operated real-time graphics for live TV productions, from Dutch daily talk shows to international broadcasts. To enhance the company's augmented reality offerings, I transitioned to a technical artist, self-teaching gaming technology principles. In this role, I programmed real-time graphics pipelines and applications for live TV, specializing in virtual production. I developed data-driven augmented reality graphics for Dutch elections and the 2017 FIFA World Cup coverage on Mediaset in Italy."}
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
                    techStack={[
                        "Google AdWords",
                        "Google Analytics",
                        "After Effects",
                    ]}
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
</main>