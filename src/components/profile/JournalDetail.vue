<template>
<div>
    <div class="overlayContainer">
        <div class="title">
            {{journal.title}}
        </div>
        <div class="journalDate">
            {{journal.date}}
        </div>
        <div class="journalWater">
            {{journal.water ? '💧': ''}}
        </div>
        <div class="journalMed">
            {{journal.med ? '💊': ''}}
        </div>
        <div class="journalContent">
            {{journal.content}}
        </div>
    </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'JournalContainer',
  props: {
    journal: Object,
  },
  
  setup() {
      const dateExam: String = new Date().toLocaleDateString();
      const journal: object = {

          title: '옥수수가 자랐다',
          date: dateExam,
          water: true,
          med: false,
          content: '며칠만에 가보니 옥수수가 자란 게 눈에 띈다. 이렇게 눈에 보일 정도로 성장하는 걸 볼 때면 뿌듯함을 감출 수 없다. 빨리 수확해서 가족들과 나눠 먹을 수 있으면 좋겠다.'
      }
      return {
          journal
      }
  }
});
</script>