<template>
  <div class="pager">
    <!--<a href="javascript:void(0);" v-show="showFirstPage" v-on:click="firstPage" >首页</a>-->
    <a href="javascript:void(0);" v-on:click="firstPage" >首页</a>
    <a href="javascript:void(0);" v-on:click="prevPage" >上一页</a>
    <a href="javascript:void(0);" v-on:click="nextPage" >下一页</a>
    <a href="javascript:void(0);" v-on:click="lastPage" >尾页</a>
    <!--<div>-->
      <!--<select v-model="rowNum">-->
        <!--<option value="10">10</option>-->
        <!--<option selected="selected" value="20">20</option>-->
        <!--<option value="50">50</option>-->
      <!--</select>-->
    <!--</div>-->
    <!--<span>{{curPage}}/{{total}}</span>-->
    <!--<div class="goto">-->
      <!--<input type="text" v-model="gotoPage" />-->
      <!--<a href="javascript:void(0);" v-on:click="gotoNextPage" >跳转</a>-->
    <!--</div>-->
  </div>
</template>

<script>
export default {
  mounted () {
    this.$nextTick(() => { this.initPager() }) // 需要延迟初始化
  },
  name: 'Pager',
  data () {
    return {
      'gotoPage': '',
      // 'showFirstPage': true,
      // 'showLastPage': true,
      // 'showPrevPage': true,
      // 'showNextPage': true,
      'rowNum': this.pageSize
    }
  },
  methods: {
    nextPage () { // 下一页
      console.log(this.curPage)
      this.$emit('setPage', this.curPage + 1) // 调用父组件方法
    },
    prevPage () { // 上一页
      this.$emit('setPage', this.curPage - 1) // 调用父组件方法
    },
    firstPage () {
      this.$emit('setPage', 1) // 调用父组件方法
    },
    lastPage () {
      this.$emit('setPage', this.total) // 调用父组件方法
    },
    initPager () {
      // this.showFirstPage = this.curPage > 1
      // this.showLastPage = this.curPage < this.total
      // this.showPrevPage = this.curPage > 1
      // this.showNextPage = this.curPage < this.total
      this.gotoPage = ''
    }
  },
  props: [
    'pageSize', 'curPage', 'total'
  ],
  watch: {
    'rowNum': 'rowNumChanged' // 监控rowNum
  }
}
</script>

<style scoped>
  .pager>span,.pager>a,.pager>select,.pager>div{
    float: left;
    margin-left: 10px;
  }

  .pager{
    float: right;
    width: 600px;
    margin: 0 auto;
    margin-top: 10px;
    height: 48px;
    line-height: 48px;
    margin-bottom: 40px;
  }

  .pager input,.pager select{
    height:40px;
    line-height:40px;
    outline:none;
    border:1px solid #888;
    padding:10px;
    box-sizing:border-box;
  }
  .pager input{
    width: 50px;
  }
  .pager .goto{
    margin-left: 20px;
  }
  .pager a{
    color: black;
    font-weight: bold;
    text-decoration: none;
  }
  .pager a:hover{
    color: green;
  }
</style>
