import axios from 'axios'
import {FETCH_IMAGE, LOADING_IMAGE, ERROR_IMAGE} from './actionType'

export const loadImage = (payload) => {
  return dispatch => {
    dispatch(loadImageLoading())
    axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=1286359828.1677ed0.0558626316784be58818b75dfc95743a')
    .then(resp=>dispatch(loadImageSuccess(resp.data.data)))
    .catch(err=>dispatch(loadImageError()))
  }
}

const loadImageSuccess = (payload) => ({
  type: FETCH_IMAGE,
  payload: payload
})

const loadImageLoading = () => ({
  type: LOADING_IMAGE
})

const loadImageError = () => ({
  type: ERROR_IMAGE
})