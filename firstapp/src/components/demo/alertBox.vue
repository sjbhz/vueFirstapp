<template>
  <div class="child-page">
    <h1>{{title}}子页面</h1>
    <slot name="header"></slot>  <!--//  替换为 <p>hello,world!</p>-->
    <slot name="body"></slot>  <!--//  替换为 <p>hello,world!</p>-->
    <slot name="footer"></slot>  <!--//  替换为 <p>hello,world!</p>-->
  </div>
</template>

<script>
export default {
  name: 'alertBox',
  props: {
    title: {
      type: String
    }
  },
  components: {
  }
}
</script>

<style scoped>

</style>
