<script setup lang="ts">
import myNavbar from "../components/myNavbar.vue";
import profile from "../components/profile.vue";
import Posts from "../components/posts.vue";

</script>

<template>
  <div class="mainPage">
    <profile />
    <myNavbar page="Posts" />
    <Posts />
  </div>
</template>

<style>
.mainPage{
  font-family: 'Karla';
    font-style: normal;
}
</style>
