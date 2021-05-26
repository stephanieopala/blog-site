import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="not-found">
            <h1>Sorry</h1>
            <p>That page cannot be found</p>
            <Link to="/">Back to homepage...</Link>
        </div>
    )
}

export default NotFound;
