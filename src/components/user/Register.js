import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Register extends Component {
  submit =(e)=>{
    e.preventDefault();
    var name = this.name.value;
    var password = this.password.value;
    var email = this.email.value;
    var phone = this.phone.value;
    var address = this.address.value;


    var data = {name, password, email,phone,address};
    console.log(data);
    fetch("http://localhost/php-rest-api/user/register.php",{
      method:"POST",
      body: JSON.stringify(data)
    })
    .then(res=>res.text())
    .then(res=>{
      console.log(res)
      window.location ="/register_success";
      })
  }
  render() {
    return (
      <div>
        <div class="container">
        <div class="register">
            <h1 class="register__title">ĐĂNG KÝ</h1>
            <form class="form" onSubmit={(e) => e.preventDefault()}>
              <h3 class="form__title">THÔNG TIN CÁ NHÂN</h3>
              <div class="form-element"><label>Họ tên<span class="upper-text">*</span></label><input ref={input=>this.name=input}/>
              </div>
              <div class="form-element"><label>Email<span class="upper-text">*</span></label><input type="email" ref={input=>this.email=input}/></div>
              <div class="form-element"><label>Password<span class="upper-text">*</span></label><input type="password" ref={input=>this.password=input}/></div>
              <p className="pb-3">Cảm ơn bạn đã đăng ký</p>
            
          
              <h3 class="form__title">THÔNG TIN CÁ NHÂN</h3>
              <div class="form-element"><label>phone<span class="upper-text">*</span></label><input type="number" ref={input=>this.phone=input}/></div>
              <div class="form-element"><label>Địa chỉ<span class="upper-text">*</span></label><input type="address" ref={input=>this.address=input}/></div>
              <div class="form-element form-element__button"><button className=" mr-4" onClick={(e)=>this.submit(e)}>Gửi</button><button><i class="fa fa-undo"></i>Quay lại</button></div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}