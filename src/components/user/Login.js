import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {loadState,saveState} from '../../common/LocalSave';

export default class Login extends Component {
  handleEmailChange(e){
    this.setState({email:e.target.value})
  }
  handlePasswordChange(e){
      this.setState({password:e.target.value})
  }
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      email:'',
      password:'',
      notification:''
    };
}
// signIn(){
//   alert('ham chuyen trang ');            
// }
    signIn = () => {
        const {email,password} = this.state;
        console.log("login",email,password);
        let data = {email,password};    

        fetch("http://localhost/php-rest-api/user/login.php",{
            method:"POST",
            body: JSON.stringify(data)
        })
        .then(res=>{
            return res.json();
        })    
        .then(res=>{
            console.log(res);
            //nếu tồn tại người dùng
            if(res.length>0){
                const user = res[0];
                saveState("personal",user);
                console.log(user.role);  
                if(user.role=="0"){
                    console.log("là người dùng");
                    window.location ="http://localhost:3000";    
                }  
                if(user.role=="1"){
                    alert("chào admin");
                    window.location ="http://localhost:3000/admin"; 
                }  
            }
            else{
                if(email==""|| password=="")
                    this.setState({notification:"điền đầy đủ thông tin bạn ơi"}) 
                else    
                    this.setState({notification:"sai email/pass"}) 
            }
        })

    }
    render() {
      return (
      
        <div style={sForm}>
           
          
            <div class="form-style-6" style={form_style}>
            <h1 style={sAdmin}>Đăng nhập</h1>
             <h6 className="font-italic text-danger">{this.state.notification}</h6>
            <form onSubmit={(e) => e.preventDefault()} method="POST">
            <p style={font}>User</p>
            <input type="email" name="field2" placeholder="Input your username" style={sInput} onChange={this.handleEmailChange} required/>
            <p style={font}>Password</p>
            <input type="password" name="field3" placeholder="Input your password" style={sInput}onChange={this.handlePasswordChange} required></input>
            <p><Link to="/register" style={font}>Chưa có tài khoản</Link></p>
            <button type="submit" style={sbutton} onClick={this.signIn}>Sign In</button>
            </form>
            </div>
          
        </div>
      );
    }
  }
//----------------------------------------------
    const sForm={
    backGroundColor: 'grey',
    textAlign: 'center',
    };
    const form_style={
    font: '95% Arial, Helvetica',
    maxWidth: '400px',
    margin: '10px auto',
    padding: '16px',
    background: '#F7F7F7',
    };
    const sAdmin={
        fontFamily:'UTM',
        background: '#43D1AF',
        padding: '20px 0',
        fontSize: '140%',
        fontWeight: '300',
        textAlign: 'center',
        color: '#fff',
        margin: '-16px -16px 16px -16px',
    }
    const sbutton={
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
        borderRadius: '12px',
        marginBottom: '20px',
        marginTop:'20px'
    }
    const sInput={
        marginBottom: '20px',
    }
    const font={
        fontFamily:'UTM',
        fontSize:'20px'
    }
    

  