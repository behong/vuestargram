<template>
    <div>
        <div v-if="step == 0">
            <Post :post="게시물[i]" v-for="(a,i) in 게시물" :key="i" />
        </div>

        <div v-if="step == 1">
            <div class="upload-image" :style="{backgroundImage:`url(${objectUrl}`}"></div>
            <div class="filters">
              <FilterBox :filterName="a" :objectUrl="objectUrl" v-for="(a,i) in imgFilter" :key="i">
              {{a}}
              </FilterBox>
            </div>
        </div>

        <div v-if="step == 2">
            <div class="upload-image" :style="{backgroundImage:`url(${objectUrl}`}"></div>
            <div class="write">
                <textarea @input="$emit('write',$event.target.value)" class="write-box">write!</textarea>
            </div>
        </div>

    </div>
</template>
  
  <script>
  import Post from  './Post.vue'
  import FilterBox from './FilterBox.vue'
  import filterData from '../assets/imgFilter.js'
//   import MyPage from './MyPage.vue'
  
  export default {
    data() {
      return {
        imgFilter: filterData
      }
    },
    components: {
      Post,
      FilterBox,
      //MyPage,
    },
    props: {
      article : Array,
      step : Number,
      objectUrl : String,
      filterId : String,
      게시물 : Array
    }
  }
  </script>
  
  <style>
  .upload-image{
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size : cover;
  }
  .filters{
  overflow-x:scroll;
  white-space: nowrap;
  }
  .filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  }
  .filters::-webkit-scrollbar {
  height: 5px;
  }
  .filters::-webkit-scrollbar-track {
  background: #f1f1f1; 
  }
  .filters::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 5px;
  }
  .filters::-webkit-scrollbar-thumb:hover {
  background: #555; 
  }
  .write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
  }
  </style>