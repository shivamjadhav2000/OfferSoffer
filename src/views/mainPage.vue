<script setup lang="ts">
import myNavbar from "../components/myNavbar.vue";
import profile from "../components/profile.vue";
import posts from "../components/posts.vue";
</script>

<template>
  <div class="mainPage">
    <profile />
    <myNavbar page="Posts" />
    <posts />
  </div>
</template>
<style>
.mainPage {
  background: rgb(255, 255, 255);
}
</style>
