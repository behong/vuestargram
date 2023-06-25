<template>
    <div>
        <Post :post="게시물[0]" />
        <Post :post="게시물[1]" />

    </div>
</template>
  
  <script>
  import Post from  './Post.vue'
//   import FilterBox from './FilterBox.vue'
//   import filterData from '../assets/imgFilter.js'
//   import MyPage from './MyPage.vue'
  
  export default {
    data() {
      return {
        //imgFilter: filterData
      }
    },
    components: {
        Post
      //FilterBox,
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