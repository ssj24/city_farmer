<template>
<div class="articlesContainer">
    <div class="container articles">
        <div class="item item1">
            <span class="subtitle">When coughing and sneezing cover mouth and nose with flexed elbox or tissue</span>
            <p>contents contents contents </p>
        </div>
        <div class="item item2">
            <span class="subtitle">title</span>
            <p>When coughing and sneezing cover mouth and nose with flexed elbox or tissue.</p>
        </div>
        <div class="item item3">
            <span class="subtitle">title</span>
            <p>Avoid travel if you have a fever and cough.</p>
        </div>
        <div class="item item4">
            <span class="subtitle">title</span>
            <p>If you have a fever, cough and difficulty breathing seek medical care early.</p>
        </div>
        <div class="item item5">
            <span class="subtitle">title</span>
            <p>Eat only well-cooked food.</p>
        </div>
        <div class="item item6">
            <span class="subtitle">title</span>
            <p>Avoid close contact width animals that are sick.</p>
        </div>
        <div class="item item7">
            <span class="title">MASONRY</span>
            <span class="subtitle">Layout Using CSS Grid</span>
        </div>
    </div>

    <div class="overlay">
        <div class="overlayContainer">
            <p>
            this is overlay
            </p>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'Articles',
  components: {

  },
  data() {
    let info: object = {};
    return {
      info
    }
  },
  mounted() {
    // const apiKey = process.env.VUE_APP_NONGSARO_KEY;
    // const groupListUrl = `/workScheduleGrpList?apiKey=${apiKey}`;
    // axios
    //   .get(groupListUrl)
    //   .then(response => (this.info = response))
    //   .catch(err => console.log(err))
  }
});
</script>

<style>
</style>
