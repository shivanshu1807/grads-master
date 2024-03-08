// import React from 'react';
// import AllJobs from './DisplayJobs';
// import { Link } from 'react-router-dom';
// import './styles/home.css'; 
// import bg1 from './bg1.jpg'

// function Home() {
//   return (
//     <div className='container'>
//       <img src={bg1} alt="" className='bg1 img-fluid' />
//       <fieldset className='full'>
//         <form className="d-flex relative-container">
//           <div className=" form-content">
//             <input className="i1 form-control small-input" type="search" placeholder="Skills" aria-label="Search" />
//             <input className="i1 form-control small-input" type="search" placeholder="Experience" aria-label="Search" />
//             <select name="Location" id="" className='l1'>
//               <option value="default">Location</option>
//               <option value="Uttar Pradesh">Uttar Pradesh</option>
//             </select>
//             <button className="s1 btn btn-outline-success" type="submit">Search</button>
//           </div>
//         </form>
//         </fieldset>
//       <AllJobs />
      
//     </div>
//   );
// }

// export default Home;

import React from 'react';
import AllJobs from './DisplayJobs';
import { Link } from 'react-router-dom';
import './styles/home.css'; 
import bg1 from './bg1.jpg';

function Home() {
  return (
    <>
    <div className='container'>
      {/* Background image */}
      <img src={bg1} alt="" className='bg1 img-fluid' />

      {/* Search form */}
      <fieldset className='search-fieldset'>
        <form className="d-flex relative-container">
          <div className="form-content">
            <input className="i1 form-control small-input" type="search" placeholder="Skills" aria-label="Search" />
            <input className="i1 form-control small-input" type="search" placeholder="Experience" aria-label="Search" />
            <select name="Location" id="" className='l1'>
              <option value="default">Location</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
            </select>
            <button className="s1 btn btn-outline-success" type="submit">Search</button>
          </div>
        </form>
      </fieldset>

      {/* Displaying jobs using AllJobs component */}
    </div>
    <AllJobs/>
    </>
  );
}

export default Home;

