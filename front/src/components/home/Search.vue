<template>
    <div class="searchContainer">
        <form>
            <select name="searchCategory" id="searchCategory">
                <option v-for="cat in category" :key="cat.id" :value="cat.name" @click="selectCategory(cat.id)">{{ cat.name }}</option>
            </select>
            <select name="searchKeyword" id="searchKeyword">
                <option v-for="crop in crops[selectedCat]" :key="crops[crop]" :value="crop">{{ crop }}</option>
            </select>
            <input type="submit" value="Search">
        </form>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Search',
  props: {
    // crops: Object,
  },
  setup() {
      const selectedCat = 0;
      const category: object[] = [
          {
              id: 0,
              name: '벼'
          },
          {
              id: 1,
              name: '밭농사'
          },
          {
              id: 2,
              name: '버섯'
          },
          {
              id: 3,
              name: '약초'
          },
          {
              id: 4,
              name: '채소'
          },
          {
              id: 5,
              name: '과수'
          },
          {
              id: 6,
              name: '화훼'
          },
      ];
      const crops: object[] = [
          [
              '기계이양재배',
              '직파재배'
          ],
          [
              '감자',
              '강낭콩'
          ],
          [
              '느타리버섯',
              '양송이'
          ],
          [
              '강황',
              '결명자'
          ],
          [
              '가지',
              '갓'
          ],
          [
              '감귤',
              '단감'
          ],
          [
              '거베라',
              '국화'
          ],
      ]
      return {
          selectedCat,
          category,
          crops
      }
  },
  methods: {
      selectCategory(selected: number) {
          this.selectedCat = selected;
      }
  }
});
</script>