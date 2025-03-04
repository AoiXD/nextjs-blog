import { posts } from '@/app/lib/placeholder-data';
import Link from 'next/link';

export default function BlogList() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">ブログ投稿一覧</h1>
            <ul className="space-y-4">
                {posts.map((post) => (
                    <li key={post.id} className='border p-4 rounded-lg'>
                        <Link href={`/blog/${post.id}`} className="text-lg font-semibold text-blue-600 hover:underline">
                            {post.title}
                        </Link>
                        <p className='text-gray-600'>{post.author} - {post.createdAt.toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}