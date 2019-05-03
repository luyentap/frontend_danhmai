import React, {Component} from 'react';

export default class Customer extends Component {
  constructor(props){
    super(props);
    this.state ={customer:[]};
  }
  componentDidMount(){
    fetch("http://localhost/php-rest-api/user/list.php")
    .then(res=>res.json())
    .then(res=>{
      this.setState({customer:res});
    })
  }
  render() {
    const {customer} = this.state;
    console.log(customer);
    return (
      <div className="customer-admin admin">
        <h5 className="customer-admin__title admin__title"><i className="fa fa-users"></i>Quản lý khách hàng </h5>
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped table-vcenter text-center">
            <thead>
            <tr>
              <th scope="row">.No</th>
              <th scope="row">Tên</th>
              <th scope="row">Số điện thoại</th>
              <th scope="row">Địa chỉ</th>
              <th scope="row">Email</th>
              <th scope="row">Action</th>
            </tr>
            </thead>
            <tbody>
            {customer && customer.map((item,index) =>
            <tr>
              <td>{index+1}</td>
              <td className="visible-lg">{item.name}
              </td>
              <td>{item.phone}</td>
              <td><span className="badge badge-warning">{item.address}</span></td>
              <td>{item.email}</td>
              <td>
                <div className="btn-group btn-group-xs">
                  <button className="btn btn-default px-0" data-toggle="modal" data-target="#edit">
                    <div className="fa fa-eye text-warning"></div>
                  </button>
                </div>
                <div className="btn-group btn-group-xs">
                  <button className="btn btn-default px-0" data-toggle="modal" data-target="#delete">
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
              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-itema"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
