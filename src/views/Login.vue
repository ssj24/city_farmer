<template>
  <!--
  This was created based on the Dribble shot by Deepak Yadav that you can find at https://goo.gl/XRALsw
  I'm @hk95 on GitHub. Feel free to message me anytime.
-->

<section class="user">
  <div class="user_options-container">
    <div class="user_options-text">
      <div class="user_options-unregistered">
        <h2 class="user_unregistered-title">아직 계정이 없으신가요?</h2>
        <p class="user_unregistered-text">도시농부와 함께 주말농장을 즐겨봐요.</p>
        <button class="user_unregistered-signup" id="signup-button" @click="transSignin">계정 생성</button>
      </div>

      <div class="user_options-registered">
        <h2 class="user_registered-title">기존 계정으로 로그인하세요.</h2>
        <p class="user_registered-text">주말농장이 기다리고 있어요!</p>
        <button class="user_registered-login" id="login-button" @click="transLogin">로그인</button>
      </div>
    </div>
    
    <div class="user_options-forms" id="user_options-forms">
      <div class="user_forms-login">
        <h2 class="forms_title">로그인하기</h2>
        <form class="forms_form" name="user" id="loginForm">
          <fieldset class="forms_fieldset">
            <div class="forms_field">
              <input type="email" name="email" id="email" placeholder="Email" class="forms_field-input" required autofocus />
            </div>
            <div class="forms_field">
              <input type="password" name="password" id="password" placeholder="Password" class="forms_field-input" required />
            </div>
          </fieldset>
          <div class="forms_buttons">
            <input type="submit" @click="loginSubmit($event)" value="로그인" class="forms_buttons-action">
          </div>
        </form>
      </div>
      <div class="user_forms-signup">
        <h2 class="forms_title">도시농부 회원 되기</h2>
        <form class="forms_form" name="user" id="signupForm">
          <fieldset class="forms_fieldset">
            <div class="forms_field">
              <input type="text" name="name" id="newName" placeholder="Full Name" class="forms_field-input" required />
            </div>
            <div class="forms_field">
              <input type="email" name="email" id="newEmail" placeholder="Email" class="forms_field-input" required />
            </div>
            <div class="forms_field">
              <input type="password" name="password" id="newPassword" placeholder="Password" class="forms_field-input" required />
            </div>
          </fieldset>
          <div class="forms_buttons">
            <input type="submit" @click="signupSubmit($event)" value="회원가입" class="forms_buttons-action">
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import axios from 'axios';
import {
	saveUserToCookie,
	saveUserNameToCookie,
} from '@/cookie';

export default defineComponent({
  name: 'Login',
  components: {

  },
  data() {

      return {

      }
  },
  mounted() {
      const signupButton = document.getElementById('signup-button')!;
      const loginButton = document.getElementById('login-button')!;
      const userForms = document.getElementById('user_options-forms')!;
      const loginForm = document.getElementById('loginForm')!;
      const signupForm = document.getElementById('signupForm')!;
  },
  methods: {
      
      transSignin() {
        
        document.getElementById('user_options-forms')!.classList.remove('bounceRight');
        document.getElementById('user_options-forms')!.classList.add('bounceLeft');
      },
      transLogin() {
        document.getElementById('user_options-forms')!.classList.remove('bounceLeft')
        document.getElementById('user_options-forms')!.classList.add('bounceRight')
      },
      loginSubmit(event: Event) {
        event.preventDefault();
        const user: object = {
          email: (<HTMLInputElement>document.getElementById("email")).value,
          password: (<HTMLInputElement>document.getElementById("password")).value
        }
        axios.post('/users/login', user)
        .then(res => {
          if (res.data.success) {
            console.log(res.data);
            let loginData = {
                userId: res.data.userId,
                userName: res.data.userName
            }
            this.$store.commit('startLogin', loginData)
            this.$store.commit('isLogin')
            saveUserToCookie(res.data.userId);
            saveUserNameToCookie(res.data.userName);
            this.$router.push('/');
          } else {
            alert('입력 정보가 틀렸습니다. \n 다시 확인해주세요.')
          }
        })
        .catch(err=> console.log(err));
      },
      signupSubmit(event: Event) {
        event.preventDefault();
        const user: object = {
          name: (<HTMLInputElement>document.getElementById("newName")).value,
          email: (<HTMLInputElement>document.getElementById("newEmail")).value,
          password: (<HTMLInputElement>document.getElementById("newPassword")).value
        }
        axios.post('/users/regist', user)
        .then(res=> {
          if (res.data.success) {
            alert('도시농부에 오신 새로운 농부님을 환영합니다. \n로그인해주세요.')
          } else {
            alert('입력 정보가 틀렸습니다. \n다시 확인해주세요.')
          }
        })
        .catch(err=> console.log(err));
      }
    },

  }
);
</script>

