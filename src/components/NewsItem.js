// import React, { Component } from "react";

const NewsItem =(props)=>{
    let { title, description, imageUrl,newsUrl,author,date } = props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/megaraptors-sixteen_nine.jpg?VersionId=dzFvE55hg060qM.1uMPvvDHHB7zemE89":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-info ">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
