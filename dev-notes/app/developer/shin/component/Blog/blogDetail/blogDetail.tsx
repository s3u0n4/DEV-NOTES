"use client";

import Link from "next/link";
import "./blogDetail.css";
import PostCard from "./postCard";
import Sidebar from "./sideBar";

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
    <div className="shinBlog">
      {/* HERO SECTION */}
      <div className="shinBlogHero">
        <h1 className="shinBlogHeroTitle">Blog Posts</h1>
        <p className="shinBlogHeroDesc">
          Insights, tutorials, and thoughts on web development, architecture,
          and technology
        </p>
        <div className="shinBlogHeroDivider" />
      </div>

      {/* CONTENT SECTION */}
      <div className="shinBlogContainer">
        <aside className="shinBlogSidebar">
          <Sidebar />
        </aside>

        <main className="shinBlogMain">
          <div className="shinBlogToolbar">
            <span className="shinPostCount">
              Showing {MOCK_DATA.length} posts
            </span>

            <Link
              href="/developer/shin/component/blog/blogDetail/createPost"
              className="shinWriteBtn"
            >
              + Write Post
            </Link>
          </div>

          <div className="shinBlogGrid">
            {MOCK_DATA.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
