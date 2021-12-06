<template>
    <div class="searchContainer">
        <select name="searchCategory" id="searchCategory" @change="onChange($event.target.value)">
            <option v-for="(cat, idx) in category" :key="idx" :value="idx" @click="selectCategory(idx)">{{ cat.codeNm }}</option>
        </select>
        <select name="searchKeyword" id="searchKeyword">
            <option v-for="crop in crops" :key="crop.cntntsNo" :value="crop.cntntsNo" :selected="crop.selected">{{ crop.codeNm }}</option>
        </select>
        <button class="searchBtn pulse" @click="openModal($event)"><span>Search</span></button>
        <div class="overlay" @click.self="closeModal($event)">
            <div class="container">
            <div class="title"></div>
            <div class="main">
                <CropDetail :cntntsNo="cntntsNo" />
            </div>
            <div class="footer">
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
  name: 'Search',
  props: {
    // crops: Object,
  },
  components: {
      CropDetail
  },
  data() {
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
                  codeNm: '기계이양재배',
                  selected: true
              },
              {
                  cntntsNo: 30698,
                  codeNm: '직파재배',
                  selected: false
              },
          ],
          [
              {
                  cntntsNo: 30699,
                  codeNm: '감자',
                  selected: true
              },
              {
                  cntntsNo: 30670,
                  codeNm: '강낭콩',
                  selected: false
              },
              {
                  cntntsNo: 30701,
                  codeNm: '고구마',
                  selected: false
              },
              {
                  cntntsNo: 30702,
                  codeNm: '녹두',
                  selected: false
              },
              {
                  cntntsNo: 30607,
                  codeNm: '들깨(잎)',
                  selected: false
              },
              {
                  cntntsNo: 30703,
                  codeNm: '들깨(종실)',
                  selected: false
              },
              {
                  cntntsNo: 30704,
                  codeNm: '땅콩',
                  selected: false
              },
              {
                  cntntsNo: 30705,
                  codeNm: '맥주보리',
                  selected: false
              },
              {
                  cntntsNo: 30706,
                  codeNm: '메밀',
                  selected: false
              },
              {
                  cntntsNo: 30707,
                  codeNm: '밀',
                  selected: false
              },
              {
                  cntntsNo: 30708,
                  codeNm: '수수',
                  selected: false
              },
              {
                  cntntsNo: 30709,
                  codeNm: '옥수수',
                  selected: false
              },
              {
                  cntntsNo: 30710,
                  codeNm: '완두',
                  selected: false
              },
              {
                  cntntsNo: 30711,
                  codeNm: '유채',
                  selected: false
              },
              {
                  cntntsNo: 30712,
                  codeNm: '일반보리',
                  selected: false
              },
              {
                  cntntsNo: 30713,
                  codeNm: '조',
                  selected: false
              },
              {
                  cntntsNo: 30714,
                  codeNm: '참깨',
                  selected: false
              },
              {
                  cntntsNo: 30715,
                  codeNm: '콩',
                  selected: false
              },
              {
                  cntntsNo: 30716,
                  codeNm: '팥',
                  selected: false
              },
              {
                  cntntsNo: 30717,
                  codeNm: '풋콩',
                  selected: false
              },
          ],
          [
              {
                  cntntsNo: 30733,
                  codeNm: '느타리버섯',
                  selected: true
              },
              {
                  cntntsNo: 30735,
                  codeNm: '양송이',
                  selected: false
              },
              {
                  cntntsNo: 30734,
                  codeNm: '영지버섯',
                  selected: false
              },
              {
                  cntntsNo: 30736,
                  codeNm: '팽이',
                  selected: false
              },
          ],
          [
              {
                  cntntsNo: 30737,
                  codeNm: '강황',
                  selected: true
              },
              {
                  cntntsNo: 30738,
                  codeNm: '결명자',
                  selected: false
              },
              {
                  cntntsNo: 30739,
                  codeNm: '구기자',
                  selected: false
              },
              {
                  cntntsNo: 30740,
                  codeNm: '길경(도라지)',
                  selected: false
              },
              {
                  cntntsNo: 30741,
                  codeNm: '더덕(양유)',
                  selected: false
              },
              {
                  cntntsNo: 30742,
                  codeNm: '독활',
                  selected: false
              },
              {
                  cntntsNo: 30743,
                  codeNm: '두충',
                  selected: false
              },
              {
                  cntntsNo: 30744,
                  codeNm: '맥문동',
                  selected: false
              },
              {
                  cntntsNo: 30745,
                  codeNm: '백하수오',
                  selected: false
              },
              {
                  cntntsNo: 30746,
                  codeNm: '산수유',
                  selected: false
              },
              {
                  cntntsNo: 30747,
                  codeNm: '산약(마)',
                  selected: false
              },
              {
                  cntntsNo: 30748,
                  codeNm: '시호',
                  selected: false
              },
              {
                  cntntsNo: 30749,
                  codeNm: '오미자',
                  selected: false
              },
              {
                  cntntsNo: 30750,
                  codeNm: '율무',
                  selected: false
              },
              {
                  cntntsNo: 30751,
                  codeNm: '작약',
                  selected: false
              },
              {
                  cntntsNo: 30752,
                  codeNm: '지황',
                  selected: false
              },
              {
                  cntntsNo: 30753,
                  codeNm: '차',
                  selected: false
              },
              {
                  cntntsNo: 30754,
                  codeNm: '참당귀',
                  selected: false
              },
              {
                  cntntsNo: 30755,
                  codeNm: '천궁',
                  selected: false
              },
              {
                  cntntsNo: 30756,
                  codeNm: '천마',
                  selected: false
              },
              {
                  cntntsNo: 30757,
                  codeNm: '택사',
                  selected: false
              },
              {
                  cntntsNo: 30758,
                  codeNm: '향부자',
                  selected: false
              },
              {
                  cntntsNo: 30759,
                  codeNm: '호프',
                  selected: false
              },
              {
                  cntntsNo: 30760,
                  codeNm: '황금',
                  selected: false
              },
              {
                  cntntsNo: 30761,
                  codeNm: '황기',
                  selected: false
              },
          ],
          [
              {
                  cntntsNo: 30770,
                  codeNm: '가지',
                  selected: true
              },
              {
                  cntntsNo: 30595,
                  codeNm: '갓',
                  selected: false
              },
              {
                  cntntsNo: 30596,
                  codeNm: '결구상추',
                  selected: false
              },
              {
                  cntntsNo: 30597,
                  codeNm: '고들빼기',
                  selected: false
              },
              {
                  cntntsNo: 30598,
                  codeNm: '고사리',
                  selected: false
              },
              {
                  cntntsNo: 30599,
                  codeNm: '고추(꽈리고추 반촉성)',
                  selected: false
              },
              {
                  cntntsNo: 30600,
                  codeNm: '고추(보통재배)',
                  selected: false
              },
              {
                  cntntsNo: 30601,
                  codeNm: '고추(촉성재배)',
                  selected: false
              },
              {
                  cntntsNo: 30602,
                  codeNm: '곰취',
                  selected: false
              },
              {
                  cntntsNo: 30603,
                  codeNm: '근대',
                  selected: false
              },
              {
                  cntntsNo: 30604,
                  codeNm: '냉이',
                  selected: false
              },
              {
                  cntntsNo: 30605,
                  codeNm: '당근',
                  selected: false
              },
              {
                  cntntsNo: 30606,
                  codeNm: '두릅',
                  selected: false
              },
              {
                  cntntsNo: 30608,
                  codeNm: '딸기(반촉성재배)',
                  selected: false
              },
              {
                  cntntsNo: 30609,
                  codeNm: '딸기(사계성여름재배)',
                  selected: false
              },
              {
                  cntntsNo: 30610,
                  codeNm: '딸기(촉성재배)',
                  selected: false
              },
              {
                  cntntsNo: 30611,
                  codeNm: '마늘',
                  selected: false
              },
              {
                  cntntsNo: 30612,
                  codeNm: '마늘(잎마늘)',
                  selected: false
              },
              {
                  cntntsNo: 30613,
                  codeNm: '멜론',
                  selected: false
              },
              {
                  cntntsNo: 30614,
                  codeNm: '무',
                  selected: false
              },
              {
                  cntntsNo: 30615,
                  codeNm: '무(고랭지재배)',
                  selected: false
              },
              {
                  cntntsNo: 30616,
                  codeNm: '미나리',
                  selected: false
              },
              {
                  cntntsNo: 30617,
                  codeNm: '방울토마토',
                  selected: false
              },
              {
                  cntntsNo: 30618,
                  codeNm: '배추',
                  selected: false
              },
              {
                  cntntsNo: 30619,
                  codeNm: '배추(고랭지재배)',
                  selected: false
              },
              {
                  cntntsNo: 30620,
                  codeNm: '부추',
                  selected: false
              },
              {
                  cntntsNo: 30621,
                  codeNm: '브로콜리(녹색꽃양배추 고랭지재배)',
                  selected: false
              },
              {
                  cntntsNo: 30622,
                  codeNm: '브로콜리(평야지재배)',
                  selected: false
              },
              {
                  cntntsNo: 30623,
                  codeNm: '비트',
                  selected: false
              },
              {
                  cntntsNo: 30624,
                  codeNm: '상추',
                  selected: false
              },
              {
                  cntntsNo: 30626,
                  codeNm: '샐러리(양미나리)',
                  selected: false
              },
              {
                  cntntsNo: 30625,
                  codeNm: '생강',
                  selected: false
              },
              {
                  cntntsNo: 30627,
                  codeNm: '수박',
                  selected: false
              },
              {
                  cntntsNo: 30628,
                  codeNm: '시금치',
                  selected: false
              },
              {
                  cntntsNo: 30629,
                  codeNm: '신선초',
                  selected: false
              },
              {
                  cntntsNo: 30630,
                  codeNm: '쑥갓',
                  selected: false
              },
              {
                  cntntsNo: 30632,
                  codeNm: '아스파라거스',
                  selected: false
              },
              {
                  cntntsNo: 30631,
                  codeNm: '아욱',
                  selected: false
              },
              {
                  cntntsNo: 30634,
                  codeNm: '양배추',
                  selected: false
              },
              {
                  cntntsNo: 30633,
                  codeNm: '양파',
                  selected: false
              },
              {
                  cntntsNo: 30635,
                  codeNm: '연근',
                  selected: false
              },
              {
                  cntntsNo: 30636,
                  codeNm: '오이',
                  selected: false
              },
              {
                  cntntsNo: 30637,
                  codeNm: '우엉',
                  selected: false
              },
              {
                  cntntsNo: 30638,
                  codeNm: '적채',
                  selected: false
              },
              {
                  cntntsNo: 30639,
                  codeNm: '쪽파',
                  selected: false
              },
              {
                  cntntsNo: 30642,
                  codeNm: '참나물',
                  selected: false
              },
              {
                  cntntsNo: 30640,
                  codeNm: '참외',
                  selected: false
              },
              {
                  cntntsNo: 30641,
                  codeNm: '참취',
                  selected: false
              },
              {
                  cntntsNo: 30643,
                  codeNm: '청경채',
                  selected: false
              },
              {
                  cntntsNo: 30644,
                  codeNm: '치커리',
                  selected: false
              },
              {
                  cntntsNo: 30645,
                  codeNm: '토란',
                  selected: false
              },
              {
                  cntntsNo: 30646,
                  codeNm: '토마토',
                  selected: false
              },
              {
                  cntntsNo: 30647,
                  codeNm: '파',
                  selected: false
              },
              {
                  cntntsNo: 30648,
                  codeNm: '파슬리(향미나리)',
                  selected: false
              },
              {
                  cntntsNo: 30649,
                  codeNm: '파프리카',
                  selected: false
              },
              {
                  cntntsNo: 30650,
                  codeNm: '피망',
                  selected: false
              },
              {
                  cntntsNo: 30651,
                  codeNm: '호박',
                  selected: false
              },
              {
                  cntntsNo: 30652,
                  codeNm: '호박(늙은호박)',
                  selected: false
              },
              {
                  cntntsNo: 30653,
                  codeNm: '호박(단호박)',
                  selected: false
              },
          ],
          [
              {
                  cntntsNo: 30654,
                  codeNm: '감귤(보통 온주밀감)',
                  selected: true
              },
              {
                  cntntsNo: 30655,
                  codeNm: '감귤(시설재배)',
                  selected: false
              },
              {
                  cntntsNo: 30656,
                  codeNm: '단감',
                  selected: false
              },
              {
                  cntntsNo: 30657,
                  codeNm: '단감(시설재배)',
                  selected: false
              },
              {
                  cntntsNo: 30658,
                  codeNm: '매실',
                  selected: false
              },
              {
                  cntntsNo: 30659,
                  codeNm: '무화과(노지재배)',
                  selected: false
              },
              {
                  cntntsNo: 30660,
                  codeNm: '무화과(무가온 시설재배)',
                  selected: false
              },
              {
                  cntntsNo: 30661,
                  codeNm: '배',
                  selected: false
              },
              {
                  cntntsNo: 30662,
                  codeNm: '복숭아',
                  selected: false
              },
              {
                  cntntsNo: 30663,
                  codeNm: '사과',
                  selected: false
              },
              {
                  cntntsNo: 30664,
                  codeNm: '살구',
                  selected: false
              },
              {
                  cntntsNo: 30665,
                  codeNm: '양앵두',
                  selected: false
              },
              {
                  cntntsNo: 30666,
                  codeNm: '유자',
                  selected: false
              },
              {
                  cntntsNo: 30667,
                  codeNm: '자두',
                  selected: false
              },
              {
                  cntntsNo: 30668,
                  codeNm: '참다래',
                  selected: false
              },
              {
                  cntntsNo: 30669,
                  codeNm: '포도(표준가온)',
                  selected: false
              },
              {
                  cntntsNo: 30670,
                  codeNm: '한라봉(부지화)',
                  selected: false
              },
          ],
          [
              {
                  cntntsNo: 30671,
                  codeNm: '거베라',
                  selected: true
              },
              {
                  cntntsNo: 30672,
                  codeNm: '국화',
                  selected: false
              },
              {
                  cntntsNo: 30673,
                  codeNm: '글라디올러스',
                  selected: false
              },
              {
                  cntntsNo: 30674,
                  codeNm: '금어초',
                  selected: false
              },
              {
                  cntntsNo: 30675,
                  codeNm: '꽃도라지',
                  selected: false
              },
              {
                  cntntsNo: 30676,
                  codeNm: '꽃해바라기',
                  selected: false
              },
              {
                  cntntsNo: 30677,
                  codeNm: '덴드로비움',
                  selected: false
              },
              {
                  cntntsNo: 30678,
                  codeNm: '산호수',
                  selected: false
              },
              {
                  cntntsNo: 30679,
                  codeNm: '선인장',
                  selected: false
              },
              {
                  cntntsNo: 30680,
                  codeNm: '수국',
                  selected: false
              },
              {
                  cntntsNo: 30681,
                  codeNm: '스타티스',
                  selected: false
              },
              {
                  cntntsNo: 30682,
                  codeNm: '시클라멘',
                  selected: false
              },
              {
                  cntntsNo: 30683,
                  codeNm: '심비디움',
                  selected: false
              },
              {
                  cntntsNo: 30684,
                  codeNm: '아이리스',
                  selected: false
              },
              {
                  cntntsNo: 30685,
                  codeNm: '안개초',
                  selected: false
              },
              {
                  cntntsNo: 30686,
                  codeNm: '오리엔탈나리(촉성재배)',
                  selected: false
              },
              {
                  cntntsNo: 30687,
                  codeNm: '온시디움',
                  selected: false
              },
              {
                  cntntsNo: 30688,
                  codeNm: '장미',
                  selected: false
              },
              {
                  cntntsNo: 30689,
                  codeNm: '철쭉',
                  selected: false
              },
              {
                  cntntsNo: 30690,
                  codeNm: '카네이션',
                  selected: false
              },
              {
                  cntntsNo: 30691,
                  codeNm: '칼라',
                  selected: false
              },
              {
                  cntntsNo: 30692,
                  codeNm: '칼랑코에',
                  selected: false
              },
              {
                  cntntsNo: 30693,
                  codeNm: '튤립',
                  selected: false
              },
              {
                  cntntsNo: 30694,
                  codeNm: '팔레놉시스',
                  selected: false
              },
              {
                  cntntsNo: 30695,
                  codeNm: '포인세티아',
                  selected: false
              },
              {
                  cntntsNo: 30696,
                  codeNm: '프리지아',
                  selected: false
              },
          ],
      ]
    let crops: object = cropsList[selectedCat];
    let cntntsNo: String = '30697';
      return {
          selectedCat,
          category,
          cropsList,
          crops,
          cntntsNo
      }
  },
  mounted() {
      
  },
methods: {
    selectCategory(selected: number) {
        console.log('selected', selected);
    //   this.selectedCat = selected;
    },
    onChange(idx: number) {
        this.crops = this.cropsList[idx];
    },
    openModal(evt: Event) {
        this.cntntsNo = (<HTMLSelectElement>document.querySelector("#searchKeyword")).value;
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
  }
});
</script>