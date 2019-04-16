import React, {Component} from 'react';

export default class Bill extends Component {
  render() {
    return (
      <div className="customer-admin admin">
        <h5 className="customer-admin__title admin__title"><i className="fa fa-money-bill-wave-alt"></i>Quản lý đơn hàng </h5>
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped table-vcenter text-center">
            <thead>
            <tr>
              <th scope="row">.No Bill</th>
              <th scope="row">Tên KH</th>
              <th scope="row">Tổng tiền</th>
              <th scope="row">Thời gian đặt</th>
              <th scope="row">Trạng thái</th>
              <th scope="row">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td className="visible-lg">Nguyễn Thị Phương
              </td>
              <td className="text-danger">455.000 vnđ</td>
              <td><span >15-04-2019 12:34:34</span></td>
              <td><span className="badge badge-dark">chưa giao</span></td>
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
            <tr>
              <td>2</td>
              <td className="visible-lg">Nguyễn Thị Xuân
              </td>
              <td className="text-danger">800.000 vnđ</td>
              <td><span >15-04-2019 12:34:34</span></td>
              <td><span className="badge badge-warning">đã giao</span>
              </td>
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
