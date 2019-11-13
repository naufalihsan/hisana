import {
  INCREMENT, DECREMENT, SHOW, TOKEN, ACTIVE, HISANA, PUBLIC, COMPETITOR, NONCOMPETITOR,
  AUTHENTICATE, API_AUTHENTICATION, NONFACTORPUBLIC, RECOMMENDATION
} from '../constants'

export const increment = (isServer) => {
  return dispatch => {
    dispatch({
      type: INCREMENT,
      from: isServer ? 'server' : 'client'
    })
  }
}

export const decrement = (isServer) => {
  return dispatch => {
    dispatch({
      type: DECREMENT,
      from: isServer ? 'server' : 'client'
    })
  }
}

export const show = (location) => {
  return dispatch => {
    dispatch({
      type: SHOW,
      location: location

    })
  }
}

export const token = (token) => {
  return dispatch => {
    dispatch({
      type: TOKEN,
      token: token
    })
  }
}


export const activeButton = (activeButton) => {
  return dispatch => {
    dispatch({
      type: ACTIVE,
      token: activeButton
    })
  }
}


export const hisanaStatus = () => {
  return dispatch => {
    dispatch({
      type: HISANA
    })
  }
}


export const publicStatus = () => {
  return dispatch => {
    dispatch({
      type: PUBLIC
    })
  }
}


export const nonFactorPublicStatus= () => {
  return dispatch => {
    dispatch({
      type: NONFACTORPUBLIC,
    })
  }
}


export const competitorStatus = () => {
  return dispatch => {
    dispatch({
      type: COMPETITOR,
    })
  }
}

export const nonCompetitorStatus = () => {
  return dispatch => {
    dispatch({
      type: NONCOMPETITOR,
    })
  }
}

export const recommendStatus = () => {
  return dispatch => {
    dispatch({
      type: RECOMMENDATION,
    })
  }
}
