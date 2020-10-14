import React, { useState } from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBCardTitle, MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import "./CommentList.scss"
import { Link } from 'react-router-dom';
import CommentBox from "./../CommentBox/CommentBox"
const CommentList = ({ comments, onCommentReplyDataSend }) => {
    const [commentViewActiveId, setCommentViewActiveId] = useState(null);
    const onCommentViewShowHandle = (id) => {
        if (id === commentViewActiveId) {
            setCommentViewActiveId(null)
        }
        else {
            setCommentViewActiveId(id)
        }
    }
    const onCommentReplySend = (body, comment) => {
        onCommentReplyDataSend(body, comment)
        setCommentViewActiveId(null)
    }
    return (
        <MDBListGroup id="CommentList" >
            <MDBCardTitle>
                <div>
                    Comments ({comments.length})
                </div>
                <Link to="/home" className="btn-secondary btn Ripple-parent" >
                    <MDBIcon icon="long-arrow-alt-left" /> Back
                </Link>

            </MDBCardTitle>
            <div className="comment-list-main">
                <div className="comment-list-sub">
                    {comments && comments.map((comment, index) =>
                        <MDBListGroupItem active={false} key={index}>
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{comment.name}</h5>
                                <small>{comment.time ? comment.time : "3 days ago"}</small>
                            </div>
                            <p className="mb-1">{comment.body}</p>
                            <div className="d-flex w-100 justify-content-between     align-items-center">
                                <small>{comment.email}</small>
                                <MDBBtn color="indigo" size="sm" onClick={() => onCommentViewShowHandle(comment.id)}>
                                    <MDBIcon icon={commentViewActiveId === comment.id ? "chevron-up" : "chevron-down"} />
                                </MDBBtn>
                            </div>
                            {console.log("comment.reply----", comment && comment.reply)}
                            {commentViewActiveId === comment.id && <div className="comment-and-reply">
                                {comment.reply && comment.reply.length > 0 && comment.reply && comment.reply.map((reply, repIndex) =>
                                    <div className="reply-list" key={repIndex}>
                                        <MDBListGroupItem active={false}>
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1">{reply.name}</h5>
                                                <small>{reply.time ? reply.time : "3 days ago"}</small>
                                            </div>
                                            <p className="mb-1">{reply.body}</p>
                                            <small>{reply.reply.email}</small>
                                        </MDBListGroupItem>
                                    </div>
                                )}
                                <CommentBox title="Reply on this comment" btnText="Reply" onCommentSend={(body) => onCommentReplySend(body, comment)} />

                            </div>
                            }
                        </MDBListGroupItem>)}
                </div>
            </div>
        </MDBListGroup>
    );
};

export default CommentList;
