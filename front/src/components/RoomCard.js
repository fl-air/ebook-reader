
import React from 'react';
import StarRate from './StarRate';
import style from '../stylesheet/RoomCard.module.css';

function RoomCard(props) {

    function book() {
        alert('book!');
    }

    return (
        <>
            <section style={style} className={style.CardContainer}>
                <section className={style.thumbnailContainer}>
                    <img src={props.image} alt={"thumbnail"} className={style.thumbnail}/>
                </section>
                <section className={style.roomInfoContainer}>
                    <h3 className={"room-title"}>{props.title}</h3>
                    <span className={"room-options"}>options : {props.options}</span>
                    <StarRate rate={3.5}/>
                    <button onClick={book}>book</button>
                </section>
            </section>
        </>
    );
}

export default RoomCard;