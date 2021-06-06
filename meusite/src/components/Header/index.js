import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Header extends Component {


  render() {
    return (

      <div>
       Header Meu projeto <br />
       <Link to='/'>Home</Link>
       <hr />
      </div>

    );
  }
}

export default Header;