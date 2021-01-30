import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";

const ProtectedRoute = ({component: Component, isLoggedIn, isRegistered, ...rest}) => {
    return(
        <Route {...rest} render={(props) => {
            if(isRegistered || isLoggedIn){
                return(
                <Component {...props}/>
                )
            }else{
                return(
                    <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    } />
                )
            }
        }} />
    )
}

const mapStateToProps = (state) => {
    return{
        isRegistered: state.auth.isRegistered,
        isLoggedIn: state.auth.isLoggedIn
    }
}

export default connect(mapStateToProps, null)(ProtectedRoute);