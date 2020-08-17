import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Grid from "./components/Grid";

function App() {
  const [query, setQuery] = useState("")
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)

  const consultarApi = async () => {
    try {
      const response = await fetch(`https://pixabay.com/api/?key=17928998-66b5b81652dee44d173adfa4c&q=${query}&per_page=30&page=${page}`)
      const {hits} = await response.json()
      setImages(hits)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if(query !== "" && page > 0){
      consultarApi()
    }
  }, [page])

  return (
    <div className="container">
      <h1 className="text-center mt-5">Search Images</h1>
      <h6 className="mb-5 text-white text-center"><i>Development by: Brayan Llanos</i></h6>
      <Form query={query} setQuery={setQuery} consultarApi={consultarApi}/>
      <Grid images={images} setPage={setPage} />
    </div>
  );
}

export default App;
