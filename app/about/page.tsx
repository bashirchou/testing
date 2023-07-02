'use client';

import Link from 'next/link'
import Options from '@/components/Options'
import { link } from 'fs';
import SocialMedia from '@/components/socialMedia';

export default function Home() {

        const handleClick = () => {
          alert("HAHAHAHA");
        };

      
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
              <SocialMedia/>
            </div>
          </div>
        );
}