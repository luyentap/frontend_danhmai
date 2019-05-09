import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Bill extends Component {
  constructor(props) {
    super(props);
    this.state ={
      "bill":[],
      idBilClick:-1
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
  clickBill = (e,idBill)=>{
    if(this.state.bill.length>0){
    this.setState({
      idBilClick:idBill
    })

  }
  }
  changeStatusBill = () =>{
    var idBill = this.state.idBilClick;
    var status = this.selectStatus.value;

    console.log(idBill,status);

    fetch("http://localhost/php-rest-api/order/change_status_bill.php",{
      method:"POST",
      body: JSON.stringify({id:idBill,status})
    })
    .then(res=>res.json())
    .then(res=>{
      console.log(res);
      alert("đã update thành công");
      window.location ="http://localhost:3000/admin_bill";
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
                  <button onClick={(e)=>this.clickBill(e,item.id)} className="btn btn-default px-0" data-toggle="modal" data-target="#editBill">
                    <div className="fa fa-edit text-danger"></div>
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


           <div className="modal fade" id="editBill" tabIndex="-1" role="dialog" aria-labelledby="deleteLabel"
             aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header"><h5 className="modal-title" id="createLabel">Thay đổi trạng thái đơn hàng</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span
                  aria-hidden="true">×</span></button>
              </div>
              <div className="modal-body">
                <form className="form">
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">Trạng thái</label>
                    <div className="col-sm-10">
                      <select ref={option=> this.selectStatus=option} >
                        <option value="0"> Đang chờ xử lý
                        </option>
                        <option value="1">
                          Đã xử lý
                        </option>
                        <option value="2">
                          Đã giao
                        </option>
                      </select>

                    </div>
                  </div>
                 
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                <button onClick={this.changeStatusBill} className="btn btn-success" type="button"
                        data-dismiss="modal">Save
                </button>
              </div>
            </div>
          </div>
        </div>


        </div>
      </div>
    );
  }
}
