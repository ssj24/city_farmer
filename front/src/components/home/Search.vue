<template>
    <div class="searchContainer">
        <form>
            <select name="searchCategory" id="searchCategory">
                <option v-for="cat in category" :key="cat.sort" :value="cat.codeNm" @click="selectCategory(cat.sort)">{{ cat.codeNm }}</option>
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
            codeNm: '벼',
            kidofcomdtySeCode: '210004',
            sort: '1'
        },
        {
            codeNm: '밭농사',
            kidofcomdtySeCode: '210005',
            sort: '2'
        },
        {
            codeNm: '버섯',
            kidofcomdtySeCode: '210008',
            sort: '3'
        },
        {
            codeNm: '약초',
            kidofcomdtySeCode: '210009',
            sort: '4'
        },
        {
            codeNm: '채소',
            kidofcomdtySeCode: '210001',
            sort: '5'
        },
        {
            codeNm: '과수',
            kidofcomdtySeCode: '210002',
            sort: '6'
        },
        {
            codeNm: '화훼',
            kidofcomdtySeCode: '210003',
            sort: '7'
        },
        {
            codeNm: '축산',
            kidofcomdtySeCode: '210007',
            sort: '8'
        },
        {
            codeNm: '사료작물',
            kidofcomdtySeCode: '210010',
            sort: '9'
        },
        {
            codeNm: '잠업',
            kidofcomdtySeCode: '210006',
            sort: '10'
        }];
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