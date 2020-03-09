import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';
 
const FacebookPage = ({ id, maxwidth }) => {

  console.log(`@facebook-page: id: ${id}`);

    return (
      <FacebookProvider appId="2317056035225898">
        <Page href="https://www.facebook.com" tabs="timeline" />
      </FacebookProvider>    
    );

  };

  export default FacebookPage;