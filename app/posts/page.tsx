import Link from 'next/link'

async function getData() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {cache: 'no-store'})

    return res.json()
}

export default async function Posts() {
    const posts:Post[] = await getData()
  return (
    <>
    <h1 className="text-center">Posts</h1>
    <ul className="mx-8">
        {posts.map((post:Post)=> (
            <li key={post.id} className="mt-4">
                <p className=" text-red-500 ">{post.userId}</p> 
                <p className=" text-yellow-500 ">{post.title}</p>
                <p>{post.body}</p>           
            </li>
        ))}
    </ul>
    <Link href="/">Link to home page</Link>    
    </>
  )
}

