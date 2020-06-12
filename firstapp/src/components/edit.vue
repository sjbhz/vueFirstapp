<template>
  <div class="popout">
    <div class="popout_box">
      <!--<upp v-show="upShow"></upp>-->
      <div class="popout_box_top">
        <h3>編輯數據</h3>
        <p>名稱：<input v-model="name"></p>
        <p>日期：<input v-model="date"></p>
        <p>描述：<input v-model="title"></p>
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
  name: 'edit',
  data () {
    return {
      name: '',
      date: '',
      title: ''
    }
  },
  props: {
    editInnerText: {
      type: Array,
      required: true
    }
  },
  // mounted () {
  //   console.log(this)
  //   this.name = this.editInnerText[1]
  //   this.date = this.editInnerText[2]
  //   this.title = this.editInnerText[3]
  //   console.log('挂载完成e')
  // },
  watch: {
    editInnerText () {
      this.$nextTick(() => {
        console.log(this)
        this.name = this.editInnerText[1]
        this.date = this.editInnerText[2]
        this.title = this.editInnerText[3]
      })
    }
  },
  methods: {
    onConfirm () {
      this.$emit('formEditData', {name: this.name, date: this.date, title: this.title})
    },
    onCancel () {
      this.$parent.onCancel()
    }
  },
  created () {
    console.log('创建完成e')
  },
  beforeMount () {
    console.log('挂载之前e')
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
