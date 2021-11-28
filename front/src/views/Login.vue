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
        <h2 class="forms_title">Login</h2>
        <form class="forms_form">
          <fieldset class="forms_fieldset">
            <div class="forms_field">
              <input type="email" placeholder="Email" class="forms_field-input" required autofocus />
            </div>
            <div class="forms_field">
              <input type="password" placeholder="Password" class="forms_field-input" required />
            </div>
          </fieldset>
          <div class="forms_buttons">
            <button type="button" class="forms_buttons-forgot">Forgot password?</button>
            <input type="submit" value="Log In" class="forms_buttons-action">
          </div>
        </form>
      </div>
      <div class="user_forms-signup">
        <h2 class="forms_title">Sign Up</h2>
        <form class="forms_form">
          <fieldset class="forms_fieldset">
            <div class="forms_field">
              <input type="text" placeholder="Full Name" class="forms_field-input" required />
            </div>
            <div class="forms_field">
              <input type="email" placeholder="Email" class="forms_field-input" required />
            </div>
            <div class="forms_field">
              <input type="password" placeholder="Password" class="forms_field-input" required />
            </div>
          </fieldset>
          <div class="forms_buttons">
            <input type="submit" value="Sign up" class="forms_buttons-action">
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

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
  },
  methods: {
      
      transSignin() {
        
        document.getElementById('user_options-forms')!.classList.remove('bounceRight');
        document.getElementById('user_options-forms')!.classList.add('bounceLeft');
      },
      transLogin() {
        document.getElementById('user_options-forms')!.classList.remove('bounceLeft')
        document.getElementById('user_options-forms')!.classList.add('bounceRight')
      }
        
    },

  }
);
</script>

