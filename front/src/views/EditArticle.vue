<template>
  <div class="articleContainer">
    <form>
        <div class="header">
            <div class="title">
                <input id="title" type="text" placeholder="제목을 입력해주세요">
            </div>
            <div class="water">
                <label for="water">
                    <p>물을 주셨나요?</p>
                    <input type="checkbox" name="water" id="water">
                    <span class="checked">
                        🏜️ 아니오
                    </span>
                    <span class="unchecked">
                        🌊 네
                    </span>
                </label>
            </div>
            <div class="ferti">
                <label for="fertilizer">
                    <p>비료를 주셨나요?</p>
                    <input type="checkbox" name="fertilizer" id="fertilizer">
                    <span class="checked">
                        🌱 아니오
                    </span>
                    <span class="unchecked">
                        🌳 네
                    </span>
                </label>
            </div>
        </div>
        <div class="main">
            <div id="editor">
            </div>
            <div class="editor">
                <Editor />
            </div>
        </div>
        <div class="footer">
            <button id="submit" class="pulse">글쓰기</button>
        </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import 'codemirror/lib/codemirror.css'; // codemirror 스타일
import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style
import Editor from '@toast-ui/editor';
import 'highlight.js/styles/github.css'; // code block highlight 스타일
import {getCookie} from '@/cookie';

export default defineComponent({
  name: 'EditArticle',
  components: {
  },
  mounted() {
    const editor = new Editor({
      el: (<HTMLElement>document.querySelector("#editor")),
      initialEditType: "markdown",
      initialValue: '여기에 일기를 작성해주세요 🌿',
      previewStyle: "vertical",
      height: "500px",
    })
    const btn = document.querySelector("#submit")!
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        const editContent = editor.getMarkdown()
        this.sendJournal(editContent);
    })
  },
  methods: {
      sendJournal(content: string) {
          let data: object = {
              title: (<HTMLInputElement>document.getElementById('title')).value,
              userId: getCookie('userId'),
              water:(<HTMLInputElement>document.getElementById('water')).checked,
              ferti:(<HTMLInputElement>document.getElementById('fertilizer')).checked,
              content: content,

          }
          axios.
          post('/journals', {data: data})
          .then(res => {
              if(res.data.success) {
                this.$router.push('/');
              } else {
                  alert('일기가 저장되지 못했습니다.')
              }
          })
          .catch(err => console.log(err))
      },
  }
});
</script>
