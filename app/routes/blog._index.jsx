import { json } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
    return json({
        posts: [
            {
                slug: "my-first-post",
                title: "My First Post",
            },
            {
                slug: "my-second-post",
                title: "My Second Post",
            }
        ]
    })
}

export default function Blog() {
    const { posts } = useLoaderData();

    return (
        <div className="smallContainer">
            <h1>Blog</h1>
        </div>
    )
}