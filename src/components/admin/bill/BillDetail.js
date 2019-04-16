import React, {Component} from 'react';
import MenuAdmin from "../MenuAdmin";
import Bill from "./Bill";

export default class BillDetail extends Component {
  render() {
    return (
      <div>
        <div className="container gridpage">
          <MenuAdmin/>
          <div className="customer-admin admin">
            <h5 className="customer-admin__title admin__title"><i className="fa fa-money-bill-wave-alt"></i>Chi tiết đơn hàng số 2 </h5>
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
                <tr>
                  <td>1</td>
                  <td className="visible-lg">
                    JO MALONE LONDON HONEYSUCKLE AND DAVANA COLOGNE
                  </td>
                  <td>
                    <img src="https://www.elle.vn/wp-content/uploads/2019/01/16/nuoc-hoa-nu-06.jpg"/>
                  </td>
                  <td>Red</td>
                  <td>100ml</td>
                  <td><span className="badge badge-danger">2</span></td>

                </tr>
                <tr>
                  <td>2</td>
                  <td className="visible-lg">
                    NARCISO ROUGE NARCISO RODRIGUEZ
                  </td>
                  <td><img src="https://www.elle.vn/wp-content/uploads/2019/01/16/nuoc-hoa-nu-08-1024x1024.jpg"/> </td>
                  <td>Red</td>
                  <td>200ml</td>
                  <td><span className="badge badge-danger">1</span></td>
                </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
