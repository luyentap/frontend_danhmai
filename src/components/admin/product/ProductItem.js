import React, {Component} from 'react';
import {deleteProduct, fetchProduct} from "../../../actions/ActionCreaters"
import {connect} from 'react-redux';

class ProductItem extends Component {
  changeInputValue = (e) =>{
    // alert("cjhagne",e)
    // console.log("change",e.target.name)
    this.setState({ productClick:{
      [e.target.name]: e.target.value
      } });

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
        window.location = "";
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
  createProduct = (e) => {
    console.log(this.img.value);
    fetch("http://uploads.im/api", {
      method: "POST",
      body: this.img,
      headers: {
        Accept: 'application/json',
        // Authorization: 'Client-ID dc708f3823b7756'// imgur specific
      }
      })
      .then(res => {
        return res.json()
      })
      .then(res => {
        console.log(res);
      })

    let data = {
      "name": this.name.value,
      "content": this.content.value,
      "new_price": this.new_price.value,
      "old_price": this.old_price.value,
      "size": this.size.value,
      "color": this.color.value,
      "category_id":1,
      "number":0
    };
    console.log("product created", data)
    fetch("http://localhost/php-rest-api/product/create.php", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log(res.text());
        alert("Đã tạo thành công");
        window.location=""


      })
  }

  editTheProduct =() =>{
    let data = {
      "id":this.state.idProductClick,
      "name": this.nameUpdate.value,
      "content": this.contentUpdate.value,
      "new_price": this.new_priceUpdate.value,
      "old_price": this.old_priceUpdate.value,
      "size": this.sizeUpdate.value,
      "color": this.colorUpdate.value,
      "category_id":1,
      "number":0
    };
    console.log("product update", data)
    fetch("http://localhost/php-rest-api/product/update.php", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log(res.text());
        alert("Đã sửa thành công");
        window.location=""
      })
  }
  constructor(props) {
    super(props);
    this.state = {
      idProductClick: "-1",
      productClick: {
        name:"",
      }
    };
    //use form update (input)
    // this.state ={
    //   name:"",
    //   content:"",
    //   newPrice:"",
    //   oldPrice:"",
    //   img:"",
    //   idCategory:"",
    //   color:"",
    //   size:""
    // }
  }

  componentDidMount() {
    fetch("http://localhost/php-rest-api/product/read.php")
      .then(res => {
        // console.log(res.text())
        return res.json();
      })
      .then(res => {
        console.log("abc", res);
        this.props.a({"all_product": res});
      })
  }

  render() {
    let idRow = 0;
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
                <td>{++idRow}</td>
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
              <div className="modal-header"><h5 className="modal-title" id="exampleModalLabel">Xóa sản phẩm</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span
                  aria-hidden="true">×</span></button>
              </div>
              <div className="modal-body">Bạn muốn xóa sản phẩm này: {productClick && productClick.name}</div>
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
              <div className="modal-header"><h5 className="modal-title" >Sửa sản phẩm </h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span
                  aria-hidden="true">×</span></button>
              </div>
              <div className="modal-body">
                <form className="form">
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">Tên</label>
                    <div className="col-sm-10"><input className="form-control form-control-sm" 
                                                      type="text" defaultValue={(productClick )&& productClick.name} name="name" ref={name=>this.nameUpdate=name}/></div>
                  </div>
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">Hình ảnh</label>
                    <div className="col-sm-10"><img style={styleImg} src={productClick && productClick.img}/></div>
                  </div>
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">new price</label>
                    <div className="col-sm-10"><input ref={val=> this.new_priceUpdate = val} className="form-control form-control-sm" id="colFormLabelSm3"
                                                      type="text" defaultValue={productClick && productClick.new_price}/></div>
                  </div>
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">old price</label>
                    <div className="col-sm-10"><input ref={val=>this.old_priceUpdate = val} className="form-control form-control-sm" id="colFormLabelSm3"
                                                      type="text" defaultValue={productClick && productClick.old_price}/></div>
                  </div>
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">color</label>
                    <div className="col-sm-10"><input ref={val=>this.colorUpdate = val} className="form-control form-control-sm" id="colFormLabelSm3"
                                                      type="text" defaultValue={productClick && productClick.color}/></div>
                  </div>
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">size</label>
                    <div className="col-sm-10"><input ref={val=>this.sizeUpdate = val} className="form-control form-control-sm" id="colFormLabelSm3"
                                                      type="text" defaultValue={productClick && productClick.size}/></div>
                  </div>
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">Nội dung</label>
                    <div className="col-sm-10"><textarea ref={content=>this.contentUpdate = content} className="form-control form-control-sm" id="colFormLabelSm3"
                                                         type="text" defaultValue={productClick && productClick.content}/>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                <button className="btn btn-success" onClick={() => this.editTheProduct()} type="button" data-dismiss="modal">Save</button>
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
                    <div className="col-sm-10"><input ref={(name) => this.name = name}
                                                      className="form-control form-control-sm" type="text"
                                                      placeholder="nhập vào tên"/></div>
                  </div>
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">Giá mới</label>
                    <div className="col-sm-10"><input ref={(new_price) => this.new_price = new_price}
                                                      className="form-control form-control-sm" type="text"
                                                      placeholder="nhâp giá"/></div>
                  </div>
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">Giá cũ</label>
                    <div className="col-sm-10"><input ref={(old_price) => this.old_price = old_price}
                                                      className="form-control form-control-sm" type="text"
                                                      placeholder="nhâp giá"/></div>
                  </div>
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">Nội dung</label>
                    <div className="col-sm-10"><textarea ref={(content) => this.content = content}
                                                         className="form-control form-control-sm" type="text"
                                                         placeholder="nhập nội dung"/></div>
                  </div>
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">Hình ảnh</label>
                    <div className="col-sm-10"><input type="file" ref={(img) => this.img = img}
                                                      className="form-control form-control-sm"
                    /></div>
                  </div>
                  <div className="form-group row"><label
                                                         className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">Màu</label>
                    <div className="col-sm-10"><input ref={(color) => this.color = color} className="form-control form-control-sm" type="text"
                                                      placeholder="nhâp color" /></div>
                  </div>
                  <div className="form-group row"><label className="col-sm-2 col-form-label col-form-label-sm"
                                                         htmlFor="colFormLabelSm">Kích cỡ</label>
                    <div className="col-sm-10"><input ref={(size) => this.size = size}
                                                      className="form-control form-control-sm" type="text"
                                                      placeholder="nhâp size"/></div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                <button onClick={(e) => this.createProduct(e)} className="btn btn-success" type="button"
                        data-dismiss="modal">Save
                </button>
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
