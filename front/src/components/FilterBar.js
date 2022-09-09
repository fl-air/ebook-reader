import React, {useContext, useReducer} from 'react';
import FilterButton from "./FilterButton";
import style from '../stylesheet/FilterBar.module.css';
import {FilterContext} from "./context/FilterContext";
import {QueryContext} from "./context/QueryContext";
import dateFilterReducerWrapper from '../utils/dateFilterReducer