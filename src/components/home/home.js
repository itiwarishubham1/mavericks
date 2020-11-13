import { Event } from './Event.js';
import { Magnifier } from './Magnifier.js';

// const Magnifier = require("./Magnifier");

export default {
    name: 'HomeComponent',
    data() {
        return {
            image: '',
            imgSrc: '',
            msg: 'Hello Welcome to my app',
            currentDuration: 0.1,
            duration: 100,
            steps: 0.5,
            duration: 10,
            steps: 1,
            isPlaying: false,
            preOffset: 0,
        }

    },
    methods: {
        update(e) {
            // console.log("++++++++++"+e.offsetX);
            let player = this.$refs['video-element'];
            player.pause();
            
            player.currentTime = e.offsetX * player.duration /600;
        },
        againPlay() {
            let player = this.$refs['video-element'];
            player.play();
        },
        togglePlay() {
            console.log("----------------"+this.isPlaying);
            let player = this.$refs['video-element'];
            if (this.isPlaying) {
                player.pause();
                var canvas = document.createElement("canvas");
                if (player.paused) {
                    var ctx = canvas.getContext('2d');
                    canvas.width = player.videoWidth;
                    canvas.height = player.videoHeight;
                    ctx.drawImage(player, 0, 0, canvas.width, canvas.height);
                }
                var img = this.$refs['image-element'];
                this.imgSrc = canvas.toDataURL("image/png", 1);
                img.src = this.imgSrc;
                //this.magnify("myimage", 2);
                //let m = Magnifier();
                const custMagnifier = new Magnifier(new Event());
                custMagnifier.attach({
                    thumb: '#thumb',
                    mode: 'inside',
                    zoom: 3,
                    zoomable: true
                });
            } else {
                player.play();
            }
            this.isPlaying = !this.isPlaying;
        },
        updateDuration() {
            let player = this.$refs['video-element'];
            this.currentDuration = player.currentTime;
        },
        // updateDuration() {
        //     let player = this.$refs['video-element'];
        //     this.currentDuration = player.currentTime;
        // },
        getLength(str) { return str.length; }
        getLength(str) { return str.length; }
        getLength(str) { 
            return str.length; 
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
              return;
            this.createImage(files[0]);
          },
          createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;
      
            reader.onload = (e) => {
              vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
          },
          removeImage: function (e) {
            this.image = '';
          }
    },
    computed: {

    },
    watch: {
        currentDuration: function (val) {
            let player = this.$refs['video-element'];
            let slider = this.$refs['slider'];
            this.duration = player.duration;
            player.currentTime = val
            this.currentDuration = player.currentTime;
            slider.style.background = 'linear-gradient(to right, #82CFD0 0px, #82CFD0 ' + val * (400 / this.duration) + 'px, black ' + val * (400 / this.duration) + 'px, black 400px)'
            slider.style.background = 'linear-gradient(to right, #82CFD0 0px, #82CFD0 ' + val * (600 / this.duration) + 'px, black ' + val * (600 / this.duration) + 'px, black 600px)'
        }
    },
}