---
home: true
title: 首页
author: Cleaner
heroText: null
tagline: null
actionText: 开始 →
actionLink: /books/
heroImage: /logo.jpg
heroImageStyle: {
  maxWidth: '450px',
  display: block,
  margin: '-12rem auto 1.5rem',
  boxShadow: '0 5px 18px rgba(0,0,0,0.2)'
}
---
<template>
  <router-link to="/books/">
    <button class="startBtn">关于</button>
  </router-link>
</template>

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
