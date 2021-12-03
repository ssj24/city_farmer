<template>
  <div class="cropTabsContainer">
    <div class="crops">
      <ul>
          <li v-for="crop in crops" :key="crop.id" 
              v-bind:style="{ 'background-image': 'url(' + crop.img + ')' }"
              @mouseenter="toggleActive($event, crop.id)" 
              @mouseleave="toggleActive($event, crop.id)"
              @click="openModal($event, crop.id)"
              class="crop pulse">
              <p>{{ crop.name }}</p>
              <!-- <img :src="crop.img" alt="" width="100" height="100"> -->
          </li>
      </ul>
    
    </div>
  
  <div class="overlay" @click.self="closeModal($event)">
    <div class="container">
      <div class="title"></div>
      <div class="main">
        <CropDetail />
      </div>
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
import CropDetail from '../CropDetail.vue';

export default defineComponent({
  name: 'CropTab',
  components: {
    CropDetail
  },
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
      const tabLis = Array.from(document.querySelectorAll(".crop"));
      for (const tabLi of tabLis) {
        tabLi.classList.remove('active');
      }
      (<HTMLElement>event.currentTarget).classList.add('active');
    }
  },
});
</script>