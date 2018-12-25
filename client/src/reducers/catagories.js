import axios from 'axios'

const CATAGORIES = 'CATAGORIES'
const ADD_CATAGORY = 'ADD_CATAGORY'
const UPDATE_CATAGORY = 'UPDATE_CATAGORY'
const DELETE_CATAGORY = 'DELETE_CATAGORY'

export const getCatagories = () => {
  return (dispatch) => {
    axios.get('/api/catagories')
      .then( res => dispatch({ type: CATAGORIES, catagories: res.data }))
  }
}

export const addCatagory = (catagory) => {
  return (dispatch) => {
    axios.post('/api/catagories', {catagory} )
      .then( res => dispatch({ type: ADD_CATAGORY, catagory: res.data }) )
  }
}

export const updateCatagory = (catagory) => {
  return (dispatch) => {
    axios.put(`/api/catagories/{$catagory.id}`, {catagory} )
      .then( res => dispatch({ type: UPDATE_CATAGORY, app: res.data }))
  }
}

export const deleteCatagory = (id) => {
  return (dispatch) => {
    axios.delete(`/api/catagories/${id}`)
      .then( () => dispatch({ type: DELETE_CATAGORY, id }))
  }
}

export default (state = [], action ) => {
  switch(action.type) {
    case CATAGORIES:
      return action.CATAGORIES
    case ADD_CATAGORY:
      return [action.catagory, ...state]
    case UPDATE_CATAGORY:
      return state.map( c => {
        if (c.id === action.catagory.id)
          return action.catagory
          return c
      })
    case DELETE_CATAGORY:
      return state.filter( c => c.id !== action.id )
    default:
      return state;
  }
}