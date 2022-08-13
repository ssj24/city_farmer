<template>
  <div class="profile">
    <div class="profileContainer">
      <p class="userName">
        <span v-for="alpha in user.name" :key="alpha">{{alpha}} &nbsp;</span>
      </p>
      <div class="profileRight">
        <p class="recentWork">
          💧 {{ water }} &nbsp; 🧪 {{ med }}
        </p>
      </div>
    </div>
    <CropTab :crops="crops"/>
    <div class="main">
      <div class="notisContainer">
        <p class="notiTitle">12월의 병해충</p>
        <div class="notis">
          <p v-for="noti in notis" :key="noti.diseasesId" :class="getClass(noti.midCategory)">{{noti.category}}-{{noti.midCategory}}: {{noti.name}}</p>
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
import axios from 'axios';

export default defineComponent({
  name: 'Profile',
  components: {
    CropTab,
    Journals
  },
  data() {
    let user: object = {};
    let crops: object[] = [
      {
          cropId: 1,
          codeNm: '콩',
          image: require('@/assets/flower.png'),
      },
      {
          cropId: 2,
          codeNm: '옥수수',
          image: require('@/assets/flower.png'),
      },
      {
          cropId: 3,
          codeNm: '감자',
          image: require('@/assets/flower.png'),
      },
      {
          cropId: 4,
          codeNm: '벼',
          image: require('@/assets/flower.png'),
      },
      {
          cropId: 5,
          codeNm: '수수',
          image: require('@/assets/flower.png'),
      },
    ];
    let notis = [
      {
        diseasesId: 1,
        year: 2021,
        month: 12,
        category: '시설채소',
        midCategory: '병',
        name: '잿빛곰팡이병'
      },
      {
        diseasesId: 2,
        year: 2021,
        month: 12,
        category: '시설채소',
        midCategory: '바이러스',
        name: '토마토반점위조바이러스'
      },
      {
        diseasesId: 2,
        year: 2021,
        month: 12,
        category: '시설채소',
        midCategory: '해충',
        name: '총채벌레류'
      }
    ];
    return {
      user,
      crops,
      notis,
      water: '0000-00-00',
      med: '0000-00-00'
    }
  },
  setup() {
  },

  // mounted() {
  //   axios.
  //   get('/users/crops')
  //   .then(res => {
  //     this.crops = res.data.data;
  //   })
  //   .catch(err => console.log(err));

  //   axios.
  //   get('/crops/diseases')
  //   .then(res => {
  //     this.notis = res.data.data;
  //   })
  //   .catch(err => console.log(err));

  //   this.user = {
  //     id: getCookie('userId'),
  //     name: getCookie('userName')
  //   }
  //   axios.
  //   get('/users')
  //   .then(res => {
  //     this.water = res.data.fertilizer[0].created_at;
  //     this.med = res.data.water[0].created_at;
  //   })
  //   .catch(err => console.log(err))
  // },
  methods: {
    getClass(midCategory: string) {
      if (midCategory === '병') return 'warning';
      else if (midCategory === '바이러스') return 'virus';
      else return 'bug';
    }
  }
});
</script>

