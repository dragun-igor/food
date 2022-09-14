import React from 'react'
import { useParams, useNavigate, useRouteMatch, useLocation } from 'react-router-dom';

function Movie() {
    const { title } = useParams();
    const navigate = useNavigate();

    return <h1>Some movie {title}
    <button className='btn' onClick={() => navigate(-1)}>Назад</button>
    </h1>
}

export { Movie }