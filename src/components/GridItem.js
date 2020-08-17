import React from "react";

const GridItem = ({largeImageURL,views, downloads, tags}) => {
  return (
    <div className="col-md-4 my-2">
      <div className="card">
        <img
          lazyload="true"
          className="card-img"
          src={largeImageURL}
          alt={tags}
        />
        <div className="card-body">
          <p><b>tags:</b> {tags}l</p>
          <p><b>views:</b>{views}</p>
          <p><b>downloads:</b>{downloads}</p>
          <a rel="nofollow noopener noreferrer" href={largeImageURL} target="_blank" className="btn btn-primary mt-2">View image</a>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
