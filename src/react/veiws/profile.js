import React from "react";
import Checkbox from '@mui/material/Checkbox';

const Profile = ( { changeCheckbox, check } ) => {
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
