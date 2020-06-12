<template>
  <div class="popout">
    <div class="popout_box">
      <!--<upp v-show="upShow"></upp>-->
      <div class="popout_box_top">
        <h1>确认删除？</h1>
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
  name: 'delet',
  methods: {
    onConfirm () {
      // this.$parent.oneditConfirm()
      // this.$emit('formEditData', {name: this.name, date: this.date, dis: this.dis})
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
    width: 100%;height: 55%;
  }
  .popout_box_top h1{
    margin-top: 10%;
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
