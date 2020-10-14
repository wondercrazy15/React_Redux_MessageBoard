import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, } from "react-redux";
import "./Post.scss"
// MDB
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn } from 'mdbreact';
import { Link, Redirect, useHistory, useParams } from "react-router-dom";
// Redux action
import { onPostEditDelete } from "./../../Store/action/action";
// Components
import RoundLoader from './../../Components/Loaders/RoundLoader/RoundLoader';
import CommentList from "./CommentList/CommentList";
import CommentBox from "./CommentBox/CommentBox";

function Post(props) {
    let { postId } = useParams();
    const dispatch = useDispatch();
    let allPostData = useSelector(state => state.postReducer);
    const loginUser = useSelector(state => state.loginReducer.data);

    const [isPostOnEditMode, setIsPostOnEditMode] = useState(false);

    if (allPostData && allPostData.data) {
        let { albums, comments, photos, posts, todos, users } = allPostData.data;
        let cuuruntPostData = posts && posts.length > 0 && posts.filter(post => Number(post.id) === Number(postId));
        if (cuuruntPostData.length > 0) { cuuruntPostData = cuuruntPostData[0] }
        else { cuuruntPostData = null }
        const [postTitle, setPostTitle] = useState(cuuruntPostData && cuuruntPostData.title ? cuuruntPostData.title : "");
        const [postDesc, setPostDesc] = useState(cuuruntPostData && cuuruntPostData.body ? cuuruntPostData.body : "");
        let comentList = comments && comments.length > 0 && comments.filter(comment => Number(comment.postId) === Number(postId));

        const getPostUserData = (userId) => {
            let postUser = users && users.length > 0 && users.filter(user => Number(user.id) === Number(userId));
            return postUser[0].username

        }
        const isLoginUserPost = () => {
            if (loginUser && (cuuruntPostData.userId === loginUser.id)) {
                return true
            }
            return false
        }
        const functiontofindIndexByKeyValue = (arraytosearch, key, valuetosearch) => {
            for (let i = 0; i < arraytosearch.length; i++) {
                if (arraytosearch[i][key] == valuetosearch) {
                    return i;
                }
            }
            return null;
        }
        const removeCurruntPostAllComment = () => {
            for (let index = 0; index < comments.length; index++) {
                const curruntComments = comments[index];
                if (curruntComments.postId === cuuruntPostData.id) {
                    comments.splice(index, 1)
                }
            }
        }
        const onPostDataDelete = () => {
            let index = functiontofindIndexByKeyValue(posts, "id", cuuruntPostData.id);
            if (index > -1) {
                removeCurruntPostAllComment()
                posts.splice(index, 1);
                allPostData.data.post = posts
                allPostData.data.comments = comments
                dispatch(onPostEditDelete(allPostData))
            }
        }
        const onPostDataSaveHandle = () => {
            let index = functiontofindIndexByKeyValue(posts, "id", cuuruntPostData.id);
            if (index > -1) {

                allPostData.data.posts[index].title = postTitle
                allPostData.data.posts[index].body = postDesc

                dispatch(onPostEditDelete(allPostData))
            }
            setIsPostOnEditMode(false)
        }
        const onPostEditModeActive = (isActive) => {
            setIsPostOnEditMode(isActive)
        }
        const onFormValueChange = (event) => {
            let { name, value } = event.target;
            if (name === "postTitle") {
                setPostTitle(value)
            }
            if (name === "postDesc") {
                setPostDesc(value)
            }
        }
        const onCommentDataSend = (body) => {
            if (body) {
                let comment = {
                    id: Date.now(),
                    body: body,
                    name: loginUser.name,
                    email: loginUser.email,
                    postId: cuuruntPostData.id,
                    time: "just now"

                }
                allPostData.data.comments.push(comment)
                dispatch(onPostEditDelete(allPostData))
            }

        }
        const onCommentReplySend = (body, comment) => {
            if (body && comment) {
                let index = functiontofindIndexByKeyValue(comments, "id", comment.id);
                if (index > -1) {
                    let replycomment = {
                        id: comment.id,
                        body: comment.body,
                        name: comment.name,
                        email: comment.email,
                        postId: comment.id,
                        reply: [{
                            id: Date.now(),
                            body: body,
                            name: loginUser.name,
                            email: loginUser.email,
                            time: "Just now"

                        }] }
                    // allPostData.data.comments[index]=replycomment
                    // dispatch(onPostEditDelete(allPostData))
                }

            }

        }
        return (
            <div id="Card">
                {cuuruntPostData ?
                    <MDBCard className="main-card">
                        <MDBRow>

                            <MDBCol md="4" >
                                <MDBCard reverse>
                                    <MDBCardImage cascade style={{ height: '20rem' }} src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" />
                                    <MDBCardBody cascade className="text-center">
                                        <MDBCardTitle>
                                            {isPostOnEditMode ?
                                                <MDBInput type="textarea" outline label="Title" name="postTitle" value={postTitle} onChange={onFormValueChange} rows="2" />
                                                :
                                                cuuruntPostData.title
                                            }
                                        </MDBCardTitle>
                                        {!isPostOnEditMode && <h5 className="indigo-text"><strong>{getPostUserData(cuuruntPostData.userId)}</strong></h5>}
                                        <MDBCardText>
                                            {isPostOnEditMode ?
                                                <MDBInput type="textarea" outline label="description" rows="3" name="postDesc" onChange={onFormValueChange} value={postDesc} />
                                                :
                                                cuuruntPostData.body
                                            }
                                        </MDBCardText>
                                        {!isPostOnEditMode && <div><a href="#!" className="icons-sm li-ic ml-1">
                                            <MDBIcon fab icon="linkedin-in" /></a>
                                            <a href="#!" className="icons-sm tw-ic ml-1">
                                                <MDBIcon fab icon="twitter" /></a>
                                            <a href="#!" className="icons-sm fb-ic ml-1">
                                                <MDBIcon fab icon="facebook-f" /></a>
                                        </div>}
                                    </MDBCardBody>
                                </MDBCard>

                                {isLoginUserPost() && <div className="post-action-view">
                                    {isPostOnEditMode ?
                                        <MDBBtn color="secondary" onClick={() => onPostDataSaveHandle(true)} ><MDBIcon icon="save" /> Save Post</MDBBtn>
                                        :
                                        <div>
                                            <MDBBtn color="primary" onClick={() => onPostDataDelete()}><MDBIcon icon="trash" />  Delete Post </MDBBtn>
                                            <MDBBtn color="secondary" onClick={() => onPostEditModeActive(true)} ><MDBIcon icon="edit" /> Edit Post</MDBBtn>
                                        </div>
                                    }
                                </div>}
                            </MDBCol>
                            <MDBCol md="8" >
                                <CommentList comments={comentList} onCommentReplyDataSend={onCommentReplySend} />
                                <CommentBox onCommentSend={onCommentDataSend} title="Type your comments" btnText="Comment" />


                            </MDBCol>

                        </MDBRow>
                        <RoundLoader loading={allPostData.loading} size={80} />
                    </MDBCard>
                    :
                    <Redirect to="/home" />
                }
            </div>
        )
    }
    return (
        <RoundLoader loading={true} size={80} />
    )
}

export default Post