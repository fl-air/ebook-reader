import React, {useContext, useState} from "react";
import moment from 'moment'
import {DayPickerRangeController, isInclusivelyBeforeDay} from "react-dates";
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import {FilterContext} from "../context/FilterContext";

function DateFilter(props) {
    const {state, dispatch} = useContext(FilterContext);

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState("startDate");

    return (
        <DayPickerRangeController
            startDate={startDate}
            endDate={endDate}
            // 모름
            onDatesChange={({startDate, endDate}) => {
                setStartDate(startDate);
                setEndDate(endDate);
                dispatch({type: 'date', payload: {checkIn: startDate, checkOut: endDate}});
            }
            }
            // 모름
            focusedInput={focusedInput}
            // 모름
            onFocusChange={focusedInput => {
                setFocusedInput(focusedInput || "startDate");
            }}
            // 지난 날짜 disable
            isOutsideRange={day => isInclusivelyBeforeDay(day, moment().add(-1, 'days'))}
            // 2달 씩 표시
            numberOfMonths={2}
        />
    );
}

export default DateFilter;