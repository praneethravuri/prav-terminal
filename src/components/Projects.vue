<template>
    <div class="projects">
        <div class="sub-project m-30" v-for="project in projects" :key="project.projectName">
            <p class="main-content-heading">{{ project.projectName }}</p>
            <p> - {{ project.projectDescription }}</p>
            <div v-if="project.githubLink && project.websiteLink">
                <p> - Links: <span> <a :href="project.githubLink" target="_blank">[GitHub]</a> |
                        <a :href="project.websiteLink" target="_blank">[Website]</a></span></p>
            </div>
            <div v-else-if="project.githubLink">
                <p> - Link: <span><a :href="project.githubLink" target="_blank">[GitHub]</a></span></p>
            </div>
            <div v-else-if="project.websiteLink">
                <p> - Link: <span><a :href="project.websiteLink" target="_blank">[Website]</a></span></p>
            </div>
            <p> - Technologies: <span class="color-green">{{ project.tags.join(", ") }}</span></p>
        </div>
    </div>
</template>
  

<script>
export default {
    name: "Projects",
    data() {
        return {
            projects: [
                {
                    projectName: "PRAV Terminal",
                    projectDescription:
                        "A retro and terminal themed website made with Vue.js and Scss. This single page application behaves like a terminal and has server-side-rendering",
                    githubLink: "https://github.com/praneethravuri/prav-terminal",
                    websiteLink: "https://prav.dev/",
                    tags: ["Vue.js", "Javascript", "Scss"],
                },
                {
                    projectName: "PRAV V2",
                    projectDescription:
                        "Second iteration of my personal website designed with Vue.js and Scss and hosted on Netlify",
                    githubLink: "https://github.com/praneethravuri/PRAV-V2",
                    websiteLink: "https://prav-v2.netlify.app/",
                    tags: ["Vue.js", "Javascript", "Scss"],
                },
                {
                    projectName: "Weatherly",
                    projectDescription: "Weatherly is a user-friendly website that seamlessly integrates with Google Maps to provide you with accurate and up-to-date weather information for any location around the world ",
                    githubLink: "https://github.com/praneethravuri/weatherly",
                    websiteLink: "https://weatherlycloud.netlify.app/",
                    tags: ["Javascript", "Sass", "jQuery"]
                },
                {
                    projectName: "Horizon Airlines Bookings",
                    projectDescription: "A full-stack application built using Flask and MongoDB to book and manage flight reservations. This application was created for the INFS 750 course at GMU",
                    githubLink: "https://github.com/praneethravuri/Horizon-Airlines-Bookings",
                    tags: ["Javascript", "Flask", "MongoDB", "Bootstrap"]
                },
                {
                    projectName: "Patriot Board",
                    projectDescription: "A collaborative project designed to improve the UI of GMU's course registration website",
                    githubLink: "https://github.com/praneethravuri/Patriot-Board",
                    websiteLink: "http://mason.gmu.edu/~kdonapat/index",
                    tags: ["Javascript", "Selenium", "jQuery"]
                },
                {
                    projectName: "PRAV",
                    projectDescription:
                        "First iteration of my personal website designed on the fly with Sass and Vanilla Javascript and hosted on Netlify",
                    websiteLink: "https://prav-v1.netlify.app/",
                    githubLink: "https://github.com/praneethravuri/PRAV",
                    tags: ["Javascript", "Sass", "jQuery"],
                },
                {
                    projectName: "Invespo",
                    projectDescription: "Invespo: A stock trading front-end for SWE 632 course @ George Mason Univ. Built with HTML, CSS, JS, jQuery. Explores interface design principles in user-centric design",
                    githubLink: "https://github.com/praneethravuri/Invespo",
                    tags: ["Javascript", "jQuery", "Bootstrap"]
                },
                {
                    projectName: "Jet Sphere",
                    projectDescription: "A backend web application with JWT user authentication and validation, manage flight bookings, update / delete account, administrative database changes, and session management",
                    githubLink: "https://github.com/praneethravuri/Jet-Sphere",
                    tags: ["Javascript", "MongoDB", "Node", "Express.js"]
                },
                {
                    projectName: "Amazon Product Information Scraper",
                    projectDescription: "A web-scraping bot that retrieves product names, prices, review stars, and review counts for a specific category",
                    githubLink: "https://github.com/praneethravuri/Amazon-Product-Information-Scraper",
                    tags: ["Python", "Selenium", "BeautifulSoup"]
                },
                {
                    projectName: "Task Tracker",
                    projectDescription: "A frontend project made with Vue.js. Includes functions like add, update, and delete tasks and toggle set reminders",
                    githubLink: "https://github.com/praneethravuri/Task-Tracker",
                    tags: ["Vue.js", "Javascript"]
                }

            ],
        }
    }
}
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

.projects {

    width: 75%;

    & div div {
        margin: 0;
    }

    & .sub-project {
        border-bottom: 2px dashed $grey;
        padding-bottom: 10px;
        margin-bottom: 30px;
    }
}

.main-content-heading{
    color: $content-heading-color;
}

a{
    color: $green;
}
</style>