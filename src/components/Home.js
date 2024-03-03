import React from 'react'
import AllJobs from './DisplayJobs'

function Home() {
  return (
    <div>
      <fieldset>
        <form className="d-flex">
          <input className="form-control" type="search" placeholder="Skills" aria-label="Search" />
          <input className="form-control" type="search" placeholder="experience" aria-label="Search" />
          <input className="form-control" type="search" placeholder="location" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </fieldset>
      <AllJobs />
    </div>
  )
}

export default Home
