<template>
  <div class="journalsContainer">
    <ul>
        <li v-for="journal in journals" :key="journal.id" class="journal" @click="openJournal(journal.id)">
            {{ journal.date }}
            <span v-if="journal.water">
                💧
            </span>
            <span v-if="journal.fertilizer">
                💊
            </span>
            <p>
                {{ journal.content }}
            </p>
        </li>
    </ul>
    <JournalContainer id="journalContainer" class="journalContainer"  @click="closeJournal"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import JournalContainer from '@/components/profile/JournalDetail.vue'

export default defineComponent({
  name: 'Journals',
  components: {
      JournalContainer
  },
  props: {
    // crops: Object,
  },
  methods: {
      openJournal(id: number) {
          const journalContainer = document.getElementById('journalContainer')!;
          journalContainer.classList.toggle('seek');
      },
      closeJournal() {
          const journalContainer = document.getElementById('journalContainer')!;
          journalContainer.classList.toggle('seek');
      }
  },
  setup() {

      const dateExam: String = new Date().toLocaleDateString();
      let journals: object[]= [
      ]
      journals = [
          {
              id: 1,
              date: dateExam,
              img: 'img path',
              content: 'text',
              water: true,
              fertilizer: false,
          },
          {
              id: 1,
              date: dateExam,
              img: 'img path',
              content: 'text',
              water: false,
              fertilizer: false,
          },
          {
              id: 1,
              date: dateExam,
              img: 'img path',
              content: 'texttext',
              water: true,
              fertilizer: false,
          },
          {
              id: 1,
              date: dateExam,
              img: 'img path',
              content: 'texttexttexttexttexttexttext texttexttexttexttexttextt exttexttexttexttexttexttexttexttexttextte xttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttextte xttexttexttexttexttexttexttexttexttexttext texttexttexttexttexttexttexttexttexttexttexttexttexttextt exttexttexttexttexttexttexttexttexttexttexttext texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextte xttexttexttexttexttexttexttexttextte ttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttexttexttexttexttexttextte xttexttexttexttexttexttex ttexttexttexttexttexttexttexttexttexttex texttexttexttexttexttexttexttexttexttexttexttexttexttexttextt exttexttexttexttexttext texttexttexttexttexttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttexttexttexttexttexttexttext texttexttexttexttexttexttexttexttexttexttexttext texttexttexttexttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttexttexttexttexttexttextt exttexttexttexttexttexttexttextte xttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttexttexttexttexttexttextte xttexttexttexttexttexttexttexttexttexttexttexttextte xttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextte xttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt exttexttexttexttexttexttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext texttexttexttexttexttexttexttexttexttexttexttexttexttexttextt exttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt exttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext texttexttexttexttexttexttexttexttexttexttexttexttexttexttextte xttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextte xttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextte xttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt exttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt exttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextte xttexttexttexttexttexttexttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextte xttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt exttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt exttexttexttexttexttexttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttext123345435262647987123098471238946',
              water: true,
              fertilizer: true,
          },
          {
              id: 1,
              date: dateExam,
              img: 'img path',
              content: 'texttexttexttext',
              water: true,
              fertilizer: false,
          },
          {
              id: 1,
              date: dateExam,
              img: 'img path',
              content: 'texttexttexttext',
              water: true,
              fertilizer: false,
          },
          {
              id: 1,
              date: dateExam,
              img: 'img path',
              content: 'texttexttexttext',
              water: true,
              fertilizer: false,
          },
          {
              id: 1,
              date: dateExam,
              img: 'img path',
              content: 'texttexttexttext',
              water: true,
              fertilizer: false,
          },
          {
              id: 1,
              date: dateExam,
              img: 'img path',
              content: 'texttexttexttext',
              water: true,
              fertilizer: false,
          },
          {
              id: 1,
              date: dateExam,
              img: 'img path',
              content: 'texttexttexttext',
              water: true,
              fertilizer: false,
          },
          {
              id: 1,
              date: dateExam,
              img: 'img path',
              content: 'texttexttexttext',
              water: true,
              fertilizer: false,
          },
          {
              id: 1,
              date: dateExam,
              img: 'img path',
              content: 'texttexttexttext',
              water: true,
              fertilizer: false,
          },
      ];
      return {
          journals
      }
  }
});
</script>