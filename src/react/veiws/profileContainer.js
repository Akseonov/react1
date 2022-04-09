import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getIsChecked } from "../../store/reducers/profileReducer/selectors";
import Profile from "./profile";

const ProfileContainer = () => {
    const check = useSelector( getIsChecked, shallowEqual );
    const dispatch = useDispatch();

    const changeCheckbox = event => {
        return dispatch( { type: 'changeIsChecked', payload: event.target.checked });
    };

    return (
        <Profile
            changeCheckbox={changeCheckbox}
            check={check}
        />
    );
};

export default ProfileContainer;
