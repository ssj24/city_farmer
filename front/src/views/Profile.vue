<template>
  <div class="profile">
    <div class="profileContainer">
      <p class="userName">
        <span v-for="alpha in user.name" :key="alpha">{{alpha}} &nbsp;</span>
      </p>
      <div class="profileRight">
        <p class="recentWork">
          💧 {{ user.water }} &nbsp; 🧪 {{ user.med }}
        </p>
      </div>
    </div>
    <CropTab :crops="crops"/>
    <div class="main">
      <div class="notisContainer">
        <div class="notis">
          <p v-for="noti in notis" :key="noti.id" :class="noti.category == 1 ? 'warning' : 'news'">{{noti.content}}</p>
        </div>
      </div>
      <Journals />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CropTab from '@/components/profile/CropTab.vue';
import Journals from '@/components/profile/Journals.vue';
import {getCookie} from '@/cookie';

export default defineComponent({
  name: 'Profile',
  components: {
    CropTab,
    Journals
  },
  data() {
    let user: object = {};
    let crops: object[] = [];
    let notis = [
      {
        id: 1,
        category: 1,
        content: 'warningwarning'

      },
      {
        id: 2,
        category: 1,
        content: 'warningwarning'

      },
      {
        id: 3,
        category: 2,
        content: 'warningwarning'

      },
      {
        id: 4,
        category: 1,
        content: 'warningwarning'

      },
      {
        id: 5,
        category: 2,
        content: 'warningwarning'

      },
      {
        id: 6,
        category: 1,
        content: 'warningwarning'

      }
    ];
    return {
      user,
      crops,
      notis
    }
  },
  setup() {
  },
  mounted() {
    this.user = {
      id: getCookie('userId'),
      name: getCookie('userName'),
      crops: [1, 2, 3, 4, 5],
      water: '2021-11-15',
      med: '2021-11-02'
    },

    this.crops = [
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
  }
});
</script>

