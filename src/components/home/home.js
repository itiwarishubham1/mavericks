export default  {
    name: 'HomeComponent',
    data() {
        return {
            msg: 'Hello Welcome to my app',
            // progressBar: document.getElementById('progress-bar'),
        }
    },
    methods: {
        progresClicked() {

            // let player = this.$refs['video-element'];
            let progressBar= this.$refs['progress-bar'];
            // let fillbar = this.$refs['fill'];
            // const handle = this.$refs['handle'];
            progressBar.addEventListener('mousemove',this.seek);
            // var percent = e.offsetX / progressBar.offsetWidth;
            // player.currentTime = percent * player.duration;
            // e.target.value = Math.floor(percent / 100);
            // fillbar.style.width = percent + e.offsetX+'px';
            // handle.style.left = percent + e.offsetX + 'px';
        },
        remove() {
            let progressBar= this.$refs['progress-bar'];
            progressBar.removeEventListener('mousemove');
        },
        seek(e) {
            let player = this.$refs['video-element'];
            let progressBar= this.$refs['progress-bar'];
            let fillbar = this.$refs['fill'];
            const handle = this.$refs['handle'];
            // progressBar.addEventListener('mousemove',this.seek)
            var percent = e.offsetX / progressBar.offsetWidth;
            player.currentTime = percent * player.duration;
            e.target.value = Math.floor(percent / 100);
            fillbar.style.width = percent + e.offsetX+'px';
            handle.style.left = percent + e.offsetX + 'px';
        },
        getLength(str) {return str.length;}     
    },
    computed: {
        
    },
    watch: {
        
    },
}