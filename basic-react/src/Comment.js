import React from 'react'

const Comment = (props) => {
    return (
        <div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={props.src} alt="img"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.time}</span>
                    </div>
                    <div className="text">{props.msg}</div>
                </div>
            </div>
        </div>
    )
}

export default Comment;
