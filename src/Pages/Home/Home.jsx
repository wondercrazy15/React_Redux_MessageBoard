import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector, } from "react-redux";
import "./Home.scss";
// MDB
import { MDBRow, MDBCol } from 'mdbreact';
// Components
import Pagenation from "./../../Components/Pagination/Pagenation"
import RoundLoader from './../../Components/Loaders/RoundLoader/RoundLoader';
import PostCard from "./PostCard/PostCard.jsx"

function Home(props) {
    const dispatch = useDispatch();
    let allPostData = useSelector(state => state.postReducer);
    const loginUser = useSelector(state => state.loginReducer.data);

    if (allPostData && allPostData.data) {
        let { albums, comments, photos, posts, todos, users } = allPostData.data
        const [postItemsByPage, setPostItemsByPage] = useState([]);

        const onChangePage = (postItemsByPage) => {
            setPostItemsByPage(postItemsByPage)
        }
        if (!loginUser) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div id="Home">
                <MDBRow>
                    {postItemsByPage && postItemsByPage.length > 0 && postItemsByPage.map((post, index) =>
                        <MDBCol md="2" key={index}>
                            <PostCard post={post} users={users} comments={comments} loginUser={loginUser} />
                        </MDBCol>
                    )}
                    <MDBCol md="12">
                        <Pagenation items={posts} onChangePage={onChangePage} initialPage={1} itemPerPage={12} />
                    </MDBCol>
                </MDBRow>
                <RoundLoader loading={allPostData.loading} size={80} />
            </div>
        );
    }
    return (
        <RoundLoader loading={true} size={80} />
    )

}

export default Home
