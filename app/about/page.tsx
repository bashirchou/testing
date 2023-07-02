import Link from 'next/link'
import Options from '@/components/Options'

export default function Home() {
  return (<>
  <Options/>
  <h1>Name</h1>
  <p>My name is Labib, I graduated with a bachelors from Polytechnique de Montreal in software engineering. I am presently a full-stack developper.</p>
  <img src = "/images/grad.jpeg" ></img>
  </>
  )
}