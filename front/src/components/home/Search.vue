<template>
    <div class="searchContainer">
        <form>
            <select name="searchCategory" id="searchCategory" @change="onChange($event.target.value)">
                <option v-for="(cat, idx) in category" :key="idx" :value="idx" @click="selectCategory(idx)">{{ cat.codeNm }}</option>
            </select>
            <select name="searchKeyword" id="searchKeyword">
                <option v-for="crop in crops" :key="crop.cntntsNo" :value="crop.cntntsNo">{{ crop.codeNm }}</option>
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
  data() {
      return {
      }
  },
  setup() {
      let selectedCat = 0;
      const category: object[] = [
        {
            codeNm: '벼',
            kidofcomdtySeCode: '210004',
            sort: 0
        },
        {
            codeNm: '밭농사',
            kidofcomdtySeCode: '210005',
            sort: 1
        },
        {
            codeNm: '버섯',
            kidofcomdtySeCode: '210008',
            sort: 2
        },
        {
            codeNm: '약초',
            kidofcomdtySeCode: '210009',
            sort: 3
        },
        {
            codeNm: '채소',
            kidofcomdtySeCode: '210001',
            sort: 4
        },
        {
            codeNm: '과수',
            kidofcomdtySeCode: '210002',
            sort: 5
        },
        {
            codeNm: '화훼',
            kidofcomdtySeCode: '210003',
            sort: 6
        },
        // {
        //     codeNm: '축산',
        //     kidofcomdtySeCode: '210007',
        //     sort: 7
        // },
        // {
        //     codeNm: '사료작물',
        //     kidofcomdtySeCode: '210010',
        //     sort: 8
        // },
        // {
        //     codeNm: '잠업',
        //     kidofcomdtySeCode: '210006',
        //     sort: 9
        // }
        ];
      const cropsList: object[] = [
          [
              {
                  cntntsNo: 30697,
                  codeNm: '기계이양재배'
              },
              {
                  cntntsNo: 30698,
                  codeNm: '직파재배'
              },
          ],
          [
              {
                  cntntsNo: 30699,
                  codeNm: '감자'
              },
              {
                  cntntsNo: 30670,
                  codeNm: '강낭콩'
              },
              {
                  cntntsNo: 30701,
                  codeNm: '고구마'
              },
              {
                  cntntsNo: 30702,
                  codeNm: '녹두'
              },
              {
                  cntntsNo: 30607,
                  codeNm: '들깨(잎)'
              },
              {
                  cntntsNo: 30703,
                  codeNm: '들깨(종실)'
              },
              {
                  cntntsNo: 30704,
                  codeNm: '땅콩'
              },
              {
                  cntntsNo: 30705,
                  codeNm: '맥주보리'
              },
              {
                  cntntsNo: 30706,
                  codeNm: '메밀'
              },
              {
                  cntntsNo: 30707,
                  codeNm: '밀'
              },
              {
                  cntntsNo: 30708,
                  codeNm: '수수'
              },
              {
                  cntntsNo: 30709,
                  codeNm: '옥수수'
              },
              {
                  cntntsNo: 30710,
                  codeNm: '완두'
              },
              {
                  cntntsNo: 30711,
                  codeNm: '유채'
              },
              {
                  cntntsNo: 30712,
                  codeNm: '일반보리'
              },
              {
                  cntntsNo: 30713,
                  codeNm: '조'
              },
              {
                  cntntsNo: 30714,
                  codeNm: '참깨'
              },
              {
                  cntntsNo: 30715,
                  codeNm: '콩'
              },
              {
                  cntntsNo: 30716,
                  codeNm: '팥'
              },
              {
                  cntntsNo: 30717,
                  codeNm: '풋콩'
              },
          ],
          [
              {
                  cntntsNo: 30733,
                  codeNm: '느타리버섯'
              },
              {
                  cntntsNo: 30735,
                  codeNm: '양송이'
              },
              {
                  cntntsNo: 30734,
                  codeNm: '영지버섯'
              },
              {
                  cntntsNo: 30736,
                  codeNm: '팽이'
              },
          ],
          [
              {
                  cntntsNo: 30737,
                  codeNm: '강황'
              },
              {
                  cntntsNo: 30738,
                  codeNm: '결명자'
              },
              {
                  cntntsNo: 30739,
                  codeNm: '구기자'
              },
              {
                  cntntsNo: 30740,
                  codeNm: '길경(도라지)'
              },
              {
                  cntntsNo: 30741,
                  codeNm: '더덕(양유)'
              },
              {
                  cntntsNo: 30742,
                  codeNm: '독활'
              },
              {
                  cntntsNo: 30743,
                  codeNm: '두충'
              },
              {
                  cntntsNo: 30744,
                  codeNm: '맥문동'
              },
              {
                  cntntsNo: 30745,
                  codeNm: '백하수오'
              },
              {
                  cntntsNo: 30746,
                  codeNm: '산수유'
              },
              {
                  cntntsNo: 30747,
                  codeNm: '산약(마)'
              },
              {
                  cntntsNo: 30748,
                  codeNm: '시호'
              },
              {
                  cntntsNo: 30749,
                  codeNm: '오미자'
              },
              {
                  cntntsNo: 30750,
                  codeNm: '율무'
              },
              {
                  cntntsNo: 30751,
                  codeNm: '작약'
              },
              {
                  cntntsNo: 30752,
                  codeNm: '지황'
              },
              {
                  cntntsNo: 30753,
                  codeNm: '차'
              },
              {
                  cntntsNo: 30754,
                  codeNm: '참당귀'
              },
              {
                  cntntsNo: 30755,
                  codeNm: '천궁'
              },
              {
                  cntntsNo: 30756,
                  codeNm: '천마'
              },
              {
                  cntntsNo: 30757,
                  codeNm: '택사'
              },
              {
                  cntntsNo: 30758,
                  codeNm: '향부자'
              },
              {
                  cntntsNo: 30759,
                  codeNm: '호프'
              },
              {
                  cntntsNo: 30760,
                  codeNm: '황금'
              },
              {
                  cntntsNo: 30761,
                  codeNm: '황기'
              },
          ],
          [
              {
                  cntntsNo: 30770,
                  codeNm: '가지'
              },
              {
                  cntntsNo: 30595,
                  codeNm: '갓'
              },
              {
                  cntntsNo: 30596,
                  codeNm: '결구상추'
              },
              {
                  cntntsNo: 30597,
                  codeNm: '고들빼기'
              },
              {
                  cntntsNo: 30598,
                  codeNm: '고사리'
              },
              {
                  cntntsNo: 30599,
                  codeNm: '고추(꽈리고추 반촉성)'
              },
              {
                  cntntsNo: 30600,
                  codeNm: '고추(보통재배)'
              },
              {
                  cntntsNo: 30601,
                  codeNm: '고추(촉성재배)'
              },
              {
                  cntntsNo: 30602,
                  codeNm: '곰취'
              },
              {
                  cntntsNo: 30603,
                  codeNm: '근대'
              },
              {
                  cntntsNo: 30604,
                  codeNm: '냉이'
              },
              {
                  cntntsNo: 30605,
                  codeNm: '당근'
              },
              {
                  cntntsNo: 30606,
                  codeNm: '두릅'
              },
              {
                  cntntsNo: 30608,
                  codeNm: '딸기(반촉성재배)'
              },
              {
                  cntntsNo: 30609,
                  codeNm: '딸기(사계성여름재배)'
              },
              {
                  cntntsNo: 30610,
                  codeNm: '딸기(촉성재배)'
              },
              {
                  cntntsNo: 30611,
                  codeNm: '마늘'
              },
              {
                  cntntsNo: 30612,
                  codeNm: '마늘(잎마늘)'
              },
              {
                  cntntsNo: 30613,
                  codeNm: '멜론'
              },
              {
                  cntntsNo: 30614,
                  codeNm: '무'
              },
              {
                  cntntsNo: 30615,
                  codeNm: '무(고랭지재배)'
              },
              {
                  cntntsNo: 30616,
                  codeNm: '미나리'
              },
              {
                  cntntsNo: 30617,
                  codeNm: '방울토마토'
              },
              {
                  cntntsNo: 30618,
                  codeNm: '배추'
              },
              {
                  cntntsNo: 30619,
                  codeNm: '배추(고랭지재배)'
              },
              {
                  cntntsNo: 30620,
                  codeNm: '부추'
              },
              {
                  cntntsNo: 30621,
                  codeNm: '브로콜리(녹색꽃양배추 고랭지재배)'
              },
              {
                  cntntsNo: 30622,
                  codeNm: '브로콜리(평야지재배)'
              },
              {
                  cntntsNo: 30623,
                  codeNm: '비트'
              },
              {
                  cntntsNo: 30624,
                  codeNm: '상추'
              },
              {
                  cntntsNo: 30626,
                  codeNm: '샐러리(양미나리)'
              },
              {
                  cntntsNo: 30625,
                  codeNm: '생강'
              },
              {
                  cntntsNo: 30627,
                  codeNm: '수박'
              },
              {
                  cntntsNo: 30628,
                  codeNm: '시금치'
              },
              {
                  cntntsNo: 30629,
                  codeNm: '신선초'
              },
              {
                  cntntsNo: 30630,
                  codeNm: '쑥갓'
              },
              {
                  cntntsNo: 30632,
                  codeNm: '아스파라거스'
              },
              {
                  cntntsNo: 30631,
                  codeNm: '아욱'
              },
              {
                  cntntsNo: 30634,
                  codeNm: '양배추'
              },
              {
                  cntntsNo: 30633,
                  codeNm: '양파'
              },
              {
                  cntntsNo: 30635,
                  codeNm: '연근'
              },
              {
                  cntntsNo: 30636,
                  codeNm: '오이'
              },
              {
                  cntntsNo: 30637,
                  codeNm: '우엉'
              },
              {
                  cntntsNo: 30638,
                  codeNm: '적채'
              },
              {
                  cntntsNo: 30639,
                  codeNm: '쪽파'
              },
              {
                  cntntsNo: 30642,
                  codeNm: '참나물'
              },
              {
                  cntntsNo: 30640,
                  codeNm: '참외'
              },
              {
                  cntntsNo: 30641,
                  codeNm: '참취'
              },
              {
                  cntntsNo: 30643,
                  codeNm: '청경채'
              },
              {
                  cntntsNo: 30644,
                  codeNm: '치커리'
              },
              {
                  cntntsNo: 30645,
                  codeNm: '토란'
              },
              {
                  cntntsNo: 30646,
                  codeNm: '토마토'
              },
              {
                  cntntsNo: 30647,
                  codeNm: '파'
              },
              {
                  cntntsNo: 30648,
                  codeNm: '파슬리(향미나리)'
              },
              {
                  cntntsNo: 30649,
                  codeNm: '파프리카'
              },
              {
                  cntntsNo: 30650,
                  codeNm: '피망'
              },
              {
                  cntntsNo: 30651,
                  codeNm: '호박'
              },
              {
                  cntntsNo: 30652,
                  codeNm: '호박(늙은호박)'
              },
              {
                  cntntsNo: 30653,
                  codeNm: '호박(단호박)'
              },
          ],
          [
              {
                  cntntsNo: 30654,
                  codeNm: '감귤(보통 온주밀감)'
              },
              {
                  cntntsNo: 30655,
                  codeNm: '감귤(시설재배)'
              },
              {
                  cntntsNo: 30656,
                  codeNm: '단감'
              },
              {
                  cntntsNo: 30657,
                  codeNm: '단감(시설재배)'
              },
              {
                  cntntsNo: 30658,
                  codeNm: '매실'
              },
              {
                  cntntsNo: 30659,
                  codeNm: '무화과(노지재배)'
              },
              {
                  cntntsNo: 30660,
                  codeNm: '무화과(무가온 시설재배)'
              },
              {
                  cntntsNo: 30661,
                  codeNm: '배'
              },
              {
                  cntntsNo: 30662,
                  codeNm: '복숭아'
              },
              {
                  cntntsNo: 30663,
                  codeNm: '사과'
              },
              {
                  cntntsNo: 30664,
                  codeNm: '살구'
              },
              {
                  cntntsNo: 30665,
                  codeNm: '양앵두'
              },
              {
                  cntntsNo: 30666,
                  codeNm: '유자'
              },
              {
                  cntntsNo: 30667,
                  codeNm: '자두'
              },
              {
                  cntntsNo: 30668,
                  codeNm: '참다래'
              },
              {
                  cntntsNo: 30669,
                  codeNm: '포도(표준가온)'
              },
              {
                  cntntsNo: 30670,
                  codeNm: '한라봉(부지화)'
              },
          ],
          [
              {
                  cntntsNo: 30671,
                  codeNm: '거베라'
              },
              {
                  cntntsNo: 30672,
                  codeNm: '국화'
              },
              {
                  cntntsNo: 30673,
                  codeNm: '글라디올러스'
              },
              {
                  cntntsNo: 30674,
                  codeNm: '금어초'
              },
              {
                  cntntsNo: 30675,
                  codeNm: '꽃도라지'
              },
              {
                  cntntsNo: 30676,
                  codeNm: '꽃해바라기'
              },
              {
                  cntntsNo: 30677,
                  codeNm: '덴드로비움'
              },
              {
                  cntntsNo: 30678,
                  codeNm: '산호수'
              },
              {
                  cntntsNo: 30679,
                  codeNm: '선인장'
              },
              {
                  cntntsNo: 30680,
                  codeNm: '수국'
              },
              {
                  cntntsNo: 30681,
                  codeNm: '스타티스'
              },
              {
                  cntntsNo: 30682,
                  codeNm: '시클라멘'
              },
              {
                  cntntsNo: 30683,
                  codeNm: '심비디움'
              },
              {
                  cntntsNo: 30684,
                  codeNm: '아이리스'
              },
              {
                  cntntsNo: 30685,
                  codeNm: '안개초'
              },
              {
                  cntntsNo: 30686,
                  codeNm: '오리엔탈나리(촉성재배)'
              },
              {
                  cntntsNo: 30687,
                  codeNm: '온시디움'
              },
              {
                  cntntsNo: 30688,
                  codeNm: '장미'
              },
              {
                  cntntsNo: 30689,
                  codeNm: '철쭉'
              },
              {
                  cntntsNo: 30690,
                  codeNm: '카네이션'
              },
              {
                  cntntsNo: 30691,
                  codeNm: '칼라'
              },
              {
                  cntntsNo: 30692,
                  codeNm: '칼랑코에'
              },
              {
                  cntntsNo: 30693,
                  codeNm: '튤립'
              },
              {
                  cntntsNo: 30694,
                  codeNm: '팔레놉시스'
              },
              {
                  cntntsNo: 30695,
                  codeNm: '포인세티아'
              },
              {
                  cntntsNo: 30696,
                  codeNm: '프리지아'
              },
          ],
      ]
      let crops = cropsList[selectedCat];
      return {
          selectedCat,
          category,
          cropsList,
          crops
      }
  },
  methods: {
      selectCategory(selected: number) {
          console.log('selected', selected);
        //   this.selectedCat = selected;
      },
      onChange(idx: number) {
          this.crops = this.cropsList[idx];
      }
  }
});
</script>