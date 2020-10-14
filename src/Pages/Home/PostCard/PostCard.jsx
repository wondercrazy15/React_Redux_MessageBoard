import React from 'react';
import { Link, } from "react-router-dom";

import "./PostCard.scss"
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const PostCard = ({ post, users, comments, loginUser }) => {

    const getPostUserData = (userId) => {
        let postUser = users && users.length > 0 && users.filter(user => user.id === userId);
        return postUser[0].username

    }
    const getCommentListOnPostId = (postId) => {
        let comentList = comments && comments.length > 0 && comments.filter(comment => comment.postId === postId);
        return comentList.length

    }

    return (

        <MDBCard cascade id="PostCard">
            <MDBCardImage
                cascade
                className='img-fluid'
                overlay="white-light"
                hover
                src='https://mdbootstrap.com/img/Photos/Others/food.jpg'
            />
  
            <MDBCardBody cascade>
                <MDBCardTitle> {getPostUserData(post.userId)}</MDBCardTitle>
                <hr />
                <MDBCardText>
                    {/* {post.body} */}
                    {post.title}
                </MDBCardText>

                <Link to={"/post/" + post.id} params={{ id: post.id }} className='black-text d-flex justify-content-end'>
                    <h5>
                        View Post  <MDBIcon icon='angle-double-right' className='ml-2' />
                    </h5>
                </Link>

            </MDBCardBody>
            <div className='rounded-bottom mdb-color card-footer text-center pt-3'>
                <ul className='list-unstyled list-inline font-small'>
                    <li className='list-inline-item pr-2 white-text'>
                        <MDBIcon far icon='clock' /> 05/10/2015
              </li>
                    <li className='list-inline-item pr-2'>
                        <a href='#!' className='white-text'>
                            <MDBIcon far icon='comments' className='mr-1' />
                            {getCommentListOnPostId(post.id)}
                        </a>
                    </li>
                    {/* <li className='list-inline-item pr-2'>
                        <a href='#!' className='white-text'>
                            <MDBIcon fab icon='facebook-f' className='mr-1' />
                  21
                </a>
                    </li>
                    <li className='list-inline-item'>
                        <a href='#!' className='white-text'>
                            <MDBIcon fab icon='twitter' className='mr-1' />5
                </a>
                    </li> */}
                </ul>
            </div>
        </MDBCard>

    )
}

export default PostCard;