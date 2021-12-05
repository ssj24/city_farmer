<template>
  <div class="cropTabsContainer">
    <div class="crops">
      <ul>
          <li v-for="crop in crops" :key="crop.cropId" 
              v-bind:style="{ 'background-image': 'url(' + crop.image + ')' }"
              @mouseenter="toggleActive($event, crop.cropId)" 
              @mouseleave="toggleActive($event, crop.cropId)"
              @click="openModal($event, crop.cntntsNo)"
              class="crop pulse">
              <p>{{ crop.codeNm }}</p>
              <!-- <img :src="crop.image" alt="" width="100" height="100"> -->
          </li>
      </ul>
    
    </div>
  
  <div class="overlay" @click.self="closeModal($event)">
    <div class="container">
      <div class="title"></div>
      <div class="main">
        <CropDetail :cntntsNo="cntntsNo"/>
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
      cntntsNo: 30697
    }
  },
  setup() {

    return {
    }
  },
  mounted() {
    // if (this.crops[0]) {
    //   // this.cntntsNo = this.crops.cntntsNo;
    //   console.log(this.crops[0]);
  },
  methods: {
    openModal(evt: Event, id: number) {
      const modal = document.querySelector(".overlay") as HTMLDivElement;
      this.cntntsNo = id;
      console.log(this.cntntsNo);
      modal.classList.add('active');
      evt.stopPropagation();
    },
    closeModal(evt: Event){
      if (evt.currentTarget != document.querySelector('.container')) {
        const modal = document.querySelector(".overlay") as HTMLDivElement;
        modal.classList.remove('active');
      }
    },
    toggleActive(event: Event, id: number) {
      const tabLis = Array.from(document.querySelectorAll(".crop"));
      for (const tabLi of tabLis) {
        tabLi.classList.remove('active');
      }
      (<HTMLElement>event.currentTarget).classList.add('active');
    }
  },
});
</script>