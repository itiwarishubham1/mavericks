<script src="./home.js"></script>
<style scoped src="./home.css"></style>
<template>
    <div>
        <div id="player">
            <video ref="video-element"  width="500px" height="500px" @click="togglePlay($event)" @timeupdate="updateDuration($event)">
                <source src="./video/test.mp4" type="video/mp4"/>
            </video>
            <div id="controls">
                <div>
                    <input ref="slider" class="slider" type="range" min="0" :max="duration" :step="steps" v-model="currentDuration" />
                </div>
            </div>
        </div>
    </div>
</template>