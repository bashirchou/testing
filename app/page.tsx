'use client';

import SocialMedia from '@/components/SocialMedia';

export default function Home() {
        const handleContact = () => {

        }
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
                <button onClick={handleContact} className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2">
                 Projects
                </button>
              </div>
            <SocialMedia/>
            </div>
          </div>
        );
}