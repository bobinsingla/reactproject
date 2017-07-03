import axios from "axios";

export function fetchCustomers() {
  return function(dispatch){
    dispatch({type: "FETCH_CUSTOMERS"});
    axios.get("http://localhost:8000/api/v1/customer")
    .then((res) => {
      dispatch({type: "FETCH_CUSTOMERS_SUCCESS", payload: res.data })
    })
    .catch((err) => {
      dispatch({type: "FETCH_CUSTOMERS_FAIL", payload: err})
    })
  }
}

