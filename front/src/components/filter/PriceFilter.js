import React, {useContext, useState} from 'react';
import {Slider} from '@material-ui/core';
import style from '../../stylesheet/PriceFilter.module.css';
import {FilterContext} from "../context/FilterContext";

function PriceFilter(props) {
    const {state, dispatch} = useContext(FilterContext);
    const initPrice = [0, 100000];
    const [priceState, setPriceState] = useState(initPrice);

    function valuetext(value) {
        return `${value}₩`;
    }

    function handleChange(e, newValue) {
        setPriceState(newValue);
        dispatch({type: 'price', payload: newValue});
    }

    function handleOneChange(flag) {
        return flag ?
            (e) => setPriceState([parseInt(e.target.value, 10), priceState[1]])
            :
            (e) => setPriceState([priceState[0], parseInt(e.target.value, 10)]);
    }

   