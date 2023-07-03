<template>
    <span id="guest">guest</span>
    <span>@</span>
    <span id="website">prav.dev</span>
    <span>:$ ~</span>
</template>
  

<script>
export default {
    name: "Prompt"
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

#guest{
    color: $prompt-color-1;
}
#website{
    color: $prompt-color-2;
}
</style>
  