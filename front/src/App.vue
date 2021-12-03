<template>
  <header>
    <h1 class="title">
      <a href="/">도시농부</a>
    </h1>
    <div id="nav">
      <router-link to="/">홈</router-link> |
      <span v-if="userId">
        <router-link to="/profile">프로필</router-link> |
        <router-link to="/write">일기쓰기</router-link> | 
      </span>
      <a v-if="userId" @click="logout">로그아웃</a>
      <router-link to="/login" v-else>로그인</router-link>
    </div>
  </header>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'app',
  data() {
    return {
    }
  },
  computed: {
    userId: function():string {
      return this.$store.state.userName;
    },
  },
  methods: {
    logout() {
      const cookies = document.cookie.split(";");

      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf("=");
          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
      this.$store.commit('startLogin', {userID: 0, userName: ''})
      this.$store.commit('isLogout')
    }
  },
});
</script>

<style lang="scss">
@import '@/assets/sass/main.scss';
</style>
