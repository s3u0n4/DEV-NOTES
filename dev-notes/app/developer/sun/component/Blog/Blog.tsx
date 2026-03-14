import "../Blog/Blog.css";
export default function Blog() {
  return (
    <section id="blog" className="sunBlogSection">
      <h2 className="sectionTitle">Latest Blog Posts</h2>

      <div className="blogGrid">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <article key={i} className="blogCard">
            <div className="thumbnail">
              <span className="category">study</span>
            </div>
            <div className="blogMeta">
              <span>
                <img src="/shin/calendar.png" alt="calendar" />
                2026.03.01
              </span>
              <span>
                <img src="/shin/view.png" alt="view" />
                1,004views
              </span>
            </div>

            <h3>Blogs</h3>
            <p>학습 내용이나 개발 경험을 기록한 글입니다.</p>

            <a href="#" className="readMore">
              Read more →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
