import { CHANGE_IS_CHECKED } from "../actions/profileAction";

export const changeCheckboxAction = (event) => {
	return {
		type: CHANGE_IS_CHECKED,
		payload: event.target.checked,
	}
}
