<template>
    <div class="generate-exp">
        <div class="work" v-for="exp in experience" :key="exp.company">
            <p class="main-content-heading">{{ exp.position }} @ {{ exp.company }}</p>
            <p>- {{ exp.dateRange }}</p>
            <p>- {{ exp.location }}</p>
            <br />
            <div class="work-content" v-for="content in exp.content" :key="content" style="margin: 0;">
                <p>- {{ content }}</p>
                <br />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Experience",
    data() {
        return {
            experience: [
                {
                    company: "Prodapt",
                    position: "Software Engineer",
                    location: "Richardson, Texas (On-site)",
                    dateRange: "Oct. 2024 - Present",
                    content: [
                        "At Prodapt, I took on the challenge of managing telemetry data from over 5,000 network devices. Picture 5,000 people talking all at once—it's chaos unless you know how to listen. Using Go and Kafka, I built a system that could handle this chatter and make sense of it.",
                        "One of my key tasks was configuring a decoder to handle enterprise-specific data for over 170 network metrics. It wasn't built from scratch, but I made sure it worked perfectly for our needs. I also added a safety net—if the database ever went down, the system would save data to files so we wouldn't lose anything critical.",
                        "With over 100GB of data flowing in every day, the system needed to be super reliable. I designed it to be fault-tolerant—if one part stopped working, another stepped in to keep things running. This setup helped us catch issues early and ensure smooth operations.",
                    ]
                },
                {
                    company: "Cognizant",
                    position: "Software Engineer",
                    location: "Hyderabad, India",
                    dateRange: "Jan. 2020 - Jun. 2022",
                    content: [
                        "At Cognizant, I worked on making real-time communication simple and seamless. I built a platform using WebSocket protocols that could handle 500+ users chatting at once—like hosting a giant virtual event where everyone's conversations flowed smoothly, no lag or hiccups.",
                        "I also rolled up my sleeves to improve API performance. By adding Redis caching and connection pooling, I sped up response times big time. Imagine turning a crowded highway into one with express lanes—everything moves faster, and frequent users get even quicker access.",
                        "Another cool project was modernizing the infrastructure. I moved things to microservices on Kubernetes and AWS, breaking down a big, clunky system into smaller, flexible pieces that were easier to manage and scale. Using AWS Lambda, EC2, and S3, we built something robust and ready for anything.",
                    ]
                },

            ]
        };
    }
};
</script>


<style scoped lang="scss">
@import "../styles/_variables.scss";

.work {
    padding-bottom: 10px;
    margin-bottom: 30px;
    border-bottom: 2px dashed $grey;
}

.main-content-heading {
    color: $content-heading-color;
}

.generate-exp {
    width: 75%;
}
</style>
