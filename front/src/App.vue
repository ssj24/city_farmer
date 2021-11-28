<template>
  <header>
    <h1 class="title">
      <a href="/">도시농부</a>
    </h1>
    <div id="nav">
      <router-link to="/">홈</router-link> |
      <router-link to="/profile">프로필</router-link> | 
      <router-link to="/login">로그인</router-link> |
      <router-link to="/cropdetail">cropdetail</router-link>
    </div>
  </header>
  <router-view/>
</template>

<script lang="ts">

</script>

<style lang="scss">
@import '@/assets/sass/main.scss';
</style>
