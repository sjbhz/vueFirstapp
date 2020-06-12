<!--suppress ALL -->
<template>
  <div class="Name">
    <h1>{{ msg }}</h1>
    <div>
      <input type="text" ref="search">
      <button style="float:left" v-on:click="searchDate">查询</button>
      <button style="float:right" @click="addDate">增加</button>
      <users v-show="showDialog" @formAddData="handleAddData"></users>
      <edit :editInnerText="editInnerText" v-show="showedit" @formEditData="handleEditData"></edit>
      <search :searchItem="searchItem" v-show="showsearch"></search>
      <!--<delet v-show="showdelet"></delet>-->
    </div>
    <table>
      <thead>
        <tr>
          <th v-bind:key="index" v-for="(col,index) in cols"> {{col.label}} </th>
        </tr>
      </thead>
      <tbody>
      <tr v-bind:key="index" v-for="(table,index) in list" ref="tr_index">
        <td>{{table.node}}</td>
        <td>{{table.name}}</td>
        <td>{{table.date}}</td>
        <td>{{table.title}}</td>
        <td><button :id="index" @click="editDate">编辑</button>   <button :id="index" v-on:click="del">删除</button></td>
      </tr>
      </tbody>
    </table>
    <Pager
      v-if="!dataChanged"
      ref="pager"
      :pageSize="pageSize"
      :page="curPage"
      :total="total"
      @setPage="gotoPage"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import Pager from './Pager'
import users from './users'
import edit from './edit'
import search from './search'
// import delet from './delet'

var editbtn // 被点击编辑按钮的id
var searchitem = []
var editinnerText = []
export default {
  name: 'NameList',
  data () {
    return {
      msg: 'This is NameList',
      showDialog: false,
      showedit: false,
      showsearch: false,
      // showdelet: false,
      searchItem: searchitem,
      editInnerText: editinnerText,
      list: [], // 初始化内容
      cols: [
        {label: 'ID', prop: 'node'},
        {label: '名称', prop: 'name'},
        {label: '日期', prop: 'date'},
        {label: '描述', prop: 'title'},
        {label: '操作', prop: 'coordinate', type: 'unnormal'}
      ],

      curPage: 1, // 当前页
      total: 0, // 总共页数
      pageSize: 20, // 每页记录数
      dataChanged: false
    }
  },
  components: {
    Pager,
    users,
    edit,
    search,
    // delet
  },
  methods: {
    requestData () {
      axios.get('/api/list')
        .then(e => {
          let data = e.data
          if (data.data && Array.isArray(data.data)) {
            this.list = data.data
          }
          console.log(this.list)
        })
        .catch(err => {
          console.log(err)
        })
    },
    postData (list) {
      axios({
        method: 'post',
        url: '/api/list',
        data: list
      }).then(e => {
        console.log('post')
        console.log(e)
      }).catch(err => {
        console.log(err)
      })
    },

    refresh () { // 用于刷新组件，需手动调用
      this.dataChanged = true
      this.$nextTick(() => {
        this.dataChanged = false
      })
    },
    gotoPage (page) {
      console.log('gotoPage')
      console.log(page)
      console.log(arguments)
    },


    handleAddData() {
      var adddate = arguments[0].date
      var addname = arguments[0].name
      var adddis = arguments[0].dis
      if (addname === '' && adddate === '' && adddis === '') {
        alert('请添加数据！')
      } else {
        this.list.push({
          node: this.list.length + 1,
          date: adddate,
          name: addname,
          title: adddis
        })
        this.postData(this.list)
      }
      this.showDialog = false
      // this.showedit = false
    }, // bug: 重新打开时，输入框中的数据没有清空

    handleEditData() {
      // var editname = arguments[0].name
      // var inText = this.$refs.tr_index[editbtn]
      Vue.set(arguments[0], 'node', parseInt(editbtn)+1)
      Vue.set(this.list, editbtn, arguments[0])

      this.showedit = false

    },

    addDate () {
      this.showDialog = true
    },
    editDate (e) {
      console.log(this)
      console.log(e)
      // console.log(arguments)

      var btnId = e.path[0].id // 点击的按钮的id
      editbtn = btnId
      var editinnerTemp = e.path[2].innerText.split(/\s+/).slice(0,4)
      // editinnerText = e.path[2].innerText.split(/\s+/).slice(0,4)
      // console.log('editinnerText',editinnerText)
      editinnerText.splice(0, 4)
      editinnerText.push(editinnerTemp[0], editinnerTemp[1], editinnerTemp[2], editinnerTemp[3])
      this.showedit = true
    },
    searchDate (e) {
      console.log(this)
      console.log(e)
      var searchData = this.$refs.search.value
      if(searchData=="") {
        alert("请输入查询数据")
      }else {
        searchitem.splice(0, 4)
        this.list.forEach(function (item) {
          // console.log(item)
          if (item.date === searchData || item.name === searchData || item.title === searchData) {
            searchitem.push(item.node, item.name, item.date, item.title)
          }
        })
        if(searchitem.length <= 0) {
          alert("未查询到相关数据，请确认")
        }else {
          this.showsearch = true
        }
        // console.log('searchitem', searchitem)
      }
    },

    onCancel () {
      this.showDialog = false
      this.showedit = false
      this.showsearch = false
    },
    del (e) {
      // console.log(e)
      var btnId = e.path[0].id // 点击的按钮的id
      this.list.splice(btnId, 1)

    }
  },
  created () {
    this.requestData()
  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0px;
    border-color: grey;
    border: 1px solid #aaa;
  }

  th {
    vertical-align: baseline;
    padding: 5px 15px 5px 6px;
    background-color: #3F3F3F;
    border: 1px solid #3F3F3F;
    text-align: center;
    color: #fff;
  }

  td {
    border: 1px solid #3F3F3F;
    padding: 5px 15px 5px 6px;
    text-align: center;
  }

  button {
    border-radius: 6px;
    border: 1px solid #3F3F3F;
    padding: 1px 4px;
    text-align: center;
  }

  input {
    float:left;
    width:200px;
    border: 1px solid #3F3F3F;
    padding: 3px;
  }

</style>
