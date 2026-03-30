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
      {/* Header Section */}
      <header className="sunCreateHeaderSection">
        <Link
          href="/developer/sun/component/blog/blogDetail"
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

          <div className="sunInputField">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter post title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

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
            <div className="sunIconInput">
              <span className="sunInputIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="sunSize6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="https://example.com/thumbnail.jpg"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
              />
            </div>
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

          <div className="sunContentSection">
            <div className="sunContentHeader">
              <label>Content</label>
              <div className="sunContentTools">
                <button className="sunToolBtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    width="15px"
                    fill="currentColor"
                  >
                    <path d="M280-160v-520H80v-120h520v120H400v520H280Zm360 0v-320H520v-120h360v120H760v320H640Z" />
                  </svg>
                  Add Text
                </button>
                <button className="sunToolBtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="sunSize6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  Add Image
                </button>
              </div>
            </div>

            <div className="sunTextBlockContainer">
              <div className="sunBlockHeader">
                <span className="sunTIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    width="15px"
                    fill="#64748b"
                  >
                    <path d="M280-160v-520H80v-120h520v120H400v520H280Zm360 0v-320H520v-120h360v120H760v320H640Z" />
                  </svg>
                  Text Block
                </span>
                <div className="sunBlockActions">
                  {/* 액션 아이콘들 (생략 가능 또는 색상 유지) */}
                </div>
              </div>
              <textarea
                className="sunContentArea"
                placeholder="Write your content here..."
              ></textarea>
            </div>
          </div>

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
                <div className="sunPostDateRow">
                  <img
                    src="/shin/calendar.png"
                    alt="cal"
                    style={{ width: "16px" }}
                  />
                  <span>March 30, 2026</span>
                </div>
                <h3 className="sunPostTitlePreview">
                  {title || "Untitled Post"}
                </h3>
                <p className="sunPostExcerptPreview">
                  {excerpt || "No excerpt provided yet..."}
                </p>
                <div className="sunBottomSeparator"></div>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
