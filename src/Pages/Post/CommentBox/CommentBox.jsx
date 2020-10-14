

import React, { Component, useState } from "react";
import "./CommentBox.scss";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn } from 'mdbreact';

function CommentBox({ onCommentSend, title, btnText }) {
    const [body, setBody] = useState("");
    const onFormValueChange = (event) => {
        let { name, value } = event.target;
        if (name === "body") {
            setBody(value)
        }
    }
    const onCommentDataSend = () => {
        onCommentSend(body)
        setBody("")
    }
    return (
        <div id="CommentBox">
            <h6 className="box-title">{title}</h6>
            <MDBInput type="textarea" outline label={btnText} name="body" onChange={onFormValueChange} value={body} rows="3" />
            <div className="action-view ">
                <MDBBtn color="primary" onClick={() => onCommentDataSend()}> <MDBIcon far icon="share-square" /> {btnText} </MDBBtn>
            </div>

        </div>
    );
}

export default CommentBox
