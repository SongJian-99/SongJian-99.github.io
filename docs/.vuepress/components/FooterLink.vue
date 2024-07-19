<template>
  <div class="footer-link">
    <a href="https://cleaner.love/">@Cleaner</a>
  </div>
</template>

<script>
  export default {
    name: 'FooterLink'
  }
</script>

<style scoped>
  .footer-link {
    position: absolute;
    bottom: 8px; /* 距离页面底部的距离 */
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
</style>

