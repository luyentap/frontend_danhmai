import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {loadState} from "../../common/LocalSave";


export default class ListOrderByUser extends Component{
    constructor(props){
    super(props);
    this.state ={order:[]};
  }
  componentDidMount(){
  	let user = loadState("personal");
  	if(user){
    fetch("http://localhost/php-rest-api/order/list_by_user.php?user_id="+user.id)
    .then(res=>res.json())
    .then(res=>{
      this.setState({order:res});
    })
   }
  }
  render() {
    const {order} = this.state;
    console.log(order);

    const user = loadState("personal");
      if(!user){
        window.location="http://localhost:3000";
      }
    return (
      <div className="customer-admin admin container">
        <h5 className="customer-admin__title admin__title"><i className="fa fa-users"></i>Lịch sử order </h5>
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped table-vcenter text-center">
            <thead>
            <tr>
              <th scope="row">.No</th>
              <th scope="row">Time</th>
              <th scope="row">Total</th>
              <th scope="row">Status</th>
              <th scope="row">Tên</th>
              <th scope="row">Số điện thoại</th>
              <th scope="row">Địa chỉ</th>
              <th scope="row">Email</th>
              
              <th scope="row">Action</th>
            </tr>
            </thead>
            <tbody>
            {order && order.map((item,index) =>
            <tr>
              <td>{index+1}</td>
              <td>{item.time}</td>
              <td>{item.total}</td>
              <td><span className="badge badge-dark">{item.status}</span></td>              
              <td className="visible-lg">{item.name}
              </td>
              <td>{item.phone}</td>
              <td><span className="badge badge-warning">{item.address}</span></td>
              <td>{item.email}</td>

              <td>
                <div className="btn-group btn-group-xs">
                    <Link to={`/orderdetail/${item.id}`} className="fa fa-eye text-warning"></Link>
                </div>
                
              </td>
            </tr>
            )}

        
         {order.length==0 && <p>Bạn chưa có đơn hàng nào cả</p>}


            </tbody>
          </table>
          
        </div>
      </div>
      );}

}
