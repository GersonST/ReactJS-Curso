import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';



export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      token: 'Carregando...'
    };

    
    // Initialize Firebase
    firebase.app().firestore();
    firebase.analytics();


    

    firebase.database().ref('token').on('value',(snapshot)=>{
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    })

  }




  render(){
    const {token} = this.state;
    return(
      <div>
        <h1>Token: {token}</h1>
      </div>
    );
  }
}