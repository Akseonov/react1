import React, { useEffect } from "react";
// import Todos from "./todos";
import { useDispatch, useSelector } from "react-redux";
import { todosThunk } from "../../../store/reducers/todosReducer";

import {
    loadingSelector,
    todosSelector,
    errorSelector
} from "../../../store/reducers/todosReducer/selectors";

const Todos = require( './todos' );

const TodosContainer = () => {
    const dispatch = useDispatch();
    const todos = useSelector( todosSelector );
    const loading = useSelector( loadingSelector );
    const error = useSelector( errorSelector );

    const onLoadTodos = () => {
        dispatch( todosThunk() );
    }

    useEffect( () => {
        dispatch( todosThunk() );
    }, [ dispatch ] );

    return (
        <Todos
            todos={ todos }
            loading={ loading }
            onLoadTodos={ onLoadTodos }
            error={ error }
        />
    );
}

export default TodosContainer;
