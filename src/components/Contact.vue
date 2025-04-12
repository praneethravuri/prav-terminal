<template>
    <div v-for="contact in contactInfo" :key="contact.contactName">
        <p><span class="main-content-heading">[{{ contact.contactName }}]</span>: <span><a target="_blank" :href="getContactLink(contact)">{{ contact.contactLink }}</a></span></p>
    </div>
</template>

<script>
export default {
    name: "Contact",
    data() {
        return {
            contactInfo: [
                { contactName: "Github", contactLink: "https://github.com/praneethravuri" },
                { contactName: "LinkedIn", contactLink: "https://www.linkedin.com/in/prav25/" },
                { contactName: "Email", contactLink: "pravdevrav@gmail.com" },
                { contactName: "Resume", contactLink: "https://docs.google.com/document/d/1WRFH23ZtdiQ4nyhasIPsxmqd8ntMUbu78mgkVt7RD8c/edit?usp=sharing" },
            ],
        };
    },
    methods: {
        getContactLink(contact) {
            if (contact.contactName === "Email") {
                return "mailto:" + contact.contactLink;
            }
            return contact.contactLink;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

.main-content-heading{
    color: $content-heading-color;
}

</style>
