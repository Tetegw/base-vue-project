import TYPE from './mutations-type.js'
const mutations = {
  [TYPE.ADD_COUNT] (state, pyload) {
    state.count++
  },
  [TYPE.INPUT_NAME] (state, pyload) {
    state.name = pyload
  }
}

export default mutations