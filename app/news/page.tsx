import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../../components/ui";
import { formatDate, getAllPosts } from "../../lib/news";

export const metadata: Metadata = {
  title: "News",
  description:
    "Availability, recruitment and service updates from Prospect Pathways in Birmingham.",
};

export default function NewsPage() {
  const posts = getAllPosts();
  const [latest, ...rest] = posts;

  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }]}
        title="News"
        intro="New properties, vacancies, changes to how referrals work, and what we are learning from the people we house."
      />

      <section className="section">
        <div className="container stack gap-40">
          {latest && (
            <Link href={`/news/${latest.slug}`} className="news-feature">
              <div className="news-feature__media" aria-hidden="true">
                {latest.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={latest.image} alt="" />
                ) : (
                  <span className="media__label">Photo for this story</span>
                )}
              </div>
              <div className="news-feature__body">
                <div className="news-meta">
                  <span className="pill">{latest.category}</span>
                  <time dateTime={latest.date}>{formatDate(latest.date)}</time>
                </div>
                <h2 className="h2">{latest.title}</h2>
                <p className="body">{latest.excerpt}</p>
                <span className="link-arrow">Read the full story &rarr;</span>
              </div>
            </Link>
          )}

          {rest.length > 0 && (
            <div className="grid grid--3">
              {rest.map((post) => (
                <Link key={post.slug} href={`/news/${post.slug}`} className="card news-card">
                  <div className="news-meta">
                    <span className="pill">{post.category}</span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <h3 className="h4">{post.title}</h3>
                  <p className="body-sm">{post.excerpt}</p>
                  <span className="card__spacer" style={{ fontWeight: 600, color: "var(--ink)" }}>
                    Read more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          )}

          {posts.length === 0 && (
            <p className="body">Nothing posted yet. Check back soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
