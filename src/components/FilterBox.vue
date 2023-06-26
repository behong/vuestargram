<template>
  <div :class="`${filterName} filter-item`" :style="`background-image:url(${objectUrl})`">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'FilterBox',
    props:{
        objectUrl: String,
        filterName: String,
    }

}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : #000000;
  background-size: cover;
  background-position : center;
}
</style>