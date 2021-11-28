<template>
  <div class="cropTabsContainer">
    <ul class="cropTabs">
      <li class="cropTab" v-for="crop in crops" :key="crop.id" @mouseenter="toggleActive($event, crop.id)" @click="openModal($event, crop.id)">
        <p>{{crop.name}}</p>
      </li>

    </ul>
  <div class="notis">
    <p v-for="noti in notis" :key="noti.id" :class="noti.category == 1 ? 'warning' : 'news'">{{noti.content}}</p>
  </div>
  <div class="overlay" @click.self="closeModal($event)">
    <div class="container">
      <div class="title"></div>
      <div class="main"></div>
      <div class="footer">
        <button class="download">download</button>
        <button class="close" @click="closeModal($event)">close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CropTab',
  props: {
    crops: {
      type: Array
    }
  },
  data() {
    return {
      notis: new Array,
    }
  },
  setup() {

    return {
    }
  },
  mounted() {
    this.notis = [
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
    ]
  },
  methods: {
    openModal(evt: Event, idx: number) {
      const modal = document.querySelector(".overlay") as HTMLDivElement;
      modal.classList.add('active');
      evt.stopPropagation();
    },
    closeModal(evt: Event){
      if (evt.currentTarget != document.querySelector('.container')) {
        const modal = document.querySelector(".overlay") as HTMLDivElement;
        modal.classList.remove('active');
      }
    },
    toggleActive(event: Event, idx: number) {
      const tabLis = Array.from(document.querySelectorAll(".cropTab"));
      for (const tabLi of tabLis) {
        tabLi.classList.remove('active');
      }
      (<HTMLElement>event.currentTarget).classList.add('active');
    }
  },
});
</script>