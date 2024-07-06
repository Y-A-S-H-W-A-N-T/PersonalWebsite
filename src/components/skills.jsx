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
              <img src={node} alt='node' title="Node.js"/>
              <img src={react} alt='react' title="ReactJS"/>
              <img src={reactnative} alt='react native' title="React Native"/>
              <img src={expo} alt='expo' title="EXPO"/>
              <img src={next} alt='next' title="Next.js"/>
              <img src={redux} alt='redux' title="Redux"/>
              <img src={django} alt='django' title="Django"/>
              <img src={express} alt='express' title="Express.js"/>
              <img src={vite} alt='vite' title="Vite"/>
              <img src={mongodb} alt='mongodb' title="MongoDB"/>
              <img src={graphql} alt='graphql' title="GraphQL"/>
              <img src={firebase} alt='firebase' title="Firebase"/>
              <img src={api} alt='api'  title="REST API"/>
              <img src={mysql} alt='mysql' title="MySQL"/>
          </div>
          <div className='skills'>
              <div>
                <p>Other skills</p>
              </div>
              <img src={blender} alt='blender' title="Blender"/>
              <img src={ae} alt='ae' title="After Effects"/>
              <img src={unreal} alt='unreal' title="Unreal Engine"/>
              <img src={godot} alt='godot' title="Godot Engine"/>
              <img src={git} alt='git' title="GIT"/>
          </div>
          <div className='skills'>
              <div>
                <p>Languages</p>
              </div>
              <img src={javascript} alt='javascript' title="JavaScript"/>
              <img src={cplusplus} alt='c++' title="C++"/>
              <img src={python} alt='pyhton' title="Python"/>
          </div>
        </div>
    </motion.div>
  )
}

export default Skills