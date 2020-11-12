<style scoped src="./home.css"></style>
<style src="./magnifier.css"></style>
<script src="./home.js"></script>

<template>
  <div>
    <div id="player">
      <video
        id="videoPlayer"
        ref="video-element"
        width="500px"
        height="500px"
        @click="togglePlay($event)"
        @timeupdate="updateDuration($event)"
      >
        <source src="./video/test.mp4" type="video/mp4" />
      </video>
      <div id="controls">
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
    </div>
    <div>
    <div class="magnifier-thumb-wrapper" href="http://en.wikipedia.org/wiki/File:Starry_Night_Over_the_Rhone.jpg">
        <img id="thumb" src="http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/200px-Starry_Night_Over_the_Rhone.jpg">
    </div>
    <div class="magnifier-preview" id="preview" style="width: 200px; height: 133px">Starry Night Over The Rhone<br>by Vincent van Gogh</div>
</div>
  </div>
</template>