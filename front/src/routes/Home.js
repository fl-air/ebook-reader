import React, {useReducer} from 'react';
import {Link} from 'react-router-dom';
import {useQuery} from "@apollo/react-hooks";
import queries from "../graphql/queries";
import {QueryContext} from '../components/context/QueryContext';
import {initialQuery, queryReducer} from "../utils/queryReducer";
import FilterBar from "../components/FilterBar";
import RoomCardList from '../components/RoomCardList'

function Home() {
    const [queryState, queryDispatch] = useReducer(queryReducer, 