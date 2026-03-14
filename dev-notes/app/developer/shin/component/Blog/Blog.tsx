import "../Blog/Blog.css";

export default function Blog() {
  return (
    <section id="blog" className="shinBlogSection">
      <h2 className="shinBlogTitle">Latest Blog Posts</h2>

      <div className="shinBlogGrid">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <article key={i} className="shinBlogCard">
            <div className="shinThumbnail">
              <span className="shinCategory">study</span>
            </div>

            <div className="shinBlogMeta">
              <span>
                <img src="/shin/calendar.png" alt="calendar" />
                2026.03.01
              </span>

              <span>
                <img src="/shin/view.png" alt="view" />
                1,004 views
              </span>
            </div>

            <h3>Blogs</h3>
            <p>학습 내용이나 개발 경험을 기록한 글입니다.</p>

            <a href="#" className="shinReadMore">
              Read more →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
