'use client';

import Link from 'next/link'
import Options from '@/components/Options'
import { link } from 'fs';

export default function Home() {

        const handleClick = () => {
          alert("HAHAHAHA");
        };
        const instagram = () =>{
            window.open("https://www.instagram.com/bashirchou", "_blank");
        }
        const linkedIn = () =>{
            window.open("https://www.linkedin.com/in/labib-bashir-choudhury/", "_blank");
            
        }
        const github = () => {
            window.open(" https://github.com/bashirchou", "_blank");
           
        }
      
        return (
          <div className="flex justify-center items-center h-screen" style={{
            background: `url("/images/background2.gif")`,
            height: '100vh', // Adjust the height as per your requirements
            width: '100%', // Adjust the width as per your requirements
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}>
            <div className="flex flex-col items-center">
              <img src="/images/grad.jpeg" width="300" height="300" alt="Graduation" />
              <div className="mt-4 flex space-x-4">
                <button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2">
                  About Me
                </button>
                <button onClick={handleClick} className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2">
                 Projects
                </button>
              </div>
              <div className="mt-2 flex space-x-0.01"> 
               <img  src = "/images/instagram.png" onClick= {instagram} width = "60" height = "50"></img>
               <img src = "/images/linkedin.png" onClick = {linkedIn} width = "50" height = "50"></img>
               <img src = "/images/github.png" onClick = {github} width = "50" height = "50"></img>
              </div>
            </div>
          </div>
        );
}