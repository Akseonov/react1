import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getIsChecked } from "../../../store/reducers/profileReducer/selectors";
import Profile from "./profile";
import { changeCheckboxAction } from "../../../store/actionCreators/prodileActions";

const ProfileContainer = () => {
    const check = useSelector( getIsChecked, shallowEqual );
    const dispatch = useDispatch();

    const changeCheckbox = event => {
        return dispatch( changeCheckboxAction( event ) );
    };

    return (
        <Profile
            changeCheckbox={ changeCheckbox }
            check={ check }
        />
    );
};

export default ProfileContainer;
