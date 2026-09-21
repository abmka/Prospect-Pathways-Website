import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getAllPosts, getPost } from "../../../lib/news";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "News" };
  return { title: post.title, description: post.excerpt };
}

export default async function NewsArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = getAllPosts().filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="page-hero">
        <div className="container stack gap-20" style={{ maxWidth: "900px" }}>
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/news">News</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{post.category}</span>
          </nav>
          <div className="news-meta">
            <span className="pill">{post.category}</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.author && <span>&middot; {post.author}</span>}
          </div>
          <h1 className="h1">{post.title}</h1>
          <p className="lead">{post.excerpt}</p>
        </div>
      </section>

      <article className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          {post.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.image}
              alt={post.imageAlt ?? ""}
              style={{ borderRadius: "var(--radius-lg)", marginBottom: "40px", width: "100%" }}
            />
          )}
          <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </article>

      {others.length > 0 && (
        <section className="section section--ground">
          <div className="container stack gap-32">
            <h2 className="h3">More news</h2>
            <div className="grid grid--3">
              {others.map((p) => (
                <Link key={p.slug} href={`/news/${p.slug}`} className="card news-card">
                  <div className="news-meta">
                    <span className="pill">{p.category}</span>
                    <time dateTime={p.date}>{formatDate(p.date)}</time>
                  </div>
                  <h3 className="h4">{p.title}</h3>
                  <p className="body-sm">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
