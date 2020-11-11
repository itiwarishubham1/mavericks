export default  {
    name: 'HomeComponent',
    data() {
        return {
            msg: 'Hello Welcome to my app',
            currentDuration:0.1,
            duration: 100,
            steps:0.5,
            isPlaying: true,
        }

    },
    methods: {
        togglePlay() {
            let player = this.$refs['video-element'];
            if (this.isPlaying) {
                player.pause();
            } else {
                player.play();
            }
            this.isPlaying =!this.isPlaying;
        },
        updateDuration() {
            let player = this.$refs['video-element'];
            this.currentDuration = player.currentTime;
        },
        getLength(str) {return str.length;}     
    },
    computed: {
        
    },
    watch: {
        currentDuration:function(val) {
            let player = this.$refs['video-element'];
            let slider = this.$refs['slider'];
            this.duration = player.duration;
            player.currentTime = val
            this.currentDuration = player.currentTime;
            slider.style.background = 'linear-gradient(to right, #82CFD0 0px, #82CFD0 ' + val*(400/this.duration) + 'px, black ' + val*(400/this.duration) + 'px, black 400px)'
        }
    },
}