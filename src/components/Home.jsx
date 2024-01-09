import React from 'react'
import Header from './Header'
import Aside from './Aside'
import Catogaries from './Tables/Catogaries'
import Job from './Tables/Job'
import { Route, Routes } from 'react-router-dom'
import Subcategories from './Subcategories'
import Assemblies from './Tables/Assemblies'


function Home() {
  return (
      <>
      <div className=''>
        <Header></Header>
      </div>
      <div className='content_parent d-flex'>
        <Aside></Aside>
        <div className='main_parent'>
          <div className='categories_parent'>
            <Routes>
              <Route path='/' element={<Catogaries></Catogaries>}></Route>
              <Route path='/subCat' element={<Subcategories></Subcategories>}></Route>
              <Route path='/assemble' element={<Assemblies></Assemblies>}></Route>
            </Routes>
          </div>
          <div className='home_divider'></div>
          <div className='job_area_parent'>
            <Job></Job>
          </div>
        </div>
      </div>

    </>

  )
}

export default Home