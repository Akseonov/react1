import React, { useEffect } from "react";
import Todos from "./todos";
import { useDispatch, useSelector } from "react-redux";
import { todosThunk } from "../../../store/reducers/todosReducer";
import {
    loadingSelector,
    todosSelector,
    errorSelector
} from "../../../store/reducers/todosReducer/selectors";

const TodosContainer = () => {
    const dispatch = useDispatch();
    const todos = useSelector( todosSelector );
    const loading = useSelector( loadingSelector );
    const error = useSelector( errorSelector );
    console.log(todos);
    console.log(loading);

    const onLoadTodos = () => {
        dispatch( todosThunk() );
    }

    useEffect( () => {
        dispatch( todosThunk() );
    }, [] );

    return (
        <Todos
            todos={todos}
            loading={loading}
            onLoadTodos={onLoadTodos}
            error={error}
        />
    );
}

export default TodosContainer;
