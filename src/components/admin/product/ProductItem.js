import React, {Component} from 'react';
import MenuAdmin from "../MenuAdmin";
import {fetchProduct} from "../../../actions/ActionCreaters"
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

  clickDelete =(e, id) => {
    // e.preventDefault();
    if(this.props.products) {
      this.setState({
        idProductClick: id,
      })
    }
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
    //vì tìm trong props nên để trong render, để trong hàm khác==> time để lấy về
    if(products) {
      this.state.productClick = this.props.products.find(product => product.id == this.state.idProductClick)
    }

    return (
      <div>
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
                    <button className="btn btn-default px-0" data-toggle="modal" data-target="#edit">
                      <div className="fa fa-eye text-warning"></div>
                    </button>
                  </div>
                  <div className="btn-group btn-group-xs">
                    <button className="btn btn-default px-0" data-toggle="modal" data-target="#delete"
                            onClick={(e) => this.clickDelete(e, product.id)}>
                      <div className="fa fa-trash text-danger"></div>
                    </button>
                  </div>
                </td>
              </tr>
            )}
            </tbody>
          </table>

        </div>
        {console.log("clickDelête", this.state.idProductClick, this.state.productClick)
        }
        {this.state.productClick &&
        <div className="modal fade" id="delete" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header"><h5 className="modal-title" id="exampleModalLabel">Delete the candidate</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span
                  aria-hidden="true">×</span></button>
              </div>
              <div className="modal-body">Are you want to delete it: {this.state.productClick.name}</div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                <button className="btn btn-danger" type="button">Delete</button>
              </div>
            </div>
          </div>
        </div>
        }
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
    a: (products) => dispatch(fetchProduct(products))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)
