<template>
    <div class="help-options m-30">
      <table>
        <thead>
          <tr>
          </tr>
        </thead>
        <tbody>
          <tr v-for="command in commandList" :key="command.commandName">
            <td class="green-text">{{ command.commandName }}</td>
            <td> - {{ command.commandDescription }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "Help",
    data() {
      return {
        commandList: [
          { commandName: "help", commandDescription: "Show list of all available commands" },
          {commandName : "about", commandDescription : "Get to know me"},
          {commandName : "experience", commandDescription : "Where I have worked"},
          { commandName: "projects", commandDescription: "Show list of all projects" },
          {commandName : "skills", commandDescription : "List of technologies I have worked with"},
          {commandName : "contact", commandDescription : "Get my contact information"},
        ]
      };
    }
  };
  </script>
  ``
<style>
td{
    padding-right: 25px;
}
</style>