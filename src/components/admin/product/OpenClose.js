import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../../actions/ActionCreaters';
import * as axios from 'axios'
class OpenClose extends React.Component {
    constructor(props) {
      super(props);
      //trạng thái đóng.mở form
      this.state = {isToggleOn: true}; 
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
     //add-product-------------------------
     clickAdd = (e) =>{
         e.preventDefault();
        var data = {"name":this.getProduct.value,'price_new':this.getPrice.value};
        console.log(data);
        var url = 'https://5c87325bcc034a0014bd267a.mockapi.io/products'
        // fetch(url, {
        //   method: 'POST', // or 'PUT'
        //   body: data // data can be `string` or {object}!
        // } )
        // .then(res => res.json())
        // .then(response => {
        //     console.log('thành công:', JSON.stringify(response))
        //     this.props.addProduct(JSON.stringify(response));
        //     })
        // .catch(error => console.error('lỗi nè:', error));
        axios.post(url, data)
          .then(function (response) {
            console.log(response);
            this.props.dispatch.addProduct("response");
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    render() {
      var form =null;
        if(this.state.isToggleOn){
            form = <form>
                <input placeholder="Input Product" ref={(input)=>this.getProduct = input} />
                <input placeholder="Input Price" ref={(input)=>this.getPrice = input} />
                <button onClick={(e)=>this.clickAdd(e)}><b>+</b> Add new products</button>
                </form>;
        }
        else
            form = null;
            return (
                <div>
                <button style={sbutton} onClick={this.handleClick}>
                 Click here to add new products
                </button>
                {form}
                </div>
            );
            }
  }
//-------------------
const sbutton={
    backGround:'green',
    color:'#551A8B'
}
const mapDispatchToProps =(dispatch) =>{
    return {
        addProduct : (product) => dispatch(addProduct(product))
    }
}
export default connect(null,mapDispatchToProps)(OpenClose)
