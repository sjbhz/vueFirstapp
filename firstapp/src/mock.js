const Mock = require('mockjs')
const Random = Mock.Random

const produceNewsData = function () { // mock一组数据
  let list = []
  for (let i = 0; i < 20; i++) {
    let newArticleObject = {
      node: i + 1,
      title: Random.csentence(5, 30), // Random.csentence( min, max )
      name: Random.cname(), // 随机生成一个常见的中文姓名
      date: Random.date()
    }
    list.push(newArticleObject)
  }
  return {
    data: list
  }
}
// 拦截ajax请求，配置mock的数据
Mock.mock('/api/list', 'get', produceNewsData)
