// actions用于一次性操作多个mutations，或者操作异步的mutations
const actions = {
  setAll ({ commit }, payload) {
    commit('add_count')
    commit('input_name', payload)
  }
}

export default actions