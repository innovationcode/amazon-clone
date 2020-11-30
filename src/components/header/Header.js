import React from 'react'

import './Header.css';

function Header() {
      return (
            <div className='header'>
                  {/* Logo */}
                  <img className= 'header__logo' src = "" alt = "amazon-logp"/>
                  
                  {/* Search */}
                  <div className = 'header__search'>
                        <input 
                              className="header__searchInput"
                              type = "text"
                        />
                  </div>
                  
                  {/* Nav Menu */}
                  <div className= 'header__nav'>
                        <div className='header__option'>
                              <span className = 'header__optionLineTop'>
                                    Hello Guest
                              </span>
                              <span className = 'header__optionLineBottom'>
                                    Sign In
                              </span>
                        </div>

                        <div className='header__option'>
                              <span className = 'header__optionLineTop'>
                                    Returns
                              </span>
                              <span className = 'header__optionLineBottom'>
                                    & Orders
                              </span>
                        </div>

                        <div className='header__option'>
                              <span className = 'header__optionLineTop'>
                                    Your
                              </span>
                              <span className = 'header__optionLineBottom'>
                                    Prime
                              </span>
                        </div>
                  </div>
            </div>
      )
}

export default Header;
