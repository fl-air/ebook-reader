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

    return (
        <>
            <Slider
                style={style}
                className={style.PriceSlider}
                value={[state.minPrice, state.maxPrice]}
                min={initPrice[0]}
                max={initPrice[1]}
                marks={true}
                step={1000}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
            <input type={'number'} value={state.minPrice} onChange={handleOneChange(true)}/>
            ~
            <input type={'number'} value={state.maxPrice} onChange={handleOneChange(false)}/>
        </>
    );
}

export default PriceFilter;