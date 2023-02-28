import Link from 'next/link'
import Image from 'next/image'
import mypic from  '../shared/images/blank.jpg'

export default function About() {

  return (
    <>
    <h1>About</h1>
    <Image src={mypic} height={100} width={100} alt="Blank" />
    <Link href="/">Link to home page</Link>    
    </>
  )
}

