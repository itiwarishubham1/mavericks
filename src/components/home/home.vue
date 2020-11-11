<script src="./home.js"></script>
<style scoped src="./home.css"></style>
<template>
    <div>
        <div id="player">
            <video ref="video-element"  width="500px" height="500px" >
                <source src="./video/test.mp4" type="video/mp4"/>
            </video>
            <div id="controls">
                <div ref="progress-bar" class="progress-bar" @mousedown="progresClicked($event)" @mouseup="remove()">
                    <div ref="fill" class="fill"></div>
                    <div ref="handle" class="handle"></div>
                    
                </div>
            </div>
        </div>
    </div>
</template>