import React, { useState } from 'react'
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../stylesheet/projects.css'
import node from '../stylesheet/logos/node.png'
import react from '../stylesheet/logos/react.png'
import reactnative from '../stylesheet/logos/reactnative.png'
import expo from '../stylesheet/logos/expo.png'
import redux from '../stylesheet/logos/redux.png'
import django from '../stylesheet/logos/django.png'
import express from '../stylesheet/logos/express.png'
import ae from '../stylesheet/logos/ae.png'
import mongodb from '../stylesheet/logos/mongodb.png'
import git from '../stylesheet/logos/git.png'
import firebase from '../stylesheet/logos/firebase.png'
import api from '../stylesheet/logos/api.png'
import mysql from '../stylesheet/logos/mysql.png'
import next from '../stylesheet/logos/next.png'
import godot from '../stylesheet/logos/godot.png'
import unreal from '../stylesheet/logos/unreal.png'
import vite from '../stylesheet/logos/vite.png'
import graphql from '../stylesheet/logos/graphql.png'
import blender from '../stylesheet/logos/blender.png'
import javascript from '../stylesheet/logos/javascript.png'
import cplusplus from '../stylesheet/logos/c++.png'
import python from '../stylesheet/logos/python.png'
import socket from '../stylesheet/logos/socket.png'
import chatgpt from '../stylesheet/logos/chatgpt.png'
import amazonpoly from '../stylesheet/logos/amazonpoly.png'
import npm from '../stylesheet/logos/npm.png'
import restfullapi from '../stylesheet/logos/restfullapi.png'
import rapid from '../stylesheet/logos/rapid.png'
import vercel from '../stylesheet/logos/vercel.png'
import Proj from '../assets/projectList.jsx'

function Projects() {
                  //0   1     2     3        4       5   6       7           8       9    10           11     12     13    14        15   16     17    18
  const Images = [node,react,vite,firebase,blender,next,mongodb,restfullapi,express,expo,reactnative,socket,chatgpt,rapid,amazonpoly,npm,vercel,redux,graphql]
  const [selectedProject,setSelectedProject] = useState(0)

  return (
    <motion.div
    initial={{ y: -300, opacity: 0, transition: '1000ms'}}
    animate={{ y: 0, opacity: 1, transition: '1000ms' }}
    exit={{ y: 300,  opacity: 0, transition: '1000ms' }}
    >
      <div className='proj'>
        <div class="proj-titles">
          <p style={{color: selectedProject==0? 'red':'black',fontFamily: selectedProject==0? 'comic_fill':'comics'}} onClick={()=>setSelectedProject(0)}>XCHANGE</p>
          <p style={{color: selectedProject==1? 'red':'black',fontFamily: selectedProject==1? 'comic_fill':'comics'}} onClick={()=>setSelectedProject(1)}>WELLING</p>
          <p style={{color: selectedProject==2? 'red':'black',fontFamily: selectedProject==2? 'comic_fill':'comics'}} onClick={()=>setSelectedProject(2)}>TRANSLATOR</p>
          <p style={{color: selectedProject==3? 'red':'black',fontFamily: selectedProject==3? 'comic_fill':'comics'}} onClick={()=>setSelectedProject(3)}>COGNIZANCE</p>
          <p style={{color: selectedProject==4? 'red':'black',fontFamily: selectedProject==4? 'comic_fill':'comics'}} onClick={()=>setSelectedProject(4)}>VR ESTATE</p>
          <p style={{color: selectedProject==5? 'red':'black',fontFamily: selectedProject==5? 'comic_fill':'comics'}} onClick={()=>setSelectedProject(5)}>HARRY POTTER</p>
          <p style={{color: selectedProject==6? 'red':'black',fontFamily: selectedProject==6? 'comic_fill':'comics'}} onClick={()=>setSelectedProject(6)}>BLENDER</p>
        </div>
        <div className='proj-des'>
          <div className='skills-used'>
            {
              Proj[selectedProject].Skills.map((val)=>(
                <img src={Images[val]} alt='firebase'/>
              ))
            }
          </div>
            <div className='des'>
              {Proj[selectedProject].description} 
            </div>
            <div className='proj-link'>
              <Link to={Proj[selectedProject].Project_Link} target='_blank'><p style={{color: 'orchid', fontFamily: 'cursive'}}>Project Link</p></Link> {Proj[selectedProject].hosted && <Link to={Proj[selectedProject].hosted} target='_blank' style={{marginLeft: '50%'}}><p style={{color: 'orchid', fontFamily: 'cursive'}}>Link</p></Link>}
            </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects