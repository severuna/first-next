import { Metadata } from "next";
import './PostDetails.css';

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: {
        revalidate: 60, //seconds
      }
    });
  
    return response.json();
  }

type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata ( { params: {id}} : Props ) : Promise<Metadata> {
    
    const post = await getData(id);
    return {
        title: post.title,
    }
}

export default async function Post( { params: {id}} : Props ) {
    const post = await getData(id);
    return (
        <div className="post-details column">
            <h1 className="post-title">{post.title}</h1>
            <p className="post-body">{post.body}</p>
        </div>
    )
}