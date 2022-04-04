import React, {useEffect} from "react";
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from "react-redux";
import { shallowEqual } from "react-redux";
import { getIsChecked } from "../../store/reducers/profileReducer/selectors";

const Profile = () => {
    const check = useSelector( getIsChecked, shallowEqual );
    const dispatch = useDispatch();

    useEffect( () => {
        console.log( check );
    }, [] )

    const changeCheckbox = event => {
        return dispatch( { type: 'changeIsChecked', payload: event.target.checked });
    }

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
