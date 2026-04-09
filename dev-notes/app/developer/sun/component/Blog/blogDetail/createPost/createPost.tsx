"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./createPost.css";

export default function CreatePost() {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [excerpt, setExcerpt] = useState("");

  const togglePreview = () => setIsPreviewVisible(!isPreviewVisible);

  return (
    <div
      className={`sunCreateContainer ${
        isPreviewVisible ? "sunPreviewActive" : ""
      }`}
    >
      {/* --- 새로 추가된 내부 래퍼 (중앙 정렬 담당) --- */}
      <div className="sunInnerWrapper">
        {/* Header Section */}
        <header className="sunCreateHeaderSection">
          <Link
            href="/developer/sun/component/blog/blogdetail"
            className="sunBackLink"
          >
            ← Back to Blog
          </Link>
          <h1 className="sunMainTitle">Create New Post</h1>
          <div className="sunTitleUnderline"></div>
        </header>

        {/* Preview Toggle Button */}
        <div className="sunPreviewTopBar">
          <button className="sunPreviewBtn" onClick={togglePreview}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="sunSize6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            {isPreviewVisible ? "Hide Preview" : "Show Preview"}
          </button>
        </div>

        <div className="sunFormPreviewLayout">
          {/* 왼쪽: Form 영역 */}
          <main className="sunFormCard">
            <h2 className="sunSectionTitle">Post Details</h2>
            {/* ... 기존 InputField 코드들 ... */}
            <div className="sunInputField">
              <label>Title</label>
              <input
                type="text"
                placeholder="Enter post title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            {/* (중략 - 기존 코드와 동일) */}
            <div className="sunInputField">
              <label>Category</label>
              <select className="sunSelect">
                <option>React</option>
                <option>Next.js</option>
                <option>TypeScript</option>
                <option>CSS</option>
              </select>
            </div>
            <div className="sunInputField">
              <label>Thumbnail Image URL</label>
              <input
                type="text"
                placeholder="https://example.com/thumbnail.jpg"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
              />
            </div>
            <div className="sunInputField">
              <label>Excerpt</label>
              <textarea
                className="sunExcerptArea"
                placeholder="Brief summary..."
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
              />
            </div>
            {/* ... 내용 및 버튼 부분 생략 ... */}
            <footer className="sunFormFooter">
              <button className="sunSaveBtn">Save Post</button>
              <button className="sunCancelBtn">Cancel</button>
            </footer>
          </main>

          {/* 오른쪽: Preview 영역 */}
          {isPreviewVisible && (
            <aside className="sunPreviewCard">
              <h2 className="sunSectionTitle">Preview</h2>
              <div className="sunBlogPostPreviewCard">
                <div className="sunThumbnailPreviewBox">
                  {thumbnail ? (
                    <img src={thumbnail} alt="Preview" />
                  ) : (
                    <div className="sunNoThumbnail">
                      <span>No thumbnail yet</span>
                    </div>
                  )}
                </div>
                <div className="sunPostInfoPreview">
                  <h3 className="sunPostTitlePreview">
                    {title || "Untitled Post"}
                  </h3>
                  <p className="sunPostExcerptPreview">
                    {excerpt || "No excerpt provided yet..."}
                  </p>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>{" "}
      {/* .sunInnerWrapper 끝 */}
    </div>
  );
}
