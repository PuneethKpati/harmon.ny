import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
const Callback = (props) => {
    
    /* const [resp, setResp] = useState(''); */
    const [code, setCode] = useState(qs.parse(props.location.search, { ignoreQueryPrefix: true }).code); 

    useEffect(() => {
        
        if (code !== undefined) {
            axios
            .post('http://localhost:5050/login/access_token', {'redirect_uri':'http://localhost:3000/callback', 'code':code, 'grant_type':'authorization_code'})
            .then((res) => {
            console.log(res.data)
            })
        }
        
    });

    return (
        <div>
            callback
        </div>
    );
}

export default Callback;