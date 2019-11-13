import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { fetch, counter } from '../reducers'
// import reducers from '../reducers/combine'

const store = initialState => {
  return createStore(
    fetch,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}

export default store
