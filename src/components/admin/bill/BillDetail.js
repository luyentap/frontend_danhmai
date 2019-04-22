import React, {Component} from 'react';
import MenuAdmin from "../MenuAdmin";
import Bill from "./Bill";
import {Link} from 'react-router-dom';

export default class BillDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      idDetail: this.props.match.params.id
    }
    console.log("a",this.state.idDetail)
  }

  componentDidMount() {
    fetch(`http://localhost/php-rest-api/order/read_detail.php?id=${this.state.idDetail}`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({details: res})
      })
  }

  render() {
    const {details,idDetail} = this.state;
    let idRow = 0;
    return (
      <div>
        <div className="container gridpage">
          <MenuAdmin/>
          <div className="customer-admin admin">
            <h5 className="customer-admin__title admin__title"><i className="fa fa-money-bill-wave-alt"></i>Chi tiết đơn
              hàng mã số {idDetail} </h5>
            <button className="btn btn-primary  m-2"><Link to="/admin_bill" className="text-dark ">Trở lại</Link></button>
            <div className="table-responsive">
              <table className="table table-bordered table-hover table-striped table-vcenter text-center">
                <thead>
                <tr>
                  <th scope="row">.No</th>
                  <th scope="row">Tên SP</th>
                  <th scope="row">Hình ảnh</th>
                  <th scope="row">Kích thứơc</th>
                  <th scope="row">Màu sắc</th>
                  <th scope="row">Số lương</th>
                </tr>
                </thead>
                <tbody>
                {details.map(item =>
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
                    <td><span className="badge badge-danger">{item.number}</span></td>

                  </tr>
                )}

                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
