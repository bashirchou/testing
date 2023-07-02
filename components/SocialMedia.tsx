import Image from 'next/image'
import Link from 'next/link'

export default function SocialMedia() {
    const instagram = () =>{
        window.open("https://www.instagram.com/bashirchou", "_blank");
    }
    const linkedIn = () =>{
        window.open("https://www.linkedin.com/in/labib-bashir-choudhury/", "_blank");
        
    }
    const github = () => {
        window.open(" https://github.com/bashirchou", "_blank");
       
    }
  return (<>
  <div className="mt-2 flex space-x-0.01"> 
               <img  src = "/images/instagram.png" onClick= {instagram} width = "65" height = "50"></img>
               <img src = "/images/linkedin.png" onClick = {linkedIn} width = "50" height = "50"></img>
               <img src = "/images/github.png" onClick = {github} width = "50" height = "50"></img>
              </div>
  </>
  )
}