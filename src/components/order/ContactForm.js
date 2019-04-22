import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {loadState} from "../../common/LocalSave";
import OrderService from "../../service/OrderService";

const style = {
  button: {
    padding: "10px",
    backgroundColor: "green",
    color: "white",
    marginRight: "5px"
  },
  container: {
    paddingTop: "40px"
  },
  step_color: {
    background: 'blue'
  },
  buttonContine: {
    backgroundColor: "black",
    marginRight: "10px",
    padding: "10px",
    color: "white"
  },
  buttonOrder: {
    backgroundColor: "green",
    marginRight: "10px",
    padding: "10px",
    color: "white"
  },
  buttonDelete: {
    backgroundColor: "green",
    marginRight: "10px",
    padding: "12px",
    color: "white"
  }
}
export default class ContactForm extends Component {
  orderProduct = (e) => {
    //lấy giá trị input thông tin người dùng
    let name = this.getName.value;
    let phone = this.getPhoneNumber.value;
    let address = this.getAddress.value;

    //get value (cart+total) in localstorage -->init reducer
    let cart = loadState("shoppingCart") || [];
    let total = loadState("total");

    let data = {"shoppingCart": cart,total:total, personal: {name, phone, address},status:0,user_id:0};
    console.log("data",data)
    // OrderService.postOrder(data);
    // this.getName.value = "";
    fetch("http://localhost/php-rest-api/order/create.php", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log(res.text())
      })
      .catch(error => {
        console.log(new Error(error));
      })

    localStorage.clear();
  }

  render() {
    return (
      <div>
        <div className="container" style={style.container}>
          <div className="step-payment">
            <div className="step-payment__item bg-yellow">
              <div className="step-payment__item__step">Bước 1:</div>
              <div className="step-payment__item__content">Kiểm tra giỏ hàng</div>
            </div>
            <div className="step-payment__item bg-yellow" style={style.step_color}>
              <div className="step-payment__item__step">Bước 2:</div>
              <div className="step-payment__item__content">Thông tin thanh toán</div>
            </div>
            <div className="step-payment__item bg-yellow">
              <div className="step-payment__item__step">Bước 3:</div>
              <div className="step-payment__item__content">Thông báo kết quả</div>
            </div>
          </div>
        </div>
        <div className="register container">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <h3 className="form__title">THÔNG TIN CÁ NHÂN</h3>
            <div className="form-element">
              <label>Họ và Tên<span className="upper-text">*</span></label>
              <input className="form-element__name" ref={(input) => this.getName = input}/>
            </div>
            <div className="form-element">
              <label>Địa chỉ<span className="upper-text">*</span></label>
              <input className="form-element__address" ref={(input) => this.getAddress = input}/>
            </div>
            <div className="form-element">
              <label>Điện thoại<span className="upper-text">*</span></label>
              <input className="form-element__phone" ref={(input) => this.getPhoneNumber = input}/>
            </div>
            <div className="form-element form-element__button">
              <Link onClick={this.orderProduct} to="/sucess" style={style.button}>Gửi</Link>
              <Link to="/check" style={style.button}>Quay về</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

}
