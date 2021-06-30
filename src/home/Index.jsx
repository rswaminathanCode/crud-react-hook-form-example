import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>CRUD example - React project structure using react hook form</h1>
            <p>An example webapp to show grid data, add, edit and delete user records with React and the React Hook Form library.</p>
            <p><Link to="users">&gt;&gt; Manage Users</Link></p>
        </div>
    );
}

export { Home };