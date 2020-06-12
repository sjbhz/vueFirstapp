<template>
  <div class="child-page">
    <h1>子页面</h1>
    <slot name="header"></slot>
    <slot></slot> <!--// 等价于 <slot name="default"></slot>-->
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'alertBox2',
  methods: {
    clickEvent () {
      this.$emit('enlargeText', 1)
      console.log(this)
    }
  }
}
</script>

<style scoped>

</style>
