import React from 'react';
import {useQuery} from 'react-query'

const LiveTable = () => {
    const {data:live,isloading} = useQuery('live',() => fetch('http://localhost:5000/lives').then(res=>res.json()))
    return (
        <div>
            <h1>{live.length}</h1>
        </div>
    );
};

export default LiveTable;