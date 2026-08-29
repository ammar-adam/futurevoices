import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { getAllPosts, formatDate } from '@/lib/blog'

export const metadata = {
  title: 'Blog | Future Voices',
  description: 'Writing from Future Voices on speaking, confidence, and working with young people.',
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl leading-[1.08] font-medium text-ink mb-10">
            Blog
          </h1>

          {posts.length === 0 ? (
            <p className="text-ink-500">There is nothing here yet.</p>
          ) : (
            <ol className="flex flex-col border-t border-ink/[0.08]">
              {posts.map(p => (
                <li key={p.slug} className="border-b border-ink/[0.08]">
                  <Link href={`/blog/${p.slug}`} className="block py-7 group">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold mb-2">
                      {formatDate(p.date)}
                    </p>
                    <h2 className="font-display text-2xl font-medium text-ink mb-2 group-hover:text-gold transition-colors">
                      {p.title}
                    </h2>
                    <p className="text-[0.95rem] text-ink-500 leading-relaxed">{p.summary}</p>
                  </Link>
                </li>
              ))}
            </ol>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
