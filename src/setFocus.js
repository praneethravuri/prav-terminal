document.addEventListener("DOMContentLoaded", () => {
    document.getElementsByTagName("body")[0].addEventListener("keypress", () => {
        document.getElementById("command-input").focus();
    });
});
