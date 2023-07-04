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
                        "Developed responsive and user-friendly web application interfaces using front-end technologies and frameworks, achieving a remarkable 34% reduction in latency",
                        "Developed and maintained enterprise web applications, leveraging RESTful APIs and CDNs to achieve a notable 30% improvement in system performance."
                    ]
                },
                {
                    company: "Stige",
                    position: "Frontend Intern",
                    location: "Hyderabad, India",
                    dateRange: "Aug. 2021 - Oct. 2021",
                    content: [
                        "Implemented front-end performance optimizations, including lazy loading and code minification, resulting in a significant 15 % reduction in the website's overall file size",
                        "Collaborated with UX designers to ensure seamless compatibility between design elements and application programming interfaces, guaranteeing optimal product functionality"
                    ]
                }
            ]
        };
    }
};
</script>


<style scoped lang="scss">
@import "../styles/_variables.scss";
.work{
    padding-bottom: 10px;
    margin-bottom: 30px;
    border-bottom: 2px dashed $grey;
}

.main-content-heading{
    color: $content-heading-color;
}

.generate-exp{
    width: 75%;
}
</style>