import React, {useEffect} from "react";
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getIsChecked } from "../../store/reducers/profileReducer/selectors";

const Profile = () => {
    const check = useSelector( getIsChecked, shallowEqual );
    const dispatch = useDispatch();

    const changeCheckbox = event => {
        return dispatch( { type: 'changeIsChecked', payload: event.target.checked });
    };

    return (
        <>
            <div className="container">
                <h1>Профиль</h1>
                <Checkbox
                    checked={ check }
                    onChange={ (event) => changeCheckbox(event) } />
            </div>
        </>
    );
};

export default Profile;
