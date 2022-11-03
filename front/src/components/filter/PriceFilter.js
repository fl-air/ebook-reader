import React, {useContext, useState} from 'react';
import {Slider} from '@material-ui/core';
import style from '../../stylesheet/PriceFilter.module.css';
import {FilterContext} from "../context/FilterContext";

function PriceFilter(props) {
    const {state, dispatch} = useContext(FilterContext);
    const ini