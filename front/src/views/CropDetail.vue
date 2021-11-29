<template>
    <div id="nongsaroApiLoadingArea">
      {{info}}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'CropDetail',
  components: {

  },
  data() {
    let info: object = {};
    return {
      info
    }
  },
  mounted() {
    axios
      .get('/crops')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  },
});
</script>

<style>
/* @import 'http://api.nongsaro.go.kr/css/api.css'; */
</style>
