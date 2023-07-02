import { Metadata } from 'next';
import Link from "next/link";
import './Blog.css';

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60, //seconds
    }
  });

  if (!response.ok) throw new Error('Unable to fetch');

  return response.json();
}

export const metadata: Metadata = {
  title: 'Blog | Next App',
  description: 'Generated by create next app',
}

export default async function Blog() {
  const posts = await getData();
    return (
      <div className='blog column'>
        <h1 className="title">Blog</h1>
        <ul className='posts column'>
          {posts.map((post: any) => (
            <li key={post.id} className='post'>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
}