import React, { useState } from 'react'
import './project.css'

function Projects() {
    const [projectDetail,setProjectDetail]=useState([
        {num:1,name:'2X4 Drop-in-T-Bar(1/2 Flex)',length:'100 M',quan:'-'},
        {num:2,name:'Surface Fluor Fixt',length:'-',quan:'120'},
        {num:3,name:'1/2 EMT DC SS Connector',length:'-',quan:'270'},
        {num:4,name:'2X4 Drop-in-T-Bar(1 Flex)',length:'1200 M',quan:'-'},
        {num:5,name:'3 EMT DC SS Connector',length:'-',quan:'500'},
        {num:6,name:'2X6 Surface Fluor Fixt',length:'-',quan:'1200'}
        
    ])
  return (
    <div>
            <div className='list-tools'>
                <div>
                    <input type="text" className='category_search_input project-serch' placeholder='Search Projects' />
                </div>

                <div className='d-flex gap-5'>
                    <div className='d-flex gap-4'>
                        <p className='my-auto quote_title'>Sort by</p>
                        <div class="dropdown">
                            <button class="btn text-black dropdown-toggle bg-white dummy-shadow-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Name
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Date</a></li>
                                <li><a class="dropdown-item" href="#">Created</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button className='dummy-shadow-btn btn bg-white'>Import<i class="fa-solid fa-arrow-down ms-3"></i></button>
                    </div>
                </div>
            </div>

            <div className='list_table_cont table-responsive'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Sl No</th>
                            <th scope="col">Assembly Name</th>
                            <th scope="col">Length</th>
                            <th scope="col">Quantity</th>
                            <th scope="col"></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            projectDetail?.map((i)=>(
                        
                                <tr>
                                    <th scope="row"><i class="fa-solid fa-caret-right"></i></th>
                                    <td>{i.num}</td>
                                    <td>{i.name}</td>
                                    <td className='text-primary'>{i.length}</td>
                                    <td className='text-primary'>{i.quan}</td>
                                    <td><button className='btn text-primary' ><i class="fa-solid fa-trash"></i></button></td>
                                </tr>
                                ))}
                    </tbody>

                   
                </table>
            </div>

        </div>
  )
}

export default Projects