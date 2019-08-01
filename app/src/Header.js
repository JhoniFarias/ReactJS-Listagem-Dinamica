import React from 'react';

const Header = () =>{
     return( 
        <nav>
        <div className="nav-wrapper indigo lightnen-2">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right ">
            <li><a href="#">Sass</a></li>
            <li><a href="#">Components</a></li>
            <li><a href="#">JavaScript</a></li>
          </ul>
        </div>
      </nav>
     );
}

export default Header;