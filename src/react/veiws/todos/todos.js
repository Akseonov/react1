import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Button from "@mui/material/Button";

const Todos = ( { todos, loading, onLoadTodos, error } ) => {
    if ( loading ) {
        return (
            <div className="container">
                <CircularProgress color="primary" />
            </div>
        )
    }

    if ( error ) {
        return (
            <div className="container">
                <h3>Произошла ошибка</h3>
                <Button onClick={onLoadTodos} variant="outlined">Загрузить данные</Button>
            </div>
        )
    }

    return (
        <>
            <div className="container">
                {
                    todos.map( todo => <div key={todo.id}>
                        <h3 className="h3">{todo.title}</h3>
                    </div> )
                }
            </div>
        </>
    );
}

export default Todos;
