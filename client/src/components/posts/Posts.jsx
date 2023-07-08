import React from "react";
import './Posts.css'
import Post from "../post/Post";
import { Link } from "react-router-dom"

export default function Posts() {
    return (
        <div className="posts">
           <Post />
           <Link to="/post" className="link"><Post /></Link>
           <Link to="/post" className="link"><Post /></Link>
           <Link to="/post" className="link"><Post /></Link>
        </div>
    )
}