import React, {useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import signImg from '../../assets/images/signup.png';
import  {registerUser}  from '../../redux/Actions/authActions';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

 
const Signup = ({signup}) => {

    const Styles = () => {
        return (
            <style jsx="true">
                {
                    ` .signup {
                        min-height: 100vh;
                    }

                    .signupInner {
                        min-height: 100vh;
                    }

                    .signupInner_imgHolder {
                     width: 75%;    
                    margin: 0 auto;
                    }

                    .hasBgColor {
                        background: #95ABDC;
                    }

                    .signupInner_formHolder {
                        width: 75%;
                        margin: 0 auto;
                        padding: 1em;
                
                    }

                     .signupForm .btn_holder{
                        width: fit-content;
                        width: -moz-fit-content;
                        margin: 0 auto;
                    }


                    .form_element{
                        border-bottom: 1px solid lightgray;
                        width: 90%;
                        margin: 0 auto;
                    }

                    .form_element input{
                        width: 80%;
                        outline: none;
                        padding: 0.6em;
                        border: none;
                        background: #fff;
                        transition: all 0.35s ease;
                    }

                    .form_element i{
                        color: #95abdc;
                    }

                    .form_element:hover,
                    .form_element:focus{
                        border-bottom: 1px solid var(--default_blue);
                    }

                       @media (max-width: 768px){
                        .signupInner_formHolder{
                            width: 100%;
                        }
                    }
                     `
                }</style>
        )
    }


    const [showpassword, setShowpassword] = useState(false);

    const formFields = {
        fullname: '',
        username: '',
        email: '',
        phonenumber: '',
        password: ''
    }

    const [signupData, setSignupData] = useState(formFields);

    const {fullname, username, email, phonenumber, password} = signupData;

    const handleChange = (e) => {
        setSignupData({
            ...signupData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(signupData);

        signup(signupData);
    }

    return (
        <div>
            <div className="signup center">
                <Row className="signupInner w-100">
                    <Col md={6} className="hasBgColor align_only">
                        <div className="signupInner_imgHolder">
                            <img src={signImg} alt="" className="w-100"/>
                        </div>
                    </Col>
                    <Col md={6} className="align_only">
                        <div className="signupInner_formHolder">
                            <div className="">
                                <h2 className="section__head--mid text_is_blue">
                                    Sign up
                                </h2>
                                <p className="section__text">Let's get started with your registration, shall we?</p>

                                <form className="signupForm" onSubmit={handleSubmit}>
                                      <div className="form_element mt-2">
                                        <i className="fas fa-user pr-2"></i>
                                        <input name="fullname" onChange={handleChange} value={fullname} type="text" placeholder="Full Name" required/>
                                    </div>

                                    <div className="form_element mt-2">
                                        <i className="fas fa-user pr-2"></i>
                                        <input name="username" onChange={handleChange} value={username} type="text" placeholder="Username" required/>
                                    </div>
                                    
                                    <div className="form_element mt-2">
                                        <i className="fas fa-envelope pr-2"></i>
                                        <input name="email" onChange={handleChange} value={email} type="email" placeholder="Email" required/>
                                    </div>
                                    <div className="form_element mt-2">
                                        <i className="fas fa-phone-alt pr-2"></i>
                                        <input name="phonenumber" onChange={handleChange} value={phonenumber} type="tel" placeholder="Phone" required/>
                                    </div>
                                    <div className="form_element mt-2">
                                        <i className="fas fa-lock pr-2"></i>
                                        <input name="password" onChange={handleChange} value={password} type={showpassword ? 'text' : 'password'} placeholder="Password" required/>
                                        <i className={showpassword ? 'fas fa-eye pointer' : 'fas fa-eye-slash pointer'} onClick={() => setShowpassword(!showpassword)}></i>
                                    </div>

                                    <div className="btn_holder mt-3">
                                        <button type="submit" className="default_btn">Signup</button>
                                    </div>
                                </form>
                                  <div className="v_align mt-3">
                                    <span className="section__text--mid">Already have an account? </span>
                                    <Link to='/login'>Login Here</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <Styles/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        signup: (newUser) => dispatch(registerUser(newUser)) 
    }
}

export default connect(null, mapDispatchToProps)(Signup);
