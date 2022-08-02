import React , {useState, useEffect} from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import {images} from '../../constants'
import { urlFor, client} from '../../client'
import { AppWrap } from '../../wrapper'
import {MotionWrap} from '../../wrapper'

const About = () => {

  const [abouts, setAbout] = useState([])

  useEffect(() => {
const query = '*[_type == "abouts"]'

client.fetch(query)
.then((data) => 
  setAbout(data)
)
  }, [])

  return (
<>
<h2 className="head-text"> 
<span> More </span> 
About
<span> Me </span>
 </h2>

<div className="app__profiles">
{ abouts.map((item, index)=>(
  <motion.div
  whileInView={{opacity:1}}
  whileHover={{scale:1.1}}
  transition={{duration:0.5, type:'tween'}}
  className="app__profile-item"
  key={item.title + index}
  >
<img src={urlFor(item.imgUrl)} alt={item.title}/>
<h2 className="bold-text" style={{marginTop:20}}> {item.title} </h2>
<p className="p-text" style={{marginTop:10, textAlign:'center'}}> {item.description} </p>

  </motion.div>
))}
</div>
</>
  )
}

// HOC inside HOC
export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about', "app__whitebg")

