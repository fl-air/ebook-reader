import React, {useContext} from 'react';
import {FilterContext} from "../context/FilterContext";
import style from '../../stylesheet/CapacityFilter.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'

function CapacityFilter() {
    const {state, dispatch} = useContext(FilterContext);

    function dispatchAdult(gap) {
        return () => dispatch({type: 'adult', payload: gap});
    }

    function dispatchTeenager(gap) {
        return () => dispatch({type: 'teenager', payload: gap});
    }

    function dispatchToddler(gap) {
        return () => dispatch({type: 'toddler', payload: gap});
    }

    return