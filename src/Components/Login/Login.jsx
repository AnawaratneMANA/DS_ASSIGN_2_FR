import React, {useState, useEffects} from 'react';
import './style.css';
import {createUser} from '../../actions/user';
import {useDispatch, useSelector} from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();
    var flag = 'FALSE';
    const [userData, setUserData] = useState(
        {
            userName: '',
            email: '',
            passWord1: '',
            passWord2:'',
            userType : ''
        }
    );

    const passWordValidation = (userData) => {
        if(userData.passWord1 === userData.passWord2){
            flag = 'PASS';
        } else {
            flag = "FALSE";
        }
        
    }

    const clear = () =>{
        //Clear the Form.
    }

    //Submit Details 
    const handleSubmit = (e) => {
        e.preventDefault();
        //submit data
        passWordValidation(userData);
        if(flag === 'PASS'){
            dispatch(createUser(userData));
        } else {
            console.log("Password Not Matching");
            
        }
        clear(); 
    }

return (
<React.Fragment>

    <div className = 'container'>
    <h2>Registration Form</h2>
    <form onSubmit={handleSubmit}>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">User Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        value={userData.userName}
        onChange={(e) => setUserData({...userData, userName: e.target.value})}
        
        />
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>

    <div className="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
        value={userData.email}
        onChange={(e) => setUserData({...userData, email: e.target.value})}
        
        />
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>

    <div className="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="password1" value={userData.passWord1}
        onChange={(e) => setUserData({...userData, passWord1: e.target.value})}/>
    </div>

    <div class="mb-3">
        <label for="exampleInputPassword2" class="form-label">Re-enter Password</label>
        <input type="password" class="form-control" id="password2" value={userData.passWord2}
        onChange={(e) => setUserData({...userData, passWord2: e.target.value})}/>
    </div>

  <div className="float-Left" onChange={(e) => setUserData({...userData, userType: e.target.value})}>
        <div class="mb-3 form-check">
            <input type="radio" class="form-check-input" id="exampleCheck1" value="Seller" name="userType"/>
            <label class="form-check-label" for="exampleCheck1">Seller</label>
        </div>

        <div class="mb-3 form-check">
            <input type="radio" class="form-check-input" id="exampleCheck2" value="Buyer" name="userType"/>
            <label class="form-check-label" for="exampleCheck1">Buyer</label>
        </div>
    </div>
    
    <button type="submit" class="btn btn-primary">Register</button>
    </form>
    </div>
</React.Fragment>
)
}

export default Login;
