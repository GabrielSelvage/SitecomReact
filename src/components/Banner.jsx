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
        marginTop: '-450px',
        marginRight: '770px'
    }
}));

function Banner() {
    const classes= useStyles();
        return(
            <div>
            <div style={{backgroundImage: `url(${banner})`}} className= {classes.root}></div>
                    <div className= {classes.text}>
                        <h1 
                        style= {{color: '#d9d0c0', 
                        fontSize: '60px', 
                        fontFamily: "SOURCE SANS PRO BLACK",
                        lineHeight: '50px',
                        }}
                        >Advocacia & Consultoria</h1>
                        <p style= {{color: '#ffffff', 
                        fontFamily: "SOURCE SANS PRO LIGHT",
                        fontSize: '20px',
                        marginTop: '-20px'
                        }}
                        >Oferecemos assessoria e consultoria jurídica especializada</p>
                        <Button variant="contained" 
                        style= {{color: '#ffffff', 
                        backgroundColor: '#a26e4b', 
                        fontFamily: "SOURCE SANS PRO BOLD", 
                        fontSize: '10px', 
                        paddingLeft: '30px', 
                        paddingRight: '30px',
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        borderRadius: '0px',
                        }} 
                        disableElevation>Entre em Contato</Button>
                    </div>
            </div>
        )
    }

export default Banner