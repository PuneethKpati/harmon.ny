import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

const Callback = (props) => {
    
    const [resp, setResp] = useState('');
    const [code, setCode] = useState(qs.parse(props.location.search, { ignoreQueryPrefix: true }).code); 
    const [error, setError] = useState(qs.parse(props.location.search, { ignoreQueryPrefix: true }).error);

    useEffect(() => {
        if (code !== undefined) {
            axios
            .post('http://localhost:5050/authorization/access_token', {'redirect_uri':'http://localhost:3000/callback', 'code':code, 'grant_type':'authorization_code'})
            .then((res) => {
            console.log(res.data)
            setResp(res.data)
            })
        }
        
    });

    return (
        <div>
            {
                error !== undefined && 
                <Redirect to='/' />
            }
            {resp['error']}
        </div>
    );
}

export default Callback;