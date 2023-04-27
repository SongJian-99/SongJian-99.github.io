<template>
  <router-link to="/books/">
    <button class="startBtn">关于</button>
  </router-link>
</template>

<script>
  export default {
    name: 'HomeStart'
  }
</script>

<style scoped>
  .startBtn {
    position: absolute;
    top: -55rem;
    left: 420px;
    z-index: 9999999999;
    width: 100px;
    height: 50px;
    background-color:#3eaf7c;
    border: 0;
    color: white;
    font-size: 20px;
  }
</style>
