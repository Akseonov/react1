import React, {useEffect} from "react";
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
    const check = useSelector( state => state.isChecked );
    const dispatch = useDispatch();

    useEffect( () => {
        console.log( check );
    }, [] )

    const changeCheckbox = event => {
        return dispatch( { type: 'changeIsChecked', payload: event.target.checked });
    }

    return (
        <>
            <h1>Профиль</h1>
            <Checkbox
                checked={ check }
                onChange={ (event) => changeCheckbox(event) } />
        </>
    );
};

export default Profile;
