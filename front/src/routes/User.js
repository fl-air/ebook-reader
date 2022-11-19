
import React from 'react';
import {Link} from 'react-router-dom';
import queries from '../graphql/queries';
import {useQuery} from '@apollo/react-hooks';

function User() {
    const {loading, error, data} = useQuery(queries.getUsers);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const result = data.getUsers.map(user => <li key={user.id}>{user.id}, {user.facebookId}, {user.displayName}</li>);

    return (
        <>
            <h1>User</h1>
            <Link to="/">Home</Link>
            <Link to="/user/1">User 1</Link>
            <ul>
                {result}
            </ul>

        </>
    );
}

export default User;