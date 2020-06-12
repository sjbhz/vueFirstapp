<template>
  <div class="popout">
    <div class="popout_box">
      <div class="popout_box_top">
        <h3>查询數據</h3>
        <p>名稱：{{searchItemNew[1]}}</p>
        <p>日期：{{searchItemNew[2]}}</p>
        <p>描述：{{searchItemNew[3]}}</p>
      </div>
      <div class="popout_box_bot">
        <button v-on:click="onCancel">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  props: {
    searchItem: {
      type: Array,
      required: true
    }
  },
  computed: {
    searchItemNew () {
      console.log('computed')
      console.log(this.searchItem)
      return this.searchItem
    }
  },
  methods: {
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
  }
  .popout_box_bot{
    width: 100%;height: 25%;
    display: flex;
    padding-left:65%;
    padding-top:12px;
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
