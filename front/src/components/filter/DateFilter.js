import React, {useContext, useState} from "react";
import moment from 'moment'
import {DayPickerRangeController, isInclusivelyBeforeDay} from "react-dates";
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import {FilterContext} from "../context/FilterContext";

function DateFilter(props) {
    const {state, dispatch} = useContext(FilterContext);

    co