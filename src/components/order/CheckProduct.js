import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import {loadState} from '../../common/LocalSave';

export default class CheckProduct extends Component{
  constructor(props) {
    super(props);
    this.state = {
      products : loadState("shoppingCart")
    }
  }



  render() {
    const {products} = this.state;
    let idRow= 0;
    return (
        <div className="container">
        <div className="link-intro">
          <Link to="/">Home ></Link>
          <Link to="/cart">Giỏ hàng ></Link>
          <Link className="cl-green" to="/cart">Kiểm tra giỏ hàng ></Link>
        </div>
        <div className="" style={style.container}>
        <div className="step-payment">
          <div className="step-payment__item bg-yellow" style={style.step_color}>
            <div className="step-payment__item__step">Bước 1:</div>
            <div className="step-payment__item__content">Kiểm tra giỏ hàng</div>
          </div>
          <div className="step-payment__item bg-yellow" >
            <div className="step-payment__item__step">Bước 2:</div>
            <div className="step-payment__item__content">Thông tin thanh toán</div>
          </div>
          <div className="step-payment__item bg-yellow">
            <div className="step-payment__item__step" >Bước 3:</div>
            <div className="step-payment__item__content">Thông báo kết quả</div>
          </div>
        </div>
      </div>
      <div>
          <div className="shopping-cart">
            <div className="customer-admin admin">
              <h5 className="customer-admin__title admin__title"><i className="fa fa-money-bill-wave-alt"></i>Chi tiết đơn hàng  </h5>
              <div className="table-responsive">
                <table className="table table-bordered table-hover table-striped table-vcenter text-center">
                  <thead>
                  <tr>
                    <th scope="row">.No </th>
                    <th scope="row">Tên SP</th>
                    <th scope="row">Hình ảnh</th>
                    <th scope="row">Kích thứơc</th>
                    <th scope="row">Màu sắc</th>
                    <th scope="row">Số lương</th>
                  </tr>
                  </thead>
                  <tbody>
                  {products.map(item=>
                  <tr>
                    <td>{++idRow}</td>
                    <td className="visible-lg">
                      {item.name}
                    </td>
                    <td>
                      <img src={item.img}/>
                    </td>
                    <td>Red</td>
                    <td>100ml</td>
                    <td><span className="badge badge-danger">{item.quantity}</span></td>

                  </tr>
                  )}

                  </tbody>
                </table>

              </div>
            </div>
            <div className="shopping-cart__button">
              <Link to="/list" style={style.buttonContine}>Tiếp tục mua hàng</Link>
              <Link to="/cart" style={style.buttonContine}>Quay lại giỏ hàng</Link>
              <Link to="/contactform" style={style.buttonOrder}>Điền thông tin</Link>
            </div>
      </div>
          </div>
        </div>
    );
  }
}
//-----
const style ={
    container:{
      paddingTop:"40px"
    },
    step_color:{
      background:'blue'
    },
    buttonContine:{
        backgroundColor:"black",
        marginRight:"10px",
        padding:"10px",
        color:"white"
      },
      buttonOrder:{
        backgroundColor:"green",
        marginRight:"10px",
        padding:"10px",
        color:"white"
      },
      buttonDelete:{
        backgroundColor:"green",
        marginRight:"10px",
        padding:"12px",
        color:"white"
      }
  }
