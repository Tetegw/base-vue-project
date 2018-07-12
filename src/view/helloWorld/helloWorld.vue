<template>
  <div class="hello">
    <div>下面测试vuex的mutations</div>
    <div>
      数字：{{count}}
      <button class="btn" @click="add">+</button>
    </div>
    <div>
      请输入姓名：<input type="text" @input="inputChange"> {{name}}
    </div>
    <br>
    <br>
    <br>
    <div>下面测试action, 一次性设置两个mutations</div>
    <button class="btn" @click="setAll">action</button>
    <br>
    <br>
    <br>
    <div>
      请求接口，注意看控制台打印
      <button @click="ajax">请求</button>
    </div>
  </div>
</template>

<script>
import { getList } from '../../api/first.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    name () {
      return this.$store.state.name
    }
  },
  methods: {
    add () {
      this.$store.commit('add_count')
    },
    inputChange (e) {
      this.$store.commit('input_name', e.target.value)
    },
    setAll () {
      this.$store.dispatch('setAll', '孙晨')
    },
    ajax () {
      getList().then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<!-- "scoped" 属性限制css只在该模块使用 -->
<!-- lang="less" 支持Less预处理css -->
<style scoped lang="less">
.hello {
  h1 {
    color: #666;
  }
  .btn {
    width: 100px;
    height: 30px;
    border: 1px solid #666;
  }
}
</style>
