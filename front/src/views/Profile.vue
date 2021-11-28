<template>
  <div class="profile">
    <div class="profileContainer">
      <p class="userName">
        {{ user.name }}
      </p>
      <div class="profileRight">
        <p class="recentWork">
          🌊 {{ user.water }} &nbsp; 💊 {{ user.med }}
        </p>
      </div>
    </div>
    <CropTab :crops="crops"/>
    <Journals />
    <div class="main">
      <div class="journals">
        <div class="journalContainer">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CropTab from '@/components/profile/CropTab.vue'
import Journals from '@/components/profile/Journals.vue'

export default defineComponent({
  name: 'Profile',
  components: {
    CropTab,
    Journals
  },
  setup() {
      let user: object;
      let crops: object[];

      user = {
        id: 1,
        name: '홍길동',
        crops: [1, 2, 3, 4, 5],
        water: '2021-11-15',
        med: '2021-11-02'
      };
      crops = [
          {
              id: 1,
              name: '콩',
              img: require('@/assets/flower.png'),
          },
          {
              id: 2,
              name: '옥수수',
              img: require('@/assets/flower.png'),
          },
          {
              id: 3,
              name: '감자',
              img: require('@/assets/flower.png'),
          },
          {
              id: 4,
              name: '벼',
              img: require('@/assets/flower.png'),
          },
          {
              id: 5,
              name: '수수',
              img: require('@/assets/flower.png'),
          },
      ];
      return {
          user,
          crops
      }
  }
});
</script>

