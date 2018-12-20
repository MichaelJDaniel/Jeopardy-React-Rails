import axios from 'axios'

const CATAGORYS = 'CATAGORYS'
const ADD_CATAGORY = 'ADD_CATAGORY'
const UPDATE_CATAGORY = 'UPDATE_CATAGORY'
const DELETE_CATAGORY = 'DELETE_CATAGORY'

export const getCatagorys = () => {
  return (dispatch) => {
    axios.get('/api/catagorys')
      .then( res => dispatch({ type: CATAGORYS, catagorys: res.data }))
  }
}

export const addCatagory = (catagory) => {
  return (dispatch) => {
    axios.post('/api/catagorys', {catagory} )
      .then( res => dispatch({ type: ADD_CATAGORY, catagory: res.data }) )
  }
}

export const updateCatagory = (catagory) => {
  return (dispatch) => {
    axios.put(`/api/catagorys/${$catagory.id}`, {catagory} )
      .then( res => dispatch({ type: UPDATE_CATAGORY, app: res.data }))
  }
}

export const deleteCatagory = (id) => {
  return (dispatch) => {
    axios.delete(`/api/catagorys/${id}`)
      .then( () => dispatch({ type: DELETE_CATAGORY, id }))
  }
}

export default (state = [], action ) => {
  switch(action.type) {
    case CATAGORYS:
      return action.CATAGORYS
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