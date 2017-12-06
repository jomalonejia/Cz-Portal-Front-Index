const TOGGLE_MENU = 'TOGGLE_MENU'

const state = {
  menuToggle: false
}

const getters = {
  menuToggleStatus: state => state.menuToggle
}

const mutations = {
  [TOGGLE_MENU] (state) {
    state.menuToggle = !state.menuToggle
  }
}

const actions = {
  toggleMenu ({ commit }) {
    commit(TOGGLE_MENU)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
