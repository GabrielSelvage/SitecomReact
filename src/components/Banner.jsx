import React from 'react';
import {makeStyles} from '@material-ui/core';
import banner from "../img/BANNER.png";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme)=>({
    root: {
        height: '100vh',
        marginTop: '-140px',
        maxWidth: '100%',
        position: 'static'
    },
    text: {
        marginLeft: '160px',
        marginTop: '-300px'
    }
}));

function Banner() {
    const classes= useStyles();
        return(
            <div>
            <div style={{backgroundImage: `url(${banner})`}} className= {classes.root}></div>
                    <div className= {classes.text}>
                        <h1 style= {{color: '#d9d0c0', fontSize: '40px'}}>Advocacia e Consultoria</h1>
                        <p style= {{color: '#ffffff'}}>Oferecemos assessoria e consultoria jurídica especializada</p>
                        <Button variant="contained" style= {{color: '#ffffff', backgroundColor: '#a26e4b'}} disableElevation>Entre em Contato</Button>
                    </div>
            </div>
        )
    }

export default Banner