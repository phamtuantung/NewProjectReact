import React from 'react';
// import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <div class="Container">
      <a href="https://www.spotify.com/vn-vi/"> Spotify logo</a>
      <nav role="navigation">
        <ul>
          <li href="https://www.spotify.com/vn-vi/premium/?checkout=false" class="">Premium</li>
          <li href="https://support.spotify.com/">Trợ giúp</li>
          <li href="https://www.spotify.com/vn-vi/download/">Tải xuống</li>
          <li href="https://www.spotify.com/vn-vi/signup/">Đăng kí</li>
          <li href="https://www.spotify.com/vn-vi/account/overview/">Đăng nhập</li>
        </ul> 
      </nav>

    </div>
  );
}

export default Header;
