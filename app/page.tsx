import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from "next/link"
import HomePage from './home-page'

const inter = Inter({ subsets: ['latin'] })

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  return posts
}

export default async function Home() {
  const recentPosts = await getPosts()
  return (
    <main className={styles.main}>
      <h1 className="">Welcome</h1>
      <Link href="/posts">Posts page</Link>
      <Link href="/about">Go to About page</Link>
      <HomePage recentPosts={recentPosts} />
    </main>
  )
}
 