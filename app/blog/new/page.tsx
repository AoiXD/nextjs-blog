'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewPost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        //ここで投稿を保存する処理を実装（現在は仮実装）
        console.log("new post:", { title, content })
        //投稿一覧ページにダイレクト
        router.push("/blog")
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">新規投稿作成</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block mb-2">タイトル</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
                </div>
                <div>
                    <label htmlFor="content" className="block mb-2">内容</label>
                    <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} className="w-full px-3 py-2 border rounded-lg" rows={5} required ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    投稿する
                </button>
            </form>
        </div>
    )
}