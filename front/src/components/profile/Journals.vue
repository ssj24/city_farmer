<template>
  <div class="journalsContainer">
    <ul>
        <li v-for="journal in journals" :key="journal.journalId" class="journal">
            <p class="title">
                {{ journal.title }}
            </p>
            <p class="date">
                {{ journal.created_at }}
            </p>
            <span v-if="journal.water">
                💧
            </span>
            <span v-if="journal.fertilizer">
                🧪
            </span>
            <p class="content">
                {{ journal.content }}
            </p>
        </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'Journals',
  components: {
  },
  props: {
    // crops: Object,
  },
  data() {
      let journals: object[] = [
          {
              journalId: 3,
              title: '제목입니다',
              created_at: '2021-12-03',
              water: false,
              fertilizer: true,
              content: '집 근처 주말농장은 자리따기가 너무 힘들어서 작년부터 좀 거리가 있는 주말농장을 다니고 있는데 차가 없으면 안 가게 되서 아무래도 너무 불편하다 가까이 있어야 한 번이라도 더 가서 볼 텐데 내년부터는 집 근처 주말농장에 다시 가봐야지 집 근처 주말농장은 자리따기가 너무 힘들어서 작년부터 좀 거리가 있는 주말농장을 다니고 있는데 차가 없으면 안 가게 되서 아무래도 너무 불편하다 가까이 있어야 한 번이라도 더 가서 볼 텐데 내년부터는 집 근처 주말농장에 다시 가봐야지 집 근처 주말농장은 자리따기가 너무 힘들어서 작년부터 좀 거리가 있는 주말농장을 다니고 있는데 차가 없으면 안 가게 되서 아무래도 너무 불편하다 가까이 있어야 한 번이라도 더 가서 볼 텐데 내년부터는 집 근처 주말농장에 다시 가봐야지 집 근처 주말농장은 자리따기가 너무 힘들어서 작년부터 좀 거리가 있는 주말농장을 다니고 있는데 차가 없으면 안 가게 되서 아무래도 너무 불편하다 가까이 있어야 한 번이라도 더 가서 볼 텐데 내년부터는 집 근처 주말농장에 다시 가봐야지집 근처 주말농장은 자리따기가 너무 힘들어서 작년부터 좀 거리가 있는 주말농장을 다니고 있는데 차가 없으면 안 가게 되서 아무래도 너무 불편하다 가까이 있어야 한 번이라도 더 가서 볼 텐데 내년부터는 집 근처 주말농장에 다시 가봐야지 집 근처 주말농장은 자리따기가 너무 힘들어서 작년부터 좀 거리가 있는 주말농장을 다니고 있는데 차가 없으면 안 가게 되서 아무래도 너무 불편하다 가까이 있어야 한 번이라도 더 가서 볼 텐데 내년부터는 집 근처 주말농장에 다시 가봐야지 집 근처 주말농장은 자리따기가 너무 힘들어서 작년부터 좀 거리가 있는 주말농장을 다니고 있는데 차가 없으면 안 가게 되서 아무래도 너무 불편하다 가까이 있어야 한 번이라도 더 가서 볼 텐데 내년부터는 집 근처 주말농장에 다시 가봐야지 집 근처 주말농장은 자리따기가 너무 힘들어서 작년부터 좀 거리가 있는 주말농장을 다니고 있는데 차가 없으면 안 가게 되서 아무래도 너무 불편하다 가까이 있어야 한 번이라도 더 가서 볼 텐데 내년부터는 집 근처 주말농장에 다시 가봐야지 집 근처 주말농장은 자리따기가 너무 힘들어서 작년부터 좀 거리가 있는 주말농장을 다니고 있는데 차가 없으면 안 가게 되서 아무래도 너무 불편하다 가까이 있어야 한 번이라도 더 가서 볼 텐데 내년부터는 집 근처 주말농장에 다시 가봐야지집 근처 주말농장은 자리따기가 너무 힘들어서 작년부터 좀 거리가 있는 주말농장을 다니고 있는데 차가 없으면 안 가게 되서 아무래도 너무 불편하다 가까이 있어야 한 번이라도 더 가서 볼 텐데 내년부터는 집 근처 주말농장에 다시 가봐야지 집 근처 주말농장은 자리따기가 너무 힘들어서 작년부터 좀 거리가 있는 주말농장을 다니고 있는데 차가 없으면 안 가게 되서 아무래도 너무 불편하다 가까이 있어야 한 번이라도 더 가서 볼 텐데 내년부터는 집 근처 주말농장에 다시 가봐야지'
          }
      ];
      return {
          journals
      }
  },
  methods: {
    //   openJournal(id: number) {
    //       const journalContainer = document.getElementById('journalContainer')!;
    //       journalContainer.classList.toggle('seek');
    //   },
    //   closeJournal() {
    //       const journalContainer = document.getElementById('journalContainer')!;
    //       journalContainer.classList.toggle('seek');
    //   }
  },
  mounted() {

    axios.
    get('/journals/user')
    .then(res => {
        this.journals = res.data.data;
    })
    .catch(err => console.log(err));
  }
});
</script>