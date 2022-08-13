<template>
  <div class="home">
    <Search/>
    <div class="main">
      <Articles />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Search from '@/components/home/Search.vue';
import Articles from '@/components/home/Articles.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Search,
    Articles,
  },
});
</script>
