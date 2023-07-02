import { Metadata } from 'next';
import './Blog.css';
import { Posts } from '@/components/Posts';
import { PostSearch } from '@/components/PostSearch';

export const metadata: Metadata = {
  title: 'Blog | Next App',
  description: 'Generated by create next app',
}

export default async function Blog() {
    return (
      <div className='blog column'>
        <h1 className="title">Blog</h1>
        <PostSearch />
        <Posts />
      </div>
    )
}