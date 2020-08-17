import React from 'react'

function Form({query,setQuery, consultarApi}) {
    const onSubmit = e => {
        e.preventDefault()
        consultarApi()
    }

    return (
        <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-md-9">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
            <button className="btn btn-success btn-block">Search</button>
          </div>
        </div>
      </form>
    )
}

export default Form
