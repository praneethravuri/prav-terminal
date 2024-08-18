<template>
    <div v-for="skill in skills" :key="skill.skillType">
        <p><span class="main-content-heading">{{ skill.skillType }}:</span> <span>{{ skill.skillsList.join(", ") }}</span></p>
        <br>
    </div>
</template>

<script>
export default {
    name: "Skills",
    data() {
        return {
            skills: [
                { 
                    skillType: "Languages", 
                    skillsList: ["Python", "JavaScript", "TypeScript", "HTML", "CSS", "C", "C++", "Java", "Go"]
                },
                { 
                    skillType: "Frameworks & Libraries", 
                    skillsList: ["Vue.js", "React", "Express.js", "Node.js", "Flask", "NumPy", "Redux", "Socket.IO", "Selenium", "Jest", "BeautifulSoup", "Requests", "jQuery", "Sass", "Tailwind CSS", "Bootstrap"]
                },
                { 
                    skillType: "Databases", 
                    skillsList: ["SQL", "MySQL", "MongoDB"]
                },
                { 
                    skillType: "Developer Tools", 
                    skillsList: ["Git", "GitHub", "Docker", "Visual Studio Code", "PyCharm", "Jupyter", "Linux", "Windows", "Postman", "AWS", "Vite", "Next.js", "Unix", "Jenkins", "Kubernetes"]
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
.main-content-heading{
    color: $content-heading-color;
}
</style>