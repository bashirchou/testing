import Image from 'next/image'
import Link from 'next/link'

export default function Options() {
  return (<>
  <div className = "flex space-x-2">
  <Link href = "/about"> About </Link>
  <div> Interests </div>
  <div> Contact</div>
  </div>
  </>
  )
}