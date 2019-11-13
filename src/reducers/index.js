import {
  INCREMENT, DECREMENT, SHOW, TOKEN, ACTIVE, HISANA, PUBLIC, COMPETITOR,
  NONCOMPETITOR, NONFACTORPUBLIC, RECOMMENDATION
} from '../constants'

// const initialState = {
//   value: 0,
//   action: null,
//   from: null
// }

// export const counter = (state = initialState, action) => {
//   console.log(state, "CHECK STATE COUNTER")
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         value: state.value + 1,
//         action: 'increment',
//         from: action.from
//       }

//     case DECREMENT:
//       return {
//         ...state,
//         value: state.value - 1,
//         action: 'decrement',
//         from: action.from
//       }

//     default:
//       return state
//   }
// }
const initialState = {
  token: null,
  activeButton: null,
  hisanaStatus: false,
  competitorStatus: false,
  publicStatus: false,
  nonCompetitorStatus: false,
  nonFactorPublicStatus: false,
  recommendStatus: false,

}

export const fetch = (state = initialState, action) => {
  console.log(state, "CHECK STATE");
  switch (action.type) {
    case TOKEN:
      return {
        ...state,
        token: action.token
      }

    case ACTIVE:
      return {
        ...state,
        activeButton: action.activeButton

      }

    case HISANA:
      return {
        ...state,
        hisanaStatus: !(state.hisanaStatus)
      }

    case PUBLIC:
      return {
        ...state,
        publicStatus: !(state.publicStatus)
      }

    case NONFACTORPUBLIC:
      return {
        ...state,
        nonFactorPublicStatus: !(state.nonFactorPublicStatus)
      }

    case COMPETITOR:
      return {
        ...state,
        competitorStatus: !(state.competitorStatus),
      }

    case NONCOMPETITOR:
      return {
        ...state,
        nonCompetitorStatus: !(state.nonCompetitorStatus)
      }

    case RECOMMENDATION:
      return {
        ...state,
        recommendStatus: !(state.recommendStatus)
      }

    default:
      return state
  }
}
