<template>
<div class="articlesContainer">
    <div class="container articles">
        <div @click="toggleActive($event, idx)" class="item" :class="'item'+(idx + 1)" v-for="(journal, idx) in journals" :key="journal.journalId">
            <span class="subtitle">{{journal.title}}</span>
            <p>{{journal.author}}</p>
            <p>{{journal.created_at}}</p>
        </div>
    </div>

    <div class="journalOverlay active" @click.self="closeModal($event)">
        <div class="overlayContainer">
          <div class="overlayContents">
            <div class="journalHeader">
              <span class="title">{{journalDetail.title}}</span>
              <p class="author">{{journalDetail.author}}</p>
              <p class="date">{{journalDetail.created_at}}</p>
              <p class="water" v-if="journalDetail.water">💧</p>
              <p class="fert" v-if="journalDetail.fertilizer">🧪</p>
            </div>
            <p class="content">{{journalDetail.content}}</p>
          </div>
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
    let journals: object[] = [];
    let journalDetail: object = {};
    return {
      journals,
      journalDetail
    }
  },
  mounted() {
    this.journals = [
        {
            journalId: 0,
            title: 'journal_title',
            author: 0,
            created_at: new Date().toISOString().split('T')[0],
            water: true,
            fertilizer: false,
            content: `What's Biden's new Covid plan?
Under the details unveiled on Thursday, all international passengers will have to be tested for the virus in the 24 hours before they leave for the US, regardless of their vaccination status. Mask requirements on planes, trains and buses will be extended until March.

The US government will seek to make available millions of free at-home tests through private insurance companies for those who have coverage and through health centres and rural clinics for those who do not.

The administration's plan for the winter months also consists of steps to encourage all adults to get their booster vaccines, including through a public education campaign and more targeted outreach.

Over 40 million Americans have received their boosters, but Mr Biden said nearly 100 million more are eligible and have not yet had theirs.

Hundreds of family vaccination clinics will be set up across the country in an attempt to increase vaccination rates among children and teenagers.

The US and several other countries have banned travel from eight southern African countries. Health experts have said travel restrictions will buy them time to study the new variant.

What are details of the new Omicron cases?
Five cases of the variant have been detected in New York, state Governor Kathy Hochul said on Thursday.

A man who attended a convention in Manhattan in late November tested positive for the variant, said officials.

One of the cases was a vaccinated 67-year-old woman in Suffolk County who was experiencing mild symptoms of a cough and a headache, said Governor Hochul. The other four were in New York City.

A case confirmed in California on Wednesday and in Colorado on Thursday were identified in travellers who had recently flown back from South Africa.

An Omicron-positive individual in Minnesota had recently returned from a three-day anime (Japanese cartoon) convention in New York City.

The person in Hawaii, who was unvaccinated and had previously been infected with coronavirus in 2020, had no recent travel history. This indicated that community transmission there had probably already begun, health officials said.

The Hawaii case was experiencing mild to moderate symptoms and was isolated at home, said officials.
What's Biden's new Covid plan?
Under the details unveiled on Thursday, all international passengers will have to be tested for the virus in the 24 hours before they leave for the US, regardless of their vaccination status. Mask requirements on planes, trains and buses will be extended until March.

The US government will seek to make available millions of free at-home tests through private insurance companies for those who have coverage and through health centres and rural clinics for those who do not.

The administration's plan for the winter months also consists of steps to encourage all adults to get their booster vaccines, including through a public education campaign and more targeted outreach.

Over 40 million Americans have received their boosters, but Mr Biden said nearly 100 million more are eligible and have not yet had theirs.

Hundreds of family vaccination clinics will be set up across the country in an attempt to increase vaccination rates among children and teenagers.

The US and several other countries have banned travel from eight southern African countries. Health experts have said travel restrictions will buy them time to study the new variant.

What are details of the new Omicron cases?
Five cases of the variant have been detected in New York, state Governor Kathy Hochul said on Thursday.

A man who attended a convention in Manhattan in late November tested positive for the variant, said officials.

One of the cases was a vaccinated 67-year-old woman in Suffolk County who was experiencing mild symptoms of a cough and a headache, said Governor Hochul. The other four were in New York City.

A case confirmed in California on Wednesday and in Colorado on Thursday were identified in travellers who had recently flown back from South Africa.

An Omicron-positive individual in Minnesota had recently returned from a three-day anime (Japanese cartoon) convention in New York City.

The person in Hawaii, who was unvaccinated and had previously been infected with coronavirus in 2020, had no recent travel history. This indicated that community transmission there had probably already begun, health officials said.

The Hawaii case was experiencing mild to moderate symptoms and was isolated at home, said officials.`

        },
        {
            journalId: 1,
            title: 'journal_title',
            author: 0,
            created_at: new Date(),
            water: true,
            fertilizer: true,
            content: 'journal_content1'

        },
        {
            journalId: 2,
            title: 'journal_title',
            author: 0,
            created_at: new Date(),
            water: false,
            fertilizer: false,
            content: 'journal_content1'

        },
        {
            journalId: 3,
            title: 'journal_title',
            author: 0,
            created_at: new Date(),
            water: true,
            fertilizer: false,
            content: 'journal_content1'

        },
        {
            journalId: 4,
            title: 'journal_title',
            author: 0,
            created_at: new Date(),
            water: true,
            fertilizer: false,
            content: 'journal_content1'

        },
        {
            journalId: 5,
            title: 'journal_title',
            author: 0,
            created_at: new Date(),
            water: true,
            fertilizer: false,
            content: 'journal_content1'

        },
        {
            journalId: 6,
            title: 'journal_title',
            author: 0,
            created_at: new Date(),
            water: true,
            fertilizer: false,
            content: 'journal_content1'

        },
    ]
    axios.
        get('/journals')
        .then(res => {
            this.journals = res.data.data;
        })
        .catch(err => console.log(err))
  },
  methods: {
    toggleActive(event: Event, id: number) {
        document.querySelector('.journalOverlay')!.classList.toggle('active');
        this.journalDetail = this.journals[id];
    },
    closeModal(evt: Event){
      if (evt.currentTarget != document.querySelector('.overlayContainer')) {
        document.querySelector('.journalOverlay')!.classList.toggle('active');

      }
    },
  }
});
</script>

<style>
</style>
