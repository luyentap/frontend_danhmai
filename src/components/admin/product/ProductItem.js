import React, {Component} from 'react';
import MenuAdmin from "../MenuAdmin";
import {deleteProduct, fetchProduct} from "../../../actions/ActionCreaters"
import {connect} from 'react-redux';
import OpenClose from './OpenClose';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idProductClick: "-1",
      productClick: null
    };
  }

  clickButtonModal = (e, id) => {
    // e.preventDefault();
    if (this.props.products) {
      this.setState({
        idProductClick: id,
      })
    }
  }
  clickDeleteYes = (e) => {
    console.log("yes");
    fetch(`http://localhost/php-rest-api/product/delete.php`,
      {
        method: "POST",
        body: JSON.stringify({id: this.state.idProductClick})
      })
      .then(res => {
        console.log(res);
        this.props.deleteProduct(this.state.idProductClick);
        this.setState({
          idProductClick: "-1",
        })
      })
  }
  clickDeleteNo = (e) => {
    console.log("no")
    this.setState({
      idProductClick: "-1",
    })
  }

  componentDidMount() {
    fetch("http://localhost/php-rest-api/product/read.php")
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log("abc", res);
        this.props.a({"all_product": res.records});
      })
  }

  render() {
    console.log("product2", this.props.products);
    var {products} = this.props;
    var {idProductClick, productClick} = this.state;
    //vì tìm trong props nên để trong render, để trong hàm khác==> time để lấy về
    if (products) {
      productClick = products.find(product => product.id == this.state.idProductClick)
    }

    return (
      <div>
        <div className="col-lg-3 col-md-6 " data-toggle="modal" data-target="#create">
          <button className="btn btn-primary"><i className="fa fa-plus"></i> ADD</button>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped table-vcenter text-center">
            <thead>
            {/*số lượng đã bán, số lượng còn(sp đang có)*/}
            <tr>
              <th scope="row">.No</th>
              <th scope="row">Tên Sp</th>
              <th scope="row">Img</th>
              <th scope="row">Price</th>
              <th scope="row">Content</th>
              <th scope="row">Color</th>
              <th scope="row">Size</th>
              <th scope="row">Action</th>
            </tr>
            </thead>
            <tbody>
            {products && products.map(product =>
              <tr>
                <td>{product.id}</td>
                <td>{product.name}
                </td>
                <td><img style={styleImg} src={product.img}/></td>
                <td><span className="badge badge-warning">{product.new_price}</span></td>
                <td>{product.content}</td>
                <td className="text-danger">{product.color}</td>
                <td className="text-primary">{product.size}</td>
                <td>
                  <div className="btn-group btn-group-xs">
                    <button className="btn btn-default px-0" data-toggle="modal" data-target="#edit"
                            onClick={(e) => this.clickButtonModal(e, product.id)}>
                      <div className="fa fa-eye text-warning"></div>
                    </button>
                  </div>
                  <div className="btn-group btn-group-xs">
                    <button className="btn btn-default px-0" data-toggle="modal" data-target="#delete"
                            onClick={(e) => this.clickButtonModal(e, product.id)}>
                      <div className="fa fa-trash text-danger"></div>
                    </button>
                  </div>
                </td>
              </tr>
            )}
            </tbody>
          </table>

        </div>
        {console.log("clickDelête nè", this.state.idProductClick, this.state.productClick)
        }

        <div className="modal fade" id="delete" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header"><h5 className="modal-title" id="exampleModalLabel">Delete the candidate</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span
                  aria-hidden="true">×</span></button>
              </div>
              <div className="modal-body">Are you want to delete
                it: {productClick && productClick.name}</div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal"
                        onClick={(e) => this.clickDeleteNo(e)}>Close
                </button>
                <button className="btn btn-danger" type="button" data-dismiss="modal"
                        onClick={(e) => this.clickDeleteYes(e)}>Delete
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="edit" tabIndex="-1" role="dialog" aria-labelledby="deleteLabel"
             aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header"><h5 className="modal-title" id="deleteLabel">Sửa sản phẩm </h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span
                  aria-hidden="true">×</span></button>
              </div>
              <div className="modal-body">
                <form className="form">
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">Tên</label>
                    <div className="col-sm-10"><input className="form-control form-control-sm" id="colFormLabelSm"
                                                      type="text" value={productClick && productClick.name}/></div>
                  </div>
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">Hình ảnh</label>
                    <div className="col-sm-10"><img style={styleImg} src={productClick && productClick.img}/></div>
                  </div>
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">price</label>
                    <div className="col-sm-10"><input className="form-control form-control-sm" id="colFormLabelSm3"
                                                      type="text" value={productClick && productClick.new_price}/></div>
                  </div>
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">Nội dung</label>
                    <div className="col-sm-10"><textarea className="form-control form-control-sm" id="colFormLabelSm3"
                                                         type="text" value={productClick && productClick.content}/>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                <button className="btn btn-success" type="button">Save</button>
              </div>
            </div>
          </div>
        </div>


        <div className="modal fade" id="create" tabIndex="-1" role="dialog" aria-labelledby="deleteLabel"
             aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header"><h5 className="modal-title" id="createLabel">Thêm sản phẩm mới</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span
                  aria-hidden="true">×</span></button>
              </div>
              <div className="modal-body">
                <form className="form">
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">Tên</label>
                    <div className="col-sm-10"><input className="form-control form-control-sm" type="text"
                                                      placeholder="nhập vào tên"/></div>
                  </div>
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">Giá</label>
                    <div className="col-sm-10"><input className="form-control form-control-sm" type="text"
                                                      placeholder="nhâp giá"/></div>
                  </div>
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">Nội dung</label>
                    <div className="col-sm-10"><textarea className="form-control form-control-sm" type="text"
                                                         placeholder="nhập nội dung"/></div>
                  </div>
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">Color</label>
                    <div className="col-sm-10"><input className="form-control form-control-sm" type="text"
                                                      placeholder="nhâp color"/></div>
                  </div>
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">size</label>
                    <div className="col-sm-10"><input className="form-control form-control-sm" type="text"
                                                      placeholder="nhâp size"/></div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                <button className="btn btn-success" type="button">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }


}

//----------------------------
const custab = {
  border: '1px solid #ccc',
  padding: '5px',
  margin: '5% 0',
  boxShadow: '3px 3px 2px #ccc',
  transition: '0.5s',
  textAlign: 'center'
}
const custyle = {
  textAlign: 'center'

}
const styleImg = {
  objectFit: "cover",
  width: "100%",
  height: "auto"
}
const mapStateToProps = (state) => {
  return {
    products: state.products.all_product
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    a: (products) => dispatch(fetchProduct(products)),
    deleteProduct: (id) => dispatch(deleteProduct(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)
