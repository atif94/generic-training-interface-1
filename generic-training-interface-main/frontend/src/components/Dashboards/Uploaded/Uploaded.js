
import React, { useEffect, useState } from "react";

import MainNavbarInstructor from "../../Navbars/MainNavbar/MainNavbarInstructor";
import "./Uploaded.css";
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';

const Uploaded = () => { 
  const [texts, setTexts] =  useState([])

  useEffect(() => {
    get_data()
  }, []);

  const get_data = async () => {
    const url = 'http://34.221.185.65:5000/admin/getAsset?asset-id=1'
    const result = await fetch(url)
    const response = await result.json()
    setTexts(response)
  }

 return (
    <div className="dashboard">
    <MainNavbarInstructor />

    <div className="user-info">
      <h2>
      Uploaded Courses
        <div className=" container row" style={{padding:"2%"}}>
              <div className="row">
                <div className="col-sm-4" >
                </div>
                <div className="col-sm-8">
                    <div className='row'>
                      <div className='col-sm in-progress'>
                        <div className="row">
                          <div className="col-sm-3 " style={{textAlign: "center", marginTop:"2%", fontSize:"45px"}}>2</div>
                          <div className="col-sm-9" style={{fontSize:"20px", marginTop:"4%"}}>Uploaded Courses</div>
                        </div>
                        </div>
                      <div className='col-sm completed'>
                         <div className="row" style={{padding:"2%"}}>
                           <div className="col-sm-4 " style={{textAlign: "center", marginTop:"2%", fontSize:"45px"}}>10</div>
                           <div className="col-sm-8" style={{fontSize:"20px", marginTop:"3%"}}>Published Courses </div>
                         </div>
                      </div>
                      <div className='col-sm enrolled' >
                      <div className="row">
                           <div className="col-sm-3 " style={{textAlign: "center", marginTop:"2%", fontSize:"45px"}}>1</div>
                           <div className="col-sm-9" style={{fontSize:"20px", marginTop:"4%"}}>Unpublished Courses</div>
                         </div>
                      </div>
                  </div>            
                </div>
              </div>
      </div>
        
        
      </h2>
    </div>
    <div className="container" style={{marginTop:"2%"}}>
    <div>
  <Table responsive="sm">
    <thead>
      <tr>    
        <td>#</td>  
        <th>Asset Title</th>
        <th>Asset Content</th>
        <th>Date Upload</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
      {texts.map((t, idx)=>
      <tr>
      <td>{idx+1}</td>
        <td>{t.asset_title}</td>
        <td>{t.asset_text || t.asset_url}</td>
        <td>{t.last_update}</td>
        <td>
          {t.published  ? 
          <Badge pill bg="success">Published</Badge>
          : 
          <Badge pill bg="warning">Not Published</Badge>
          }
        </td>
      </tr>
      
      )}  
    </tbody>
  </Table>
  </div>
    </div>
   
  </div>
  );
}

export default Uploaded;