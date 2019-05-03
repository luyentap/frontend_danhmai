import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {loadState,saveState} from '../../common/LocalSave';

export  default  class HeaderMenu extends Component{
  logout =() =>{
      alert("bạn đã đăng xuất");
      localStorage.removeItem("personal");
      window.location ="http://localhost:3000";
  }
  render() {
    const user = loadState("personal");

    

    return (
      <ul className="header__primary">
        <li><Link to="/">TRANG CHỦ</Link></li>
        { user && (user.role=="1" && <li><Link to="/admin">TRANG QUẢN TRỊ</Link></li>)}
        <li><Link to="/about">GIỚI THIỆU</Link></li>
        <li className="header__primary__product"><Link to="/list">SẢN PHẨM</Link>
          <div className="menu-product">
            <div className="menu-product__item"><h6 className="menu-product__item__title">DƯỠNG DA</h6>
              <div className="menu-product__item__list"><p>Áo khoác</p>
                <p>Bộ áo liền quần</p>
                <p>Dress</p>
                <p>Quần/Váy</p>
                <p>Quần sort</p>
                <p>Quần jean</p>
                <p>Đồ đan</p>
                <p>Áo nỉ</p>
                <p className="menu-product__item__list--active">Áo sơ mi</p></div>
            </div>
            <div className="menu-product__item"><h6 className="menu-product__item__title">DƯỠNG DA</h6>
              <div className="menu-product__item__list"><p>Áo khoác</p>
                <p>Bộ áo liền quần</p>
                <p>Dress</p>
                <p>Quần/Váy</p>
                <p>Quần sort</p>
                <p>Quần jean</p>
                <p>Đồ đan</p>
                <p>Áo nỉ</p>
                <p className="menu-product__item__list--active">Áo sơ mi</p></div>
            </div>
            <div className="menu-product__item"><h6 className="menu-product__item__title">DƯỠNG DA</h6>
              <div className="menu-product__item__list"><p>Áo khoác</p>
                <p>Bộ áo liền quần</p>
                <p>Dress</p>
                <p>Quần/Váy</p>
                <p>Quần sort</p>
                <p>Quần jean</p>
                <p>Đồ đan</p>
                <p>Áo nỉ</p>
                <p className="menu-product__item__list--active">Áo sơ mi</p></div>
            </div>
          </div>
        </li>
        <li><Link to="/blog">TIN TỨC</Link></li>
        <li><Link to="/contact">BẢN ĐỒ</Link></li>
        {user&&<li><Link to="/listorderbyuser">ĐƠN HÀNG</Link></li>}
        {! user&& <li><Link to="/login">ĐĂNG NHẬP</Link></li>}
        
        {user&&
        <li>
             <button className="bg-white"><i className="fa fa-user" ></i>Xin chào, {user.name}  </button>
             <a href="" onClick={this.logout}>đăng xuất</a>

          </li>

          }
      </ul>
      
    );
  }
}
