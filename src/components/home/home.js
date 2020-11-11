export default  {
    name: 'HomeComponent',
    data() {
        return {
            msg: 'Hello Welcome to my app',
            currentDuration:0.1,
            duration: 0,
            steps:0.5,
        }

    },
    methods: {
        getLength(str) {return str.length;}     
    },
    computed: {
        
    },
    mounted() {
        let player = this.$refs['video-element'];
        this.duration = player.duration;
    },
    watch: {
        currentDuration:function(val) {
            let player = this.$refs['video-element'];
            player.currentTime = val
            this.currentDuration = player.currentTime;
        }
    },
}