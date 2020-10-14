import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import "./Login.scss"

// Redux
import { useDispatch, useSelector, } from "react-redux";
import { Link, Redirect, useHistory, useParams } from "react-router-dom";
import { loginUserData } from "./../../Store/action/action";

function Login() {
    const allPostData = useSelector(state => state.postReducer);
    const loginUser = useSelector(state => state.loginReducer.data);
    const dispatch = useDispatch();
    const [email, setEmail] = useState("Sincere@april.biz");
    const onFormValueChange = (event) => {
        let { name, value } = event.target;
        if (name === "email") {
            setEmail(value)
        }

    }
    const onLoginHandle = () => {
        if (email && allPostData && allPostData.data) {
            const { albums, comments, photos, posts, todos, users } = allPostData.data;
            let loginUser = users && users.length > 0 && users.filter(user => user.email === email);
            loginUser = loginUser[0]
            if (loginUser) {
                dispatch(loginUserData(loginUser))
            }
        }
    }
    return (
        <MDBContainer id="Login">
            {loginUser && <Redirect to="/home" />}
            <MDBCard>
                <div className="header pt-3 grey lighten-2">
                    <MDBRow className="d-flex justify-content-start">
                        <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                            Log in
                       </h3>
                    </MDBRow>
                </div>
                <MDBCardBody className="mx-4 mt-4">
                    <MDBInput label="Email Address" group type="text" name="email" value={email} onChange={onFormValueChange} />
                    <div className="text-center mb-4 mt-5">
                        <MDBBtn
                            color="secondary"
                            type="button"
                            className="btn-block z-depth-2"
                            onClick={() => onLoginHandle()}
                        >
                            Log in
                       </MDBBtn>
                    </div>

                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    )
}

export default Login