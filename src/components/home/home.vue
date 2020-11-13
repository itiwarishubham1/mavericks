<style scoped src="./home.css"></style>
<style src="./magnifier.css"></style>
<script src="./home.js"></script>

<template>
  <div>
    <h1 v-show="isPlaying"><b><u>3-D KAR Conceptor</u></b></h1>
    <div v-show="isPlaying" id="player">
      <video
        id="videoPlayer"
        ref="video-element"
        width="550px"
        height="400px"
        preload="auto"
        @mousemove="update($event)"
        @mouseleave="againPlay()"
        @timeupdate="updateDuration()"
        @click="togglePlay($event)"
      >
        <source src="./video/test2.mp4" type="video/mp4" />
      </video>
      <!-- <div id="controls">
        <div>
          <input
            ref="slider"
            class="slider"
            type="range"
            min="0"
            :max="duration"
            :step="steps"
            v-model="currentDuration"
          />
        </div>
      </div>
      </div> -->
    </div>
    <div id="image" v-show="!isPlaying">
      <span @click="togglePlay($event)" class="cross">&times;</span>
      <div class="magnifier-thumb-wrapper">
        <img
          ref="image-element"
          id="thumb"
          src="./Welcom.jpg"
          alt=""
          width="700px"
          height="300px"
          @click="togglePlay($event)"
        />
      </div>
    </div>
    </div>
</template>