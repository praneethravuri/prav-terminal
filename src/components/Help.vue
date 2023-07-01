<template>
  <div class="help-options" >
    <p v-for="command in commandList" :key="command.commandName">
    <span class="color-green">{{ command.commandName }}</span>
    <span>&nbsp;- {{ command.commandDescription }}</span>
    </p>
  </div>
</template>
  
<script>
export default {
  name: "Help",
  data() {
    return {
      commandList: [
        { commandName: "help", commandDescription: "Show list of all available commands" },
        { commandName: "about", commandDescription: "Get to know me" },
        { commandName: "experience", commandDescription: "Where I have worked" },
        { commandName: "projects", commandDescription: "Show list of all projects" },
        /* { commandName: "skills", commandDescription: "List of technologies I have worked with" }, */
        { commandName: "contact", commandDescription: "Get my contact information" },
      ]
    };
  }
};
</script>
  ``
<style lang="scss" scoped>
.help-options span, p{
  padding: 0;
}
</style>