<template>

  <div class="crops">
    <ul>
        <li v-for="crop in crops" :key="crop.id" 
            v-bind:style="{ 'background-image': 'url(' + crop.img + ')' }"
            class="crop"
        >
            <p>{{ crop.name }}</p>
            <!-- <img :src="crop.img" alt="" width="100" height="100"> -->
        </li>
    </ul>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'MyCrops',
  props: {
    // crops: Object,
  },
  mounted () {
    axios
      .get('/users')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      })
  },
  setup() {
      const crops: Object[] = [
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
          crops
      }
  }
});
</script>

