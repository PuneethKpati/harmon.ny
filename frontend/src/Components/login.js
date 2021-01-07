import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';

const LoginIcon = ({style}) => {
    return (
        <div>
            <IconButton 
            size='medium' 
            href='https://accounts.spotify.com/authorize?response_type=code&client_id=c040d3bbb7854c27a1e4ca23de239e5e&redirect_uri=http://localhost:3000/callback' 
            color='inherit'>
                <AccountCircleIcon fontSize='large' style={style}>

                </AccountCircleIcon>
            </IconButton>
            
        </div>
    );
}

export const LoginButton = () => {
    return (
        <div>
            <Button 
            variant='contained' 
            style={{color:'white', backgroundColor: '#086213', borderCollapse: '#086213', fontSize: '100%', fontStyle:'bold'}}
            href='https://accounts.spotify.com/authorize?response_type=code&client_id=c040d3bbb7854c27a1e4ca23de239e5e&redirect_uri=http://localhost:3000/callback'>
                Login With Spotify 
                <LockOpenIcon />
            </Button>
        </div>
    )
};

export default LoginIcon;

