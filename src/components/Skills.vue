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
                { skillType: "Core", skillsList: ["Python", "Javascript", "HTML", "CSS", "C"] },
                { skillType: "Frameworks", skillsList: ["Node.js", "Express.js", "Vue.js", "jQuery", "Scss", "Bootstrap", "Flask"] },
                { skillType: "Databases", skillsList: ["MongoDB", "MySQL"] },
                { skillType: "Tools", skillsList: ["Git", "Github", "VS Code", "Pycharm", "Jupyter"] },
                { skillType: "Miscellaneous", skillsList: ["Zorba", "JSONiq"] },
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