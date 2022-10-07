<script setup lang="ts">
import myNavbar from "../components/myNavbar.vue";
import profile from "../components/profile.vue";
import ratings from "../components/ratings.vue";
</script>

<template>
  <div class="mainPage">
    <profile />
    <myNavbar page="Ratings" />
    <ratings />
  </div>
</template>
<style>
.mainPage {
  background: rgb(255, 255, 255);
}
</style>
