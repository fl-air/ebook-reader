import React, {useContext} from 'react';
import {FilterContext} from "../context/FilterContext";
import style from '../../stylesheet/CapacityFilter.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'

function CapacityFilter() {
    const {state, dispatch} = 