
import React from 'react';
import RoomCard from '../components/RoomCard';
import style from '../stylesheet/RoomCardList.module.css';

function RoomCardList(props) {
    const result = props.rooms.map(room => <RoomCard key={room.id} id={room.id} image={room.image} title={room.title}
                                                     options={room.options}/>);

    return (
        <>
            <ul style={style} className={style.RoomCardList}>
                {result}
            </ul>
        </>
    );
}

export default RoomCardList;