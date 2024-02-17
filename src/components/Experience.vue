<template>
    <div class="generate-exp">
        <div class="work" v-for="exp in experience" :key="exp.company">
            <p class="main-content-heading">{{ exp.position }} @ {{ exp.company }}</p>
            <p>- {{ exp.dateRange }}</p>
            <p>- {{ exp.location }}</p>
            <div class="work-content" v-for="content in exp.content" :key="content" style="margin: 0;">
                <p>- {{ content }}</p>
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
                    company: "Cognizant",
                    position: "Software Development Intern",
                    location: "Hyderabad, India",
                    dateRange: "Jan. 2022 - Jun. 2022",
                    content: [
                        "Collaborated with a team to develop a real-time internal company chat application, leveraging Socket.IO and Express.js.",
                        "Facilitated REST API integration, contributing to a 25% improvement in data retrieval speeds and system updates.",
                        "Assisted in implementing CI/CD pipelines using GitLab, automating deployment to enhance efficiency and reduce errors.",
                        "Partnered with senior engineers on microservices architecture, boosting application scalability and performance."
                    ]
                },
                {
                    company: "Stige",
                    position: "Frontend Intern",
                    location: "Hyderabad, India",
                    dateRange: "Aug. 2021 - Oct. 2021",
                    content: [
                        "Rectified over 20 cross-browser compatibility issues, boosting user interface consistency and adherence to web standards.",
                        "Morphed wireframes into functional, responsive online experiences, ensuring seamless integration with web services.",
                        "Managed technical documentation on front-end development guidelines, promoting knowledge sharing on best practices."
                    ]
                },
                {
                    company: "IEEE GRIET SB",
                    position: "Web Developer",
                    location: "Hyderabad, India",
                    dateRange: "Aug. 2019 - Dec. 2021",
                    content: [
                        "Orchestrated a 5-person team in overhauling the IEEE student body website, elevating functionality and design.",
                        " Successfully recovered lost data, reinstating critical information for the student community."
                    ]
                }
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