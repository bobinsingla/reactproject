export default function reducer(state={
  customers: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case "FETCH_CUSTOMERS": {
      return {...state, fetching: true}
    }
    case "FETCH_CUSTOMERS_FAIL": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_CUSTOMERS_SUCCESS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        customers: action.payload,
      }
    }
  }
  return state
}
