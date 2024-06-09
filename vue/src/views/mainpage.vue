<template>
    <video autoplay muted loop>
        <source src="../train.mp4" type="video/mp4" />
    </video>
</template>

<script setup></script>

<style scoped>
video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}
</style>