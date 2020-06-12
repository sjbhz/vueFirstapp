<template>
  <div class="popout">
    <!--<li v-bind:key="user" v-for="user in asers">{{user}}</li> &lt;!&ndash;//遍历传递过来的值，然后呈现到页面&ndash;&gt;-->
    <div class="popout_box">
      <div class="popout_box_top">
        <h1>内容</h1>
      </div>
      <div class="popout_box_bot">
        <button v-on:click="onConfirm">确定</button>
        <button v-on:click="onCancel">取消</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'appusers',
  props: {
    asers: { // 这个就是父组件中子标签自定义名字
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .popout{
    width: 100vw;height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .popout_box{
    width: 80%;height: 25%;
    background-color: white;
  }
  .popout_box_top{
    width: 100%;height: 75%;
    background-color: #91eeff;
  }
  .popout_box_bot{
    width: 100%;height: 25%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .popout_box_bot button{
    width: 15%;height: 75%;
    background-color: #E6E6E6;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
