import axios from "axios";

export function fetchQuestions() {
  return function(dispatch) {
    dispatch({type: "FETCH_QUESTIONS"});
    
    /* 
      http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
      If you get console errors due to bad data:
      - change "reacttest" below to any other username
      - post some tweets to http://rest.learncode.academy/api/yourusername/tweets
    */
    axios.get("http://rest.learncode.academy/api/reacttest/tweets")
      .then((response) => {
        dispatch({type: "FETCH_QUESTIONS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_QUESTIONS_REJECTED", payload: err})
      })
  }
}

export function addQuestion(id, text) {
  return {
    type: 'ADD_QUESTION',
    payload: {
      id,
      text,
    },
  }
}

