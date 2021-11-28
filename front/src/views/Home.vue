<template>
  <div class="home">
    <MyCrops/>
    <Search/>
    <div class="main">
      <!-- <FYI/> -->
      <Articles />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyCrops from '@/components/home/MyCrops.vue';
import Search from '@/components/home/Search.vue';
import FYI from '@/components/home/FYI.vue';
import Articles from '@/components/home/Articles.vue';

export default defineComponent({
  name: 'Home',
  components: {
    MyCrops,
    Search,
    FYI,
    Articles,
  },
});
</script>
