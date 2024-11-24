<template>
    <div class="generate-exp">
        <div class="work" v-for="exp in experience" :key="exp.company">
            <p class="main-content-heading">{{ exp.position }} @ {{ exp.company }}</p>
            <p>- {{ exp.dateRange }}</p>
            <p>- {{ exp.location }}</p>
            <div class="work-content" v-for="content in exp.content" :key="content" style="margin: 0;">
                <p>- {{ content }}</p>
                <br />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Experience",
    data() {
        return {
            experience: [
                {
                    company: "Prodapt",
                    position: "Data Analyst",
                    location: "Richardson, Texas",
                    dateRange: "Oct. 2024 - Present",
                    content: [
                        "Built and optimized data pipeline processing IPFIX data from 1000+ OLTs using multithreading, reducing processing time by 80%",
                        "Engineered MongoDB to Google Cloud BigQuery integration for real-time network analytics, managing 100+ GB daily data flow",
                        "Created AI-powered monitoring system using LLMs to analyze network performance and provide automated customer insights",
                        "Reduced network issue resolution time by 40% through automated anomaly detection system handling 10M+ daily events"
                    ]
                },
                {
                    company: "Cognizant",
                    position: "Software Development Intern",
                    location: "Hyderabad, India",
                    dateRange: "Jan. 2022 - Jun. 2022",
                    content: [
                        "Collaborated with a team to develop a real-time internal company chat application, leveraging Socket.IO.",
                        "Facilitated REST API integration, contributing to a 25% improvement in data retrieval speeds & system updates.",
                        "Coordinated with a cross-functional team to implement CI/CD pipelines with Jenkins, Docker, and Kubernetes.",
                        "Partnered with senior software engineers on microservices architecture, boosting application scalability and performance.",
                        "Engaged in Agile practices, code reviews, pair programming, and documented API endpoints and software architecture."
                    ]
                },
                {
                    company: "Stige",
                    position: "Frontend Intern",
                    location: "Hyderabad, India",
                    dateRange: "Aug. 2021 - Oct. 2021",
                    content: [
                        "Resolved over 20 cross-browser compatibility issues, boosting user interface consistency and adherence to web standards.",
                        "Translated wireframes into functional, responsive online experiences, ensuring seamless integration with web services.",
                        "Managed technical documentation on front-end development guidelines, promoting knowledge sharing on best practices.",
                        "Implemented Jest and Selenium for unit and integration tests, improving code reliability by 40%.",
                        "Increased web app responsiveness and interactivity with jQuery and AJAX requests, reducing server response time by 25%."
                    ]
                },

            ]
        };
    }
};
</script>


<style scoped lang="scss">
@import "../styles/_variables.scss";

.work {
    padding-bottom: 10px;
    margin-bottom: 30px;
    border-bottom: 2px dashed $grey;
}

.main-content-heading {
    color: $content-heading-color;
}

.generate-exp {
    width: 75%;
}
</style>
