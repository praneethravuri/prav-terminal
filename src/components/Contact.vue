<template>
    <div v-for="contact in contactInfo" :key="contact.contactName">
        <p>[{{ contact.contactName }}]: <span><a target="_blank" :href="getContactLink(contact)">{{ contact.contactLink }}</a></span></p>
    </div>
</template>

<script>
export default {
    name: "Contact",
    data() {
        return {
            contactInfo: [
                { contactName: "Github", contactLink: "https://github.com/praneethravuri" },
                { contactName: "LinkedIn", contactLink: "https://www.linkedin.com/in/praneeth-ravuri2500/" },
                { contactName: "Email", contactLink: "prav2500@gmail.com" },
                { contactName: "Resume", contactLink: "https://drive.google.com/file/d/1AiUdUmqhrWz8wlmGVeOhDD2Pr5CBxW7C/view" },
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
