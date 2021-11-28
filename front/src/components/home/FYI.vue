<template>
  <div class="leftSec">
    <ul>
        <li v-for="noti in notis" :key="noti.id" :class="noti.category ? 'noti_water' : 'noti_bug'" class="noti">
            {{ noti.category ? '🌊' : '⚠️' }}
            {{ noti.content }}
        </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FYI',
  props: {
    // crops: Object,
  },
  setup() {
      const notis: Object[] = [
          {
              id: 1,
              content: '대전 지역에 고추병이 발생했습니다',
              category: false,
          },
          {
              id: 2,
              content: '0일 전 물을 줬습니다',
              category: true,
          },
          {
              id: 3,
              content: '11월은 고추병이 발생하기 쉬운 달입니다',
              category: false,
          },
      ];
      return {
          notis
      }
  }
});
</script>