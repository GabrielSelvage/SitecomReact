import React, {Component} from "react";
import {createMuiTheme, makeStyles} from '@material-ui/core';
import Bar from '../../components/Bar';
import Bar2 from '../../components/Bar2';
import Banner from '../../components/Banner';

const UseStyles = makeStyles();

function LandingPage(){
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
      secondary: {
        main: '#141d20',
      },
    },
    root: {
      minWidth: '100vw',
    }
  });

  const classes = UseStyles();

  return(
    <>
      <React.Fragment>
        <Bar/>
        <Bar2/>
        <Banner/>
      </React.Fragment>
    </>
    );
}

export default LandingPage