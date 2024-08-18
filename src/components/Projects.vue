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
projects = [
    {
        projectName: "LLM Chat Application",
        projectDescription: "Built an interactive chat app using pre-trained LLMs for real-time Q&A, integrating Hugging Face Transformers, boosting response accuracy by 40%. Implemented RAG, increasing answering speed by 35%. Designed a scalable full-stack solution with FastAPI and SQL, reducing query processing time by 30%. Used Figma for UI design and Redux for consistent performance.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "SQL", "Figma", "Redux", "Generative AI", "SearXNG"].
            githubLink : "https://github.com/praneethravuri/open-llms"
    },
    {
        projectName: "Traffic Congestion Reduction with SARSA",
        projectDescription: 'The "Traffic Congestion Reduction with SARSA" applies SARSA reinforcement learning for efficient urban traffic and pedestrian management, incorporating simulation, algorithmic implementation, and evaluation to enhance safety and reduce congestion. Applied a SARSA-based reinforcement learning model optimizing traffic signal timings, reducing congestion by 33% and average travel time by 25%. Enhanced traffic flow efficiency by 20% and reduced idle time at intersections by 30% with improved management strategies.',
        githubLink: "https://github.com/praneethravuri/traffic-congestion-reduction-with-SARSA",
        tags: ["Python", "SARSA", "Reinforcement Learning", "Pygame", "AI", "NumPy"]
    },
    {
        projectName: "Amazon Product Information Scraper",
        projectDescription: "A web-scraping bot that retrieves product names, prices, review stars, and review counts for a specific category. Developed an automated tool for e-commerce intelligence, extracting Amazon product data for pricing analysis and trend monitoring, increasing data analysis efficiency by 50%. Simplified data collection by capturing product details and exporting to Excel to boost strategic decision-making analysis.",
        githubLink: "https://github.com/praneethravuri/Amazon-Product-Information-Scraper",
        tags: ["Python", "Selenium", "BeautifulSoup", "Requests"]
    },
    {
        projectName: "Social Media Website",
        projectDescription: "Designed a scalable, full-stack social media web app with responsive design, reusable components, MVC architecture, and user-centric features, improving development efficiency by 30%. Executed Jest-based unit testing to ensure system reliability, and upholding high functionality and security standards.",
        tags: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "Shad-cn", "Jest"],
        githubLink : "https://github.com/praneethravuri/connexion"
    },
    {
        projectName: "Weatherly",
        projectDescription: "Weatherly is a user-friendly website that seamlessly integrates with Google Maps to provide you with accurate and up-to-date weather information for any location around the world",
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
    }
]
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
