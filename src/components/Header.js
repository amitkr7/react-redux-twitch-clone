import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='ui item'>
        Streams
      </Link>
      <div className='right menu'>
        <Link to='/' className='ui item'>
          Streamer
        </Link>
      </div>
    </div>
  );
};

export default Header;
