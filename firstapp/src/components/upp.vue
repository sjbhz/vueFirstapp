<template>
  <div class="popout_box_top">
    <h3>添加數據</h3>
    <p>名稱：<input type="text"></p>
    <p>日期：<input type="text"></p>
    <p>描述：<input type="text"></p>
  </div>
</template>

<script>
export default {
  name: 'upp',
  props: ['sendData'], // 用来接收父组件传给子组件的数据
  data () {
    return {
      msg: ' '
    }
  }
}
</script>

<style scoped>
  .popout_box_top{
   width: 100%;height: 75%;
  }
</style>
