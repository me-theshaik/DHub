import React from 'react';

const Navbar = () => {
  return (
    <header className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__logo'>LOGO</div>
        <div className='navbar__links'>
          <div className='navbar__link'>
            <a href='/login'>Login</a>
          </div>
          <div className='navbar__link'>
            <a href='/register'>Register</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
