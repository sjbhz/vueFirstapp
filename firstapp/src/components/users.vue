<template>
  <div class="popout">
    <div class="popout_box">
      <!--<upp v-show="upShow"></upp>-->
      <div class="popout_box_top">
        <h3>添加數據</h3>
        <p>名稱：<input type="text" v-model="name"></p>
        <p>日期：<input type="text" v-model="date"></p>
        <p>描述：<input type="text" v-model="dis"></p>
      </div>
      <div class="popout_box_bot">
        <button v-on:click="onConfirm">确定</button>
        <button v-on:click="onCancel">取消</button>
      </div>
    </div>
  </div>
</template>
<script>
// import upp from './upp'
export default {
  name: 'users',
  props: {
    // name: { // 这个就是父组件中子标签自定义名字
    //   type: String,
    //   required: true
    // }
  },
  data () {
    return {
      name: '',
      date: '',
      dis: ''
    }
  },
  methods: {
    onConfirm () {
      this.$emit('formAddData', {name: this.name, date: this.date, dis: this.dis})
      this.name = ''
      this.date = ''
      this.dis = ''
    },
    onCancel () {
      this.$parent.onCancel()
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
    width: 70%;height: 35%;
    background-color: white;
  }
  .popout_box_top{
    width: 100%;height: 75%;
    align-items: center;
    justify-content: center;
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
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
