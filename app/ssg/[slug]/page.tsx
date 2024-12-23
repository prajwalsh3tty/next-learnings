import { getAllPostIds, getPostData } from '@/lib/mdx-utils';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  return getAllPostIds();
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const postData = await getPostData(params.slug);

  return (
    <div className="container mx-auto p-4 prose max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
      <p className="text-gray-500 mb-6">{postData.date}</p>
      <article className="prose">
        <MDXRemote source={postData.content} />
      </article>
    </div>
  );
}
