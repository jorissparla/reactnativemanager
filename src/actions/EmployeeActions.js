import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS} from './types'

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value}
  }
}

export const employeeCreate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_CREATE,
    payload: { prop, value}
  }
}