import {
  FETCH_IMAGE,
  LOADING_IMAGE,
  ERROR_IMAGE,
  FETCH_IMAGEPROFILE
} from './actionType'

const initialState = {
  loading: false,
  error: false,
  content: [],
  profileContent :{}
}

const reducers = (state={...initialState}, action) => {
  switch (action.type) {
    case FETCH_IMAGE :
      return {
        ...state,
        content: action.payload,
        loading: false
      }
    case FETCH_IMAGEPROFILE :
      return {
        ...state,
        profileContent: action.payload,
        loading: false
      }
    case LOADING_IMAGE :
    return {
      ...state,
      loading: true
    }
    case ERROR_IMAGE : 
    return {
      ...state,
      loading: false,
      error: true
    }
    default:
     return state
  }
}

export default reducers