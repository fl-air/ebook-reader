
import React, {useContext, useEffect, useState} from 'react';
import style from '../stylesheet/FilterButton.module.css';
import {Button, Modal} from 'react-bootstrap';
import {FilterContext} from "./context/FilterContext";
import {QueryContext} from "./context/QueryContext";
import client from "../apollo/apolloClient";
import {getProperQuery, getProperQueryParameter, getProperQueryResult} from "../utils/queryUtils";
import {getModalTitle} from '../utils/modalUtils';
import isEqual from "react-fast-compare";

function FilterButton(props) {
    // state
    const {state, dispatch, initData} = useContext(FilterContext);
    const {queryState, queryDispatch} = useContext(QueryContext);
    const [filterType, setFilterType] = useState(props.filtertype);
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState(filterType);

    const deleteFilterValue = () => {
        dispatch({type: 'init', payload: 'hello'});
    };

    const triggerQuery = () => {
        setShow(false);
        // 쿼리 수행
        client.query({
            query: getProperQuery(filterType),
            variables: getProperQueryParameter(filterType, state)