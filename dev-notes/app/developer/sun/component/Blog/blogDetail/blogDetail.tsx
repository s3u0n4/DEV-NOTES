"use client";

import Link from "next/link";
import "./blogDetail.css";
import Sidebar from "./sideBar";
import PostCard from "./postCard";

const MOCK_DATA = [
  {
    id: 1,
    title: "Building Scalable React",
    category: "React",
    date: "January 15, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
  },
  {
    id: 2,
    title: "Cloud Architecture Patterns",
    category: "Cloud",
    date: "November 15, 2025",
    readTime: "13 min read",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
  },
];

export default function BlogDetail() {
  return (
    <div className="sunBlog">
      {/* HERO SECTION */}
      <div className="sunBlogHero">
        <h1 className="sunBlogHeroTitle">Blog Posts</h1>
        <p className="sunBlogHeroDesc">
          Insights, tutorials, and thoughts on web development, architecture,
          and technology
        </p>
        <div className="sunBlogHeroDivider" />
      </div>

      {/* CONTENT SECTION */}
      <div className="sunBlogContainer">
        <aside className="sunBlogSidebar">
          <Sidebar />
        </aside>

        <main className="sunBlogMain">
          <div className="sunBlogToolbar">
            <span className="sunPostCount">
              Showing {MOCK_DATA.length} posts
            </span>

            <Link
              href="/developer/sun/component/blog/blogdetail/createpost"
              className="sunWriteBtn"
            >
              + Write Post
            </Link>
          </div>

          <div className="sunBlogGrid">
            {MOCK_DATA.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
