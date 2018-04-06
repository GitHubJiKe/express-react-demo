var Mock = require('mockjs');
const { Random } = Mock;


const makeReturnObj = (type = true, option) => {
  if (type) {
    return {
      ...option,
      success: true,
      code: 200
    }
  } else {
    return {
      data: null,
      ...option,
      code: 300,
      success: false
    }
  }
}



const mockUsers = () => {
  return Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'users|30-50': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      'name|1': [Random.name(), Random.name(), Random.name(), Random.name(), Random.name()],
      'age|+1': Random.natural(20, 50),
      'location|1': [Random.province(), Random.province(), Random.province(), Random.province(), Random.province()],
      'hobbys': ["sport", "reading", "coding"]
    }]
  }).users;
}

module.exports = {
  makeReturnObj,
  mockUsers
}
