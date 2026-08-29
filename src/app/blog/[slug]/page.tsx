import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { getAllPosts, getPost, formatDate } from '@/lib/blog'

export function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Not found | Future Voices' }
  return { title: `${post.title} | Future Voices`, description: post.summary }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar />

      <main className="pt-32 pb-24 px-6">
        <article className="max-w-2xl mx-auto">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            {formatDate(post.date)}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] font-medium text-ink mb-10">
            {post.title}
          </h1>

          <div className="post-body text-[1.05rem] text-ink-500 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>

          <p className="mt-14 pt-8 border-t border-ink/[0.08]">
            <Link href="/blog" className="text-sm text-gold font-semibold hover:underline">
              ← All posts
            </Link>
          </p>
        </article>
      </main>

      <Footer />
    </div>
  )
}
