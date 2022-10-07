<script setup lang="ts">
import myNavbar from "../components/myNavbar.vue";
import profile from "../components/profile.vue";
import leads from "../components/leads.vue";
</script>

<template>
  <div class="mainPage">
    <profile />
    <myNavbar page="Leads" />
    <leads />
  </div>
</template>
<style>

.mainPage {
  background: rgb(255, 255, 255);
}
</style>
