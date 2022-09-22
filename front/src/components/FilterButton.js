
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
        })
            .then(result => {
                // 쿼리 수행 후 queryDispatch를 이용해 queryState를 업데이트
                queryDispatch({type: 'update', payload: getProperQueryResult(filterType, result)});
            })
            .catch(error => {
                console.error(error);
                queryDispatch({type: 'init'});
            })
    };
    const showModal = () => setShow(true);
    const noShowModal = () => setShow(false);

    // effect
    useEffect(() => {
        if (!isEqual(state, initData)) setTitle(getModalTitle(filterType, state));
        else setTitle(filterType);
    }, [state]);

    return (
        <>
            <button style={style} className={style.FilterButton} onClick={showModal}>{title}</button>

            <Modal show={show} onHide={triggerQuery} animation={true} size={'lg'}>
                <Modal.Header closeButton>
                    <Modal.Title>{filterType}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.children}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={deleteFilterValue}>
                        delete
                    </Button>
                    <Button variant="primary" onClick={triggerQuery}>
                        save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FilterButton;