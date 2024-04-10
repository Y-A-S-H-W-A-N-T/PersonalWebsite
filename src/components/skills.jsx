import { motion } from "framer-motion"
import '../stylesheet/skill.css'
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

function Skills() {
  return (
    <motion.div className='about'
    initial={{ y: -300, opacity: 0, transition: '1000ms'}}
    animate={{ y: 0, opacity: 1, transition: '1000ms' }}
    exit={{ y: 300,  opacity: 0, transition: '1000ms' }}>
        <div className="skill_set">
          <div className='skills'>
              <div>
                  <p>Frameworks</p>
              </div>
              <img src={node} alt='node'/>
              <img src={react} alt='react'/>
              <img src={reactnative} alt='react native'/>
              <img src={expo} alt='expo'/>
              <img src={next} alt='next'/>
              <img src={redux} alt='redux'/>
              <img src={django} alt='django'/>
              <img src={express} alt='express'/>
              <img src={vite} alt='vite'/>
              <img src={mongodb} alt='mongodb'/>
              <img src={graphql} alt='graphql'/>
              <img src={firebase} alt='firebase'/>
              <img src={mysql} alt='mysql'/>
          </div>
          <div className='skills'>
              <div>
                <p>Other skills</p>
              </div>
              <img src={blender} alt='blender'/>
              <img src={ae} alt='ae'/>
              <img src={unreal} alt='unreal'/>
              <img src={godot} alt='godot'/>
              <img src={api} alt='api'/>
              <img src={git} alt='git'/>
          </div>
          <div className='skills'>
              <div>
                <p>Languages</p>
              </div>
              <img src={javascript} alt='javascript'/>
              <img src={cplusplus} alt='c++'/>
              <img src={python} alt='pyhton'/>
          </div>
        </div>
    </motion.div>
  )
}

export default Skills