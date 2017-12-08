import {getSliderImages} from '../services/collectionsService'

const LIST_SLIDER_IMAGES = 'LIST_SLIDER_IMAGES'

const state = {
  sliderImages: []
}

const getters = {
  sliderImagesStatus: state => state.sliderImages
}

const mutations = {
  [LIST_SLIDER_IMAGES] (state, sliderImages) {
    state.sliderImages = sliderImages
  }
}

const actions = {
  listSliderImages ({ commit }) {
    const sliderImages = getSliderImages()
    commit(LIST_SLIDER_IMAGES, sliderImages)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
