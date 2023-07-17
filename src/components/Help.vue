<template>
  <p>Welcome! Here are all the available commands: </p>
  <br>
  <div class="help-options">
    <p v-for="command in commandList" :key="command.commandName">
      <span class="content-heading" >{{ command.commandName }}</span>
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
        { commandName: "help", commandDescription: "Displays a list of all available commands" },
        { commandName: "about", commandDescription: "Provides information about me" },
        { commandName: "experience", commandDescription: "Shows my work experience" },
        { commandName: "projects", commandDescription: "Lists all the projects I have worked on" },
        { commandName: "skills", commandDescription: "List of all technologies I have worked with" },
        { commandName: "contact", commandDescription: "Shares my contact information" },
        { commandName: "education", commandDescription: "Shows where I have studied" },
        { commandName: "repo", commandDescription: "Open this project's github repository" }
      ]
    };
  }
};
</script>
  ``
<style lang="scss" scoped>
@import "../styles/_variables.scss";
.help-options span,
p {
  padding: 0;
}

.content-heading{
  color: $content-heading-color;
}
</style>