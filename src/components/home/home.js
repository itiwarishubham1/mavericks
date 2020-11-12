import {Event} from './Event.js';
import {Magnifier} from  './Magnifier.js';

// const Magnifier = require("./Magnifier");

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
        magnify(imgID, zoom) {
            var img, glass, w, h, bw;
            img = document.getElementById(imgID);
            /*create magnifier glass:*/
            glass = document.createElement("DIV");
            glass.setAttribute("class", "img-magnifier-glass");
            /*insert magnifier glass:*/
            img.parentElement.insertBefore(glass, img);
            /*set background properties for the magnifier glass:*/
            glass.style.backgroundImage = "url('" + img.src + "')";
            glass.style.backgroundRepeat = "no-repeat";
            glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
            bw = 3;
            w = glass.offsetWidth / 2;
            h = glass.offsetHeight / 2;
            console.log('width'+w);
            /*execute a function when someone moves the magnifier glass over the image:*/
            glass.addEventListener("mousemove", moveMagnifier);
            img.addEventListener("mousemove", moveMagnifier);
            /*and also for touch screens:*/
            glass.addEventListener("touchmove", moveMagnifier);
            img.addEventListener("touchmove", moveMagnifier);
            function moveMagnifier(e) {
              var pos, x, y;
              /*prevent any other actions that may occur when moving over the image*/
              e.preventDefault();
              /*get the cursor's x and y positions:*/
              pos = getCursorPos(e);
              x = pos.x;
              y = pos.y;
              console.log('x:'+x);
              console.log('y:'+y);
              /*prevent the magnifier glass from being positioned outside the image:*/
              if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
              if (x < w / zoom) {x = w / zoom;}
              if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
              if (y < h / zoom) {y = h / zoom;}
              /*set the position of the magnifier glass:*/
              glass.style.left = (x - w) + "px";
              glass.style.top = (y - h) + "px";
              /*display what the magnifier glass "sees":*/
              glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
            }
            function getCursorPos(e) {
              var a, x = 0, y = 0;
              e = e || window.event;
              /*get the x and y positions of the image:*/
              a = img.getBoundingClientRect();
              /*calculate the cursor's x and y coordinates, relative to the image:*/
              x = e.pageX - a.left;
              y = e.pageY - a.top;
              /*consider any page scrolling:*/
              x = x - window.pageXOffset;
              y = y - window.pageYOffset;
              return {x : x, y : y};
            }
        },
        togglePlay() {
            let player = this.$refs['video-element'];
            if (this.isPlaying) {
                player.pause();
                var canvas = document.createElement("canvas");
                var video = document.getElementById("videoPlayer");
                if (video.paused) {
                    var ctx = canvas.getContext('2d');
                    ctx.scale(1,1);
                    ctx.drawImage(video, 0, 0, 500, 500);
                }
                var img = document.getElementById("thumb");
                img.src = canvas.toDataURL(); 
                //this.magnify("myimage", 2);
                //let m = Magnifier();
                alert(typeof Event);
                alert(typeof (new Magnifier(new Event())).attach);
                const custMagnifier = new Magnifier(new Event());
                custMagnifier.attach({
                    thumb: '#thumb',
                    large: 'http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/400px-Starry_Night_Over_the_Rhone.jpg',
                    largeWrapper: 'preview'
                });
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