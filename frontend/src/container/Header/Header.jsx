import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { HiOutlineReceiptTax } from 'react-icons/hi'
import {AppWrap} from '../../wrapper'

const Header = () => {

const scaleVariants = {
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition: {
      duration:1, ease: 'easeInOut'
    }
  }
}

  return (
    // PARENT : ABSOLUTE PARENT 
    <div className="app__header app__flex">
  {/*  CHILD 1 : CONTAINS TEXT OF NAME  */}
<motion.div 
// -100 to 0 means that it would animate with 0 to 1 opacity for 0.5 secs from left to right 100 is px that are moved. 
whileInView={{x : [-100, 0] , opacity: [0,1] }}
transition={{duration: 0.5}} 
className="app__header-info"
>

<div className="app__header-badge">

{/* CHILD 1.1 */}
  <div className="badge-cmp app__flex">
    <span>👋</span>
    <div style={{marginLeft: 20}}>
<p className="p-text"> Hello, I am </p>
<h1 className="head-text"> Anirudh </h1> 
    </div>
  </div>

<div className="tag-cmp app__flex">
<p className="p-text"> Full Stack  </p>
<p className="p-text"> Developer </p>
</div>
</div>

</motion.div>

  {/*  CHILD 2 : IMAGE OF HOST  */}
<motion.div
whileInView={{ opacity: [0,1] }}
transition={{duration: 1, delayChildren:0.5 }} 
className="app__header-img"
>
<img src={images.profile} alt="profile"/>

{/* Img here is the image of the person */}
<motion.img
whileInView={{ scale: [0,1] }}
transition={{duration: 1, ease:'easeInOut' }} 
// className="app__header-img"
src={images.circle}
className="overlay_circle"
/>
</motion.div>
 
  {/*  CHILD 3 : IMAGE OF SKILLS  */}
<motion.div
variant={scaleVariants}
whileInView={scaleVariants.whileInView}
className="app__header-circles"
>
{[images.node, images.react, images.redux].map((item, index)=>(
  <div className="circle-cmp app__flex" key={`circle=${index}`}>
  <img src={item} alt="circle"/>
  </div>
))
}
</motion.div>


    </div>
  )
}

export default AppWrap(Header, 'home');