import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Bill extends Component {
  constructor(props) {
    super(props);
    this.state ={
      "bill":[]
    }
  }

  componentDidMount(){
    fetch("http://localhost/php-rest-api/order/read.php")
      .then(res=>{
        return res.json()
      })
      .then(res=>{
        this.setState({bill:res});
      })
  }
  render() {
    const {bill} = this.state;
    let idRow =0;
    console.log("bill",bill)
    return (
      <div className="customer-admin admin">
        <h5 className="customer-admin__title admin__title"><i className="fa fa-money-bill-wave-alt"></i>Quản lý đơn hàng </h5>
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped table-vcenter text-center">
            <thead>
            <tr>
              <th scope="row">.No Bill</th>
              <th scope="row">Tên KH</th>
              <th scope="row">Địa chỉ</th>
              <th scope="row">Phone</th>
              <th scope="row">Tổng tiền</th>
              <th scope="row">Thời gian đặt</th>
              <th scope="row">Trạng thái</th>
              <th scope="row">Action</th>
            </tr>
            </thead>
            <tbody>

            {bill.map(item=>
            <tr>
              <td>{++idRow}</td>
              <td className="visible-lg">{item.name}
              </td>
              <td className="visible-lg">{item.address}
              </td>
              <td className="visible-lg">{item.phone}
              </td>
              <td className="text-danger">{item.total} vnđ</td>
              <td><span >{item.time}</span></td>
              <td><span className="badge badge-dark">{item.status}</span></td>
              <td>
                <div className="btn-group btn-group-xs">
                  <button className="btn btn-default px-0">
                    <Link to={"bill/"+item.id}><i className="fa fa-eye text-warning"></i> </Link>
                  </button>
                </div>
                <div className="btn-group btn-group-xs">
                  <button className="btn btn-default px-0" data-toggle="modal" data-target="#edit">
                    <div className="fa fa-trash text-danger"></div>
                  </button>
                </div>
              </td>
            </tr>
            )}
            </tbody>
          </table>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#">1</a></li>
            </ul>
          </nav>


        </div>
      </div>
    );
  }
}
