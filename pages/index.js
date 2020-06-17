import React from 'react';
import App from './App';
import Head from 'next/head';

const Index = () => {
    return(
      <>
      <Head>
        <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>      
        <link type="text/css" rel="stylesheet" href="css/bootstrap.min.css"/>
        <link type="text/css" rel="stylesheet" href="css/dropdown.css"/>
        <link type="text/css" rel="stylesheet" href="css/index.css"/>
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script> 
      </Head>
        <App />
      </>
    )
}
  
  export default Index