import initialState from "../initials-state/initial-state"


const getInitialState = () => {
  let data = []
  const localStorageData = JSON.parse(localStorage.getItem('data'))
  if (localStorageData && localStorageData.length > 0) {
    data = localStorageData
  } else {
    data = initialState
  }
  return data
}

export default getInitialState;