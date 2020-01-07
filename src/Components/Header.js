import React,{Component} from 'react';
// import logo from './logo.svg';
import './Header.css';
import logo from './spotify.png';

function Header() {
  return (
    <div class="Container">
      {/* <a href="https://www.spotify.com/vn-vi/" ><img src={logo} width="132" height="40" /> </a> */}
      <img src={logo} alt="logo" />
      <nav role="navigation">
        <ul>
          <li href="https://www.spotify.com/vn-vi/premium/?checkout=false" class="Premium">Premium</li>
          <li href="https://support.spotify.com/" class="">Trợ giúp</li>
          <li href="https://www.spotify.com/vn-vi/download/" class="">Tải xuống</li>
          <li href="https://www.spotify.com/vn-vi/signup/" class="">Đăng kí</li>
          <li href="https://www.spotify.com/vn-vi/account/overview/" class="">Đăng nhập</li>
        </ul> 
      </nav>
    </div>
  );
}

export default Header;
