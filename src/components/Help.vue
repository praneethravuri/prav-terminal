<template>
  <div class="help-options" v-for="command in commandList" :key="command.commandName">
    <p class="green-text">{{ command.commandName }}</p>
    <p>&nbsp;- {{ command.commandDescription }}</p>
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
<style>

.help-options{
  display: flex;
}
</style>