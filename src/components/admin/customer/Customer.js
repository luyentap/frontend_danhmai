import React, {Component} from 'react';

export default class Customer extends Component {
  render() {
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
            <tr>
              <td>1</td>
              <td className="visible-lg">Nguyễn Văn A
              </td>
              <td>01222111222</td>
              <td><span className="badge badge-warning">123 Hà Huy Tập, An Khê, Thanh Khê, Đà Nẵng</span></td>
              <td>nguyenvana@gmail.com</td>
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
              <td>079911222</td>
              <td><span className="badge badge-warning">82/161 Nguyễn Lương Bằng, Phường Hoà Khánh Bắc, Quận Liên Chiểu, Đà Nẵng</span>
              </td>
              <td>xuanthinguyen@gmail.com</td>
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
              <td>3</td>
              <td className="visible-lg">Nguyễn Thị Phương
              </td>
              <td>034111222</td>
              <td><span
                className="badge badge-warning">159 Nguyễn Văn Linh, Phường Nam Dương, Quận Hải Châu, Đà Nẵng</span>
              </td>
              <td>phuongthinguyen@gmail.com</td>
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
              <td>4</td>
              <td className="visible-lg">Trần Văn B
              </td>
              <td>079911222</td>
              <td><span
                className="badge badge-warning">106 Nguyễn Xuân Khoát, Phường An Hải Bắc, Quận Sơn Trà, Đà Nẵng</span>
              </td>
              <td>avanb@gmail.com</td>
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
              <td>5</td>
              <td className="visible-lg">Trần Thị Xuân Vinh
              </td>
              <td>07991444</td>
              <td><span
                className="badge badge-warning">307 Nam Cao, Phường Hoà Khánh Nam, Quận Liên Chiểu, Đà Nẵng</span></td>
              <td>xuanthinguyen222@gmail.com</td>
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
              <td>1</td>
              <td className="visible-lg">Nguyễn Thị Xuân
              </td>
              <td>079911222</td>
              <td><span className="badge badge-warning">123 Hà Huy Tập, An Khê, Thanh Khê, Đà Nẵng</span></td>
              <td>xuanthinguyen@gmail.com</td>
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
              <td>1</td>
              <td className="visible-lg">Nguyễn Thị Xuân
              </td>
              <td>079911222</td>
              <td><span className="badge badge-warning">123 Hà Huy Tập, An Khê, Thanh Khê, Đà Nẵng</span></td>
              <td>xuanthinguyen@gmail.com</td>
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
              <td>1</td>
              <td className="visible-lg">Nguyễn Thị Xuân
              </td>
              <td>079911222</td>
              <td><span className="badge badge-warning">123 Hà Huy Tập, An Khê, Thanh Khê, Đà Nẵng</span></td>
              <td>xuanthinguyen@gmail.com</td>
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
              <td>1</td>
              <td className="visible-lg">Nguyễn Thị Xuân
              </td>
              <td>079911222</td>
              <td><span className="badge badge-warning">123 Hà Huy Tập, An Khê, Thanh Khê, Đà Nẵng</span></td>
              <td>xuanthinguyen@gmail.com</td>
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
