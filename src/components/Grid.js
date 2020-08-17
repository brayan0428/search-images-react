import React from "react";
import GridItem from "./GridItem";

const Grid = ({ images, setPage }) => {
  return (
    <>
      <div className="row">
        {images.map((image) => (
          <GridItem {...image} key={image.id} />
        ))}
      </div>
      {images.length > 0 && (
        <div className="my-3 d-flex justify-content-center">
          <button className="btn btn-success mr-2" onClick={() => setPage(state => state === 1 ? state : state - 1)}>Preview</button>
          <button className="btn btn-success" onClick={() => setPage(state => state + 1)}>Next</button>
        </div>
      )}
    </>
  );
};

export default Grid;
