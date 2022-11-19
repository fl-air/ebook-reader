
import React from 'react';
import {Link} from 'react-router-dom';
import queries from '../graphql/queries';
import {useQuery} from '@apollo/react-hooks';

function User() {
    const {loading, error, data} = useQuery(queries.getUsers);
