import Link from 'next/link';
import { getSortedPostsData } from '@/lib/mdx-utils';

export default function BlogListPage() {
  const posts = getSortedPostsData();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog Posts (SSG)</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link 
            key={post.id} 
            href={`/ssg/${post.id}`}
            className="block p-4 border rounded hover:bg-slate-800 transition"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-500">{post.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const dynamicParams = false;
