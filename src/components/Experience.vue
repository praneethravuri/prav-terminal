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
                        "At Prodapt, I helped improve how we handle and analyze massive amounts of network data. Working with information from over 5,000 devices felt like trying to understand 5,000 people talking all at once. So, I built a system using Go and Kafka to manage this smoothly.",
                        "My job included setting up a decoder (not built from scratch, but customized) to process enterprise data across 170+ types of network telemetry information. I also added a safety net: if the database connection failed or data couldn't be saved, the system automatically stored the data in JSON files to prevent losses.",
                        "With over 100GB of data processed daily, reliability was critical. I designed the system to self-heal. If one component failed, others stepped in to keep everything running. This lets us spot network issues early, maintaining stable and efficient services for users.",
                    ]
                },
                {
                    company: "Cognizant",
                    position: "Full Stack Engineer",
                    location: "Hyderabad, India",
                    dateRange: "Jan. 2021 - Jun. 2022",
                    content: [
                        "At Cognizant, I tackled the problem of enabling smooth real-time communication for large groups. Using WebSocket technology, I created a platform that could handle 500+ users simultaneously. Imagine a virtual event where everyone chats smoothly without delays.",
                        "A key achievement was boosting API speed. By adding Redis caching and connection pooling, responses became lightning-fast. It's like creating VIP lanes on a busy road: everyday users keep flowing, but repeat requests zip through quicker.",
                        "I also contributed to updating our systems by adopting microservices powered by Kubernetes and AWS. This was like splitting a bulky, outdated machine into smaller, interchangeable parts that are easier to maintain and grow. We leveraged AWS Lambda for serverless tasks, building a setup that's both agile and strong enough to scale effortlessly.",
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
