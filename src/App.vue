<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li @click="step++" v-if="step == 1">Next</li>
      <li @click="publish" v-if="step == 2">Finish</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
<H4> 안녕 {{ $store.state.name }} / {{ $store.state.age }}</H4>
<button @click="$store.commit('나이변경')">버튼</button>

  <Container
    @write="postingText = $event"
    :article="article"
    :step="step"
    :objectUrl="objectUrl"
    :changeFilter="changeFilter"
    :게시물="게시물"
  />

  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import postdata from './assets/postdata.js'
import axios from 'axios'

export default {
  name: "App",
  data(){
    return{
      게시물: postdata,
      버튼횟수: 0,
      step: 0,
      objectUrl: '',
      postingText : '',
      changeFilter :'',
    }
  },
  mounted(){
    this.emitter.on('filterCls', (a)=>{
    console.log('현재 img ', this.objectUrl)
    this.changeFilter = a;
      console.log(a);
    });
  },
  components: {
    Container,
  },
  methods: {
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.버튼횟수}.json`)
            .then(res => {
              this.게시물.push(res.data)
              this.버튼횟수++
              //this.article.push(res.data)
              //this.articleNum++
            })
            .catch(e => {
              console.log(e)
            })
    },
    upload(e){
      let 파일 = e.target.files;
      console.log(파일);
      let url = URL.createObjectURL(파일[0]);
      console.log(url);
      this.objectUrl = url;
      this.step++;
    },
    publish(){
      let 내게시뮬 ={
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.objectUrl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.postingText,
        filter: this.changeFilter,
       };
      this.게시물.unshift(내게시뮬);
      this.step = 0;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>

