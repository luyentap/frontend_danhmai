import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { Route, Redirect } from 'react-router'

export default class RegisterSucess extends Component{
	render = () =>{
		return (
			<div className="container">
			<p className="font-italic my-4  text-justify">Chúc mừng bạn đã đăng ký thành công</p>

			<Link className="btn btn-success" to="/login" >login</Link>					
			</div>
			);
	}
}