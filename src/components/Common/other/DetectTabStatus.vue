<script>
export default {
    data() {
        return {
            elapsedTime: 0,
            timer: 0,
        }
    },
    computed: {
        formattedElapsedTime() {
            const date = new Date(null);
            date.setSeconds(this.elapsedTime / 1000);
            const utc = date.toUTCString(); // 'Thu, 01 Jan 1970 00:00:00 GMT'
            return utc.substr(utc.indexOf(":") - 2, 8);
        },
    },
    methods: {
        start() {
            this.timer = setInterval(() => {
                this.elapsedTime += 1000;
            }, 1000);
        },
        reset() {
            clearInterval(this.timer);
            this.elapsedTime = 0;
        },
        visibilityChange() {
            if (document.hidden) {
                console.log("tab hidden=> ", document.hidden);
                this.reset();
            } else {
                console.log("tab hidden=> ", document.hidden);
                this.start();
            }
        },
    },
    created() {
        this.start();
            document.addEventListener("visibilitychange", this.visibilityChange, false);
    },
}
</script>
<template>
    <div>
        {{ formattedElapsedTime }}
    </div>
</template>
<style lang="scss" scoped>
    
</style>