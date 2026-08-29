import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog')

export interface PostMeta {
  slug: string
  title: string
  date: string
  summary: string
}

export interface Post extends PostMeta {
  html: string
}

function readPostFile(file: string) {
  const slug = file.replace(/\.mdx?$/, '')
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ''),
    summary: String(data.summary ?? ''),
    content,
  }
}

/** All posts, newest first. */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter(f => /\.mdx?$/.test(f))
    .map(readPostFile)
    .map(({ slug, title, date, summary }) => ({ slug, title, date, summary }))
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPost(slug: string): Post | null {
  if (!fs.existsSync(POSTS_DIR)) return null
  const file = ['.md', '.mdx']
    .map(ext => `${slug}${ext}`)
    .find(f => fs.existsSync(path.join(POSTS_DIR, f)))
  if (!file) return null
  const { title, date, summary, content } = readPostFile(file)
  return { slug, title, date, summary, html: marked.parse(content, { async: false }) as string }
}

/** Renders 2026-03-04 as 4 March 2026, and leaves anything unparseable alone. */
export function formatDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}
