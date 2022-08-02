import React from 'react'
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'


const SocialMedia = () => {
  return (
    <div className="app__social">
        
    <a href="https://github.com/kadianAnirudh" className="p-text">
        <div>
            <BsGithub/>
        </div>
</a>

        <a href="https://www.linkedin.com/in/anirudh-kadian-235929233/" className="p-text">
        <div>
            <BsLinkedin/>
        </div>
        </a>

        <a href="mailto:coderanirudh@gmail.com?subject=Let's%20Talk&body=Hello%20Anirudh%20!%0D%0A%0D%0AMy%20name%20is%20....%0D%0A%0D%0A" className="p-text">
        <div>
            <SiGmail/>
        </div>
        </a>

        </div>
  )
}

export default SocialMedia