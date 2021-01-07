import React from 'react';
import Bar from './bar';
import { makeStyles, withTheme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { LoginButton } from './login';

const useStyles = makeStyles((theme) => ({
    bodyContainer: {
        position: 'relative',
        height: '50%',
        opacity: '70%',
    },
    homeBody: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '40%'
    },
    title: {
        color: 'white',
        paddingBottom: '15px'
    },
    description: {
        color: 'white',
        fontSize: '100%',
        paddingBottom: '30px'
    }
}));

const Home = (props) => {
    const classes = useStyles();

    return (
        <div className="Root" >
            <Bar />
            <div className={ classes.bodyContainer }>
                <div className={ classes.homeBody }>
                    <Typography variant='h1' className={ classes.title }>
                        HARMON.NY
                    </Typography>
                    <Typography variant='body1' className={ classes.description }>
                        Your Friends know you well, maybe too well... <br/>Surely not everything about you, but just enough? 
                        I'm sure you like music and I'm sure your friends know that about you. 
                        God Damnit! Just get them to do this quiz about you, I'm done with the Exposition.
                    </Typography>
                    <LoginButton /> 
                </div>
                
            </div>
        </div>
    );
}

export default Home;
