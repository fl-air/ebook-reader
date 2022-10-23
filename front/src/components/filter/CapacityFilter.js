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

    return (
        <div style={style}>
            <section className={style.itemContainer}>
                <span>adult</span>
                <div className={style.controllerContainer}>
                    <FontAwesomeIcon icon={faPlus} size={'lg'} onClick={dispatchAdult(1)}/>
                    {state.adult}
                    <FontAwesomeIcon icon={faMinus} size={'lg'} onClick={dispatchAdult(-1)}/>
                </div>
            </section>
            <section className={style.itemContainer}>
                <span>teenager</span>
                <div className={style.controllerContainer}>
                    <FontAwesomeIcon icon={faPlus} size={'lg'} onClick={dispatchTeenager(1)}/>
                    {state.teenager}
                    <FontAwesomeIcon icon={faMinus} size={'lg'} onClick={dispatchTeenager(-1)}/>
                </div>
            </section>
            <section className={style.itemContainer}>
                <span>toddler</span>
                <div className={style.controllerContainer}>
                    <FontAwesomeIcon icon={faPlus} size={'lg'} onClick={dispatchToddler(1)}/>
                    {state.toddler}
                    <FontAwesomeIcon icon={faMinus} size={'lg'} onClick={dispatchToddler(-1)}/>
                </div>
            </section>
        </div>
    );
}

export default CapacityFilter;