<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  created() {
    console.log("About created");
  },
  mounted() {
    console.log("About mounted");
  },
  updated() {
    console.log("About updated");
  },
  destroyed() {
    console.log("About destroyed");
  }
};
</script>
<style>
.about {
  margin-top: 60px;
}
</style>
