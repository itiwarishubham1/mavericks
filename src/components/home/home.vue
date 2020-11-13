<style scoped src="./home.css"></style>
<style src="./magnifier.css"></style>
<script src="./home.js"></script>

<template>
  <div>
    <div v-show="isPlaying" id="player">
      <video
        id="videoPlayer"
        ref="video-element"
        width="600px"
        height="600px"
        controls
        @mousemove="update($event)"
        @mouseleave="againPlay()"
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
      <span @click="togglePlay($event)">&times;</span>
      <div class="magnifier-thumb-wrapper">
        <img ref="image-element" id="thumb" src="" alt="" width="700px" height="300px">
        <img
          ref="image-element"
          id="thumb"
          src=""
          alt=""
          width="700px"
          height="300px"
          @click="togglePlay($event)"
        />
      </div>
    </div>
    <div v-if="!image">
      <h2>Select an Video</h2>
      <input type="file" @change="onFileChange" />
    </div>
    <div v-else>
      <img :src="image" />
      <button @click="removeImage">Remove image</button>
    </div>
  </div>
</template>