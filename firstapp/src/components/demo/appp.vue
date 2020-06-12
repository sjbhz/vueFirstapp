<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div id="appp">
    <button v-on:click="handleClick">appp點擊</button>
    <appusers v-show="showDialog" v-bind:asers="appusers"></appusers> <!--//前者自定义名称便于子组件调用，后者要传递数据名-->
    <component :is="alertBox" :title="'我是'"> <!--v-on:is的使用-->
      <template #header>
      <p>这是一个匿名插槽的demo</p>
      <p>头部</p>
      </template>
      <template #footer>
      <p>脚部</p>
      </template>
      <template #body>
      <p>身体</p>
      </template>
    </component>
    <alertBox2>
      <p>这是一个具名插槽的demo</p>
      <template v-slot:header>
        <p>头部</p>
      </template>
      <template #footer>
        <p>脚部</p>
      </template>
      <template>
        <p>身体</p>
      </template>
    </alertBox2>
    <alertBox3 :list="testList">
      <template slot-scope="scope">
        <button @click="testBtn(scope)">测试按钮</button>
      </template>
    </alertBox3>
  </div>
</template>

<script>
// import appusers from './appusers'
import alertBox3 from './alertBox3'
import alertBox2 from './alertBox2'
import alertBox from './alertBox'
export default {
  name: 'Appp',
  data () {
    return {
      showDialog: false,
      appusers: ['Henry', 'Bucky', 'Emily'],
      postFontSize: 1,
      testList: [1, 2, 3, 4, 5, 6],
      alertBox: 'alertBox' // v-on:is的使用
    }
  },
  components: {
    // appusers,
    alertBox3,
    alertBox2,
    alertBox
  },
  methods: {
    handleClick () {
      console.log(this)
      this.showDialog = true
    },
    handleLarge (enlargeAmount) {
      console.log(this)
      this.postFontSize += enlargeAmount
    },
    testBtn () {
      console.log('作用域插槽')
    }
  }
}
</script>

<style></style>
