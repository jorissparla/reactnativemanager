import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS} from '../actions/types'

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
}

export default (state=INITIAL_STATE, action ) => {
  switch (action.type) {
    case EMPLOYEE_CREATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
  
    default:
      return state
  }
}