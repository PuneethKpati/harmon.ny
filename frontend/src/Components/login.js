import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const LoginIcon = (props) => {
    return (
        <div>
            <IconButton 
            size='Medium' 
            href='https://accounts.spotify.com/authorize?response_type=code&client_id=c040d3bbb7854c27a1e4ca23de239e5e&redirect_uri=http://localhost:3000/callback' 
            color='inherit'>
                <AccountCircleIcon fontSize='large'>add_circle</AccountCircleIcon>
            </IconButton>
            
        </div>
    );
}

export default LoginIcon;