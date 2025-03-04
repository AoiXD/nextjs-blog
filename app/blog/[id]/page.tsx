import { posts } from "@/app/lib/placeholder-data"

export default function BlogPost({ params }: { params: { id: string } }) {
    const post = posts.find(p => p.id === params.id);

    if(!post) {
        return <div>投稿が見つかりません</div>
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-600 mb-4">{post.author} - {post.createdAt.toLocaleDateString()}</p>
            <div className="prose lg:prose-xl">{post.content}</div>
        </div>
    )
}