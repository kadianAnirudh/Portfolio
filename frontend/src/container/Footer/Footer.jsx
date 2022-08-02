import React , {useState} from 'react'
import './Footer.scss'
import {images} from '../../constants'
import {AppWrap, MotionWrap} from '../../wrapper'
import {client} from '../../client'

const Footer = () => {

const[formData, setFormData] = useState({
  name : '',
  email : '',
  message : ''
})

const[isFormSubmitted, SetIsFormSubmitted] = useState(false);

const [loading, setLoading] = useState(false);

// object destructuring
const {name, email, message} = formData;

const handleChangeInput = (e) => {
  // for the target, pick the name and value
const { name, value } = e.target
// Change the name into the value
setFormData({
  ...formData, [name] : value
})
}

const handleSubmit = () => {
  setLoading(true)

  const contact = {
    _type : 'contact',
    // the name here is formData.name which has already been defined
    name : formData.name,
    email : formData.email,
    message : formData.message
  }

  client.create(contact)
  .then(()=>{
    // if the create is successful, set the below mentioned states to true.
    setLoading(false);
    SetIsFormSubmitted(true);
  })
  .catch((err)=>console.error(err))
}

  return (
<>
<h2 className="head-text">
  Grab a ☕ and let's talk!
</h2>

<div className="app__footer-cards">
  {/* CARD 1 */}
  <a href="mailto:coderanirudh@gmail.com?subject=Let's%20Talk&body=Hello%20Anirudh%20!%0D%0A%0D%0AMy%20name%20is%20....%0D%0A%0D%0A" className="p-text">
  <div className="app__footer-card">
    <img src={images.email} alt="email"/>
        coderanirudh@gmail.com
  </div>
  </a>


  {/* CARD 2 */}
  <a href="https://wa.link/ha27je" className="p-text">
  <div className="app__footer-card">
    <img src={images.whatsapp} alt="email"/>
    Whatsapp Chat 
  </div>
  </a>

  <a href="https://www.linkedin.com/in/anirudh-kadian-235929233/" className="p-text">
  <div className="app__footer-card">
    <img src={images.linkedin} alt="email"/>
    LinkedIn
  </div>
  </a>

    <a href="https://github.com/kadianAnirudh" className="p-text">
  <div className="app__footer-card">
    <img src={images.github} alt="email"/>
        Git Hub
  </div>
  </a>

</div>



{/* { !isFormSubmitted ? 
(
// IF FORM NOT SUBMITTED SHOW THIS
<div className="app__footer-form app__flex">
<div className="app__flex">
  <input className="p-text" type="text" placeholder="Your Name" value={name} name="name" onChange={handleChangeInput}/>
  </div>

  <div className="app__flex">
  <input className="p-text" type="text" placeholder="Your Email" value={email} name="email" onChange={handleChangeInput}/>
</div>

<div>
  <textarea className="p-text" placeholder="Your Message" value={message} name="message" onChange={handleChangeInput}/>
</div>

<button type="button" className="p-text" onClick={handleSubmit}> {!loading ? 'Send Message' : 'Sending...'} </button>
</div>
)
: 
(
// ELSE THIS
<div>
  <h3 className="head-text"> Thank you for getting in touch! </h3>
</div>
) */}


</>
  )
}


export default AppWrap
(MotionWrap(Footer, 'app__footer'), 
'contact', 
'app__whitebg')