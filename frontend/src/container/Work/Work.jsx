import React, {useState, useEffect} from 'react'
import './Work.scss'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import {motion} from 'framer-motion'
import {AppWrap} from '../../wrapper'
// client and urlFor are being imported because this section needs a sanit connection
import { urlFor, client } from '../../client'
import {MotionWrap} from '../../wrapper'


const Work = () => {

const [activeFilter, setActiveFilter] = useState('All');  

const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});  

const [work, setWork] = useState([]);  

const [filterWork, setFilterWork] = useState([]);  


useEffect(() => {
const query = '*[_type == "works"]'

client.fetch(query)
.then((data)=>{
  // the work and filter will now be populated with value of works from sanity. 
  setWork(data)
  setFilterWork(data)
})
}, [])

const handleWorkFilter = (item) => {
  // active filter is created into one of the filter values ex React JS 
   setActiveFilter(item);
   setAnimateCard([{y:100, opacity:0}])

   // after 0.5 secs , animate the card to show up 
setTimeout(()=>{
  setAnimateCard([{y:0, opacity:1}])

  if (item ==='All'){
    setFilterWork(work);
  } else {
setFilterWork(work.filter((w)=>w.tags.includes(item)))

  }
}, 500)
  }

  return (
<>
<h2 className="head-text"> 
<span> My Projects  </span> 
/
<span> Work </span>
</h2>

<h2 className="p-text croatia"> [ Hover over the images ]  </h2>

<div className="app__work-filter">
{['FrontEnd', 'FullStack', 'Backend', 'React Native', 'React JS', 'All' ].map((item, index)=> (
  
    <div key={index} onClick={() => {handleWorkFilter(item)}}
    className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}>
    {item}
    </div>

  ))}

</div>

<motion.div
animate={animateCard}
transition={{duration:0.5, delayChildren: 0.5}}
className="app__work-portfolio"
>
      
{filterWork.map((work, index)=>(
  <div className="app__work-item app__flex" key={index}>

<div
              className="app__work-img app__flex"
            >
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>


{/* TITLE AND DESC */}
<div className="app__work-content app__flex">
  <h4 className="bold-text">
    {work.title}
  </h4>
  <p className="p-text" style={{marginTop:10, textAlign: 'center', }}> 
{work.description}
  </p>

  <div className="app__work-tag app__flex">
    <p className="p-text">
      {work.tags[0]}
    </p>
  </div>
</div>

  </div>
))}

      </motion.div>
  


</>
    )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'), 
  'work', "app__primarybg")