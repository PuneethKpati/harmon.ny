import React from 'react';
import Bar from './bar';
import background from '../res/Background2.png';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';;

const useStyles = makeStyles(() => ({
    back: {
        backgroundImage : `url(${background})`,
        position: 'fixed',
        width: '100%',
        height:'100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
}));

const Login = (props) => {
    const classes = useStyles();

    return (
        <div className="Root" >
            <Bar />
            <header >
                <Button
                endIcon={<LockOpenRoundedIcon />}
                variant="contained"
                target="_top"
                colour="#086213"
                href="https://accounts.spotify.com/authorize?response_type=code&client_id=c040d3bbb7854c27a1e4ca23de239e5e&redirect_uri=http://localhost:3000/callback"
                >
                Login With Spotify
                </Button>
            </header>
            
        </div>
    );
}

export default Login;
