<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import siteSearch from "@/components/siteSearch.vue";
import hTabs from "@/components/hTabs.vue";
import groupData from "@/utils/search_group.js";
</script>

<template>
  <div class="myapp">
    <siteSearch :groupData="groupData" />
    <hTabs />
  </div>
</template>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f1e8e8;
  margin: 0 auto;
  margin-top: 100px;
  max-width: 800px;
}
</style>
