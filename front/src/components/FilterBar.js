import React, {useContext, useReducer} from 'react';
import FilterButton from "./FilterButton";
import style from '../stylesheet/FilterBar.module.css';
import {FilterContext} from "./context/FilterContext";
import {QueryContext} from "./context/QueryContext";
import dateFilterReducerWrapper from '../utils/dateFilterReducer';
import capacityFilterReducerWrapper from "../utils/capacityFilterReducer";
import priceFilterReducerWrapper from "../utils/priceFilterReducer";
import DateFilter from "./filter/DateFilter";
import CapacityFilter from "./filter/CapacityFilter";
import PriceFilter from "./filter/PriceFilter";


function FilterBar() {
    // 쿼리 결과를 공유하기 위해 QueryContext를 사용한다
    const {state, dispatch} = useContext(QueryContext);
    // 필터 별 리듀서를 사용한다
    const {initialDate, dateFilterReducer} = dateFilterReducerWrapper(dispatch);
    const [dateFilterState, dateFilterDispatch] = useReducer(dateFilterRed