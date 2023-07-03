<template>
    <div class="m-30" v-for="edu in eduction" :key="edu.institution">
        <p class="main-content-heading">{{ edu.institution }}</p>
        <p>{{ edu.degree }} | {{ edu.dateRange }}</p>
    </div>
</template>

<script>
export default {
    name: "Education",
    data() {
        return {
            eduction: [
                { institution: "George Mason University", degree: "Master of Science - MS, Computer Science", dateRange: "2022 ~ 2024" },
                { institution: "Gokaraju Rangaraju Institute of Engineering and Technology", degree: "Bachelor of Technology - BTech, Computer Science", dateRange: "2018 ~ 2022" }
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