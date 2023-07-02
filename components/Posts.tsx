"use client";
import { getAllPosts } from "@/services/getPosts";
// import { usePosts } from "@/store";
import Link from "next/link";
import useSWR from 'swr';
// import {shallow} from 'zustand/shallow';
// import { useEffect } from 'react';

const Posts = () => {

  // const [posts, loading, getAllPosts] = usePosts(state => [
  //   state.posts, state.loading, state.getAllPosts
  // ], shallow);

  // useEffect(() => {
  //   getAllPosts();
  // }, [getAllPosts]);

  const {data: posts, isLoading} = useSWR('posts', getAllPosts);

    return (
      isLoading ? (
      <h3>Loading...</h3>
    ) : (
      
        <ul className='posts column'>
          {posts.map((post: any) => (
            <li key={post.id} className='post'>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
    ))
}

export {Posts};
