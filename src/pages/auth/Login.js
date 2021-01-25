import React, {useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import loginImg from '../../assets/images/login.png';
import {loginUser} from '../../redux/Actions/authActions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Signup = ({login}) => {

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

                    .form_element {
                        border-bottom: 1px solid lightgray;
                        width: 90%;
                    }

                    .form_element input {
                        width: 85%;
                        outline: none;
                        padding: 0.6em;
                        border: none;
                        background: #fff;
                        transition: all 0.35s ease;
                    }

                    .form_element i {
                        color: #95abdc;
                    }

                    .form_element:focus,
                    .form_element:hover {
                        border-bottom: 1px solid var(--default_blue);
                    }

                    @media (max-width: 766px){
                        .signupInner_formHolder{
                            width: 90%;
                        }
                    }
                     `
                }</style>
        )
    }

    const [showpassword,
        setShowpassword] = useState(false);

    const formFields = {
        email: '',
        password: ''
    }

    const [loginData,
        setLoginData] = useState(formFields);

    const {email, password} = loginData;

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login(loginData);

        setLoginData({
            ...loginData,
            email: '',
            password: ''
        });
    }

    return (
        <div>
            <div className="signup center">
                <Row className="signupInner w-100">
                    <Col md={6} className="hasBgColor align_only">
                        <div className="signupInner_imgHolder">
                            <img src={loginImg} alt="" className="w-100"/>
                        </div>
                    </Col>
                    <Col md={6} className="align_only">
                        <div className="signupInner_formHolder">
                            <div className="">
                                <h2 className="section__head--mid text_is_blue">
                                    Sign In
                                </h2>
                                <p className="section__text">Welcom Back, Its been a while</p>

                                <form className="signupForm" onSubmit={handleSubmit}>
                                    <div className="form_element mt-2">
                                        <i className="fas fa-envelope pr-2"></i>
                                        <input
                                            name="email"
                                            onChange={handleChange}
                                            value={email}
                                            type="email"
                                            placeholder="Email"
                                            required/>
                                    </div>

                                    <div className="form_element mt-2">
                                        <i className="fas fa-lock pr-2"></i>
                                        <input
                                            name="password"
                                            onChange={handleChange}
                                            value={password}
                                            type={showpassword
                                            ? 'text'
                                            : 'password'}
                                            placeholder="Password"
                                            required/>
                                        <i
                                            className={showpassword
                                            ? 'fas fa-eye pointer'
                                            : 'fas fa-eye-slash pointer'}
                                            onClick={() => setShowpassword(!showpassword)}></i>
                                    </div>

                                    <div className="btn_holder mt-3">
                                        <button type="submit" className="default_btn">Login</button>
                                    </div>

                                </form>
                                <div className="v_align mt-3">
                                    <span className="section__text--mid">Dont have an account? </span>
                                    <Link to='/register'>Register Here</Link>
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
    return {
        login: (oldUser) => dispatch(loginUser(oldUser))
    }
}

export default connect(null, mapDispatchToProps)(Signup);
