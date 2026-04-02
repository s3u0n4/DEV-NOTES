"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./createpost.css";

export default function CreatePost() {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [excerpt, setExcerpt] = useState("");

  const togglePreview = () => setIsPreviewVisible(!isPreviewVisible);

  return (
    <div
      className={`shinCreateContainer ${
        isPreviewVisible ? "shinPreviewActive" : ""
      }`}
    >
      {/* Header Section */}
      <header className="shinCreateHeaderSection">
        <Link
          href="/developer/shin/component/blog/blogDetail"
          className="shinBackLink"
        >
          ← Back to Blog
        </Link>
        <h1 className="shinMainTitle">Create New Post</h1>
        <div className="shinTitleUnderline"></div>
      </header>

      {/* Preview Toggle Button */}
      <div className="shinPreviewTopBar">
        <button className="shinPreviewBtn" onClick={togglePreview}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="shinSize6"
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

      <div className="shinFormPreviewLayout">
        {/* 왼쪽: Form 영역 */}
        <main className="shinFormCard">
          <h2 className="shinSectionTitle">Post Details</h2>

          <div className="shinInputField">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter post title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="shinInputField">
            <label>Category</label>
            <select>
              <option>React</option>
              <option>Next.js</option>
              <option>TypeScript</option>
              <option>CSS</option>
            </select>
          </div>

          <div className="shinInputField">
            <label>Thumbnail Image URL</label>
            <div className="shinIconInput">
              <span className="shinInputIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="shinSize6"
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

          <div className="shinInputField">
            <label>Excerpt</label>
            <textarea
              className="shinExcerptArea"
              placeholder="Brief summary..."
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
            />
          </div>

          <div className="shinContentSection">
            <div className="shinContentHeader">
              <label>Content</label>
              <div className="shinContentTools">
                <button className="shinToolBtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    width="15px"
                    fill="#e3e3e3"
                  >
                    <path d="M280-160v-520H80v-120h520v120H400v520H280Zm360 0v-320H520v-120h360v120H760v320H640Z" />
                  </svg>
                  Add Text
                </button>
                <button className="shinToolBtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="shinSize6"
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

            <div className="shinTextBlockContainer">
              <div className="shinBlockHeader">
                <span className="shinTIcon">
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
                <div className="shinBlockActions">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      width="15px"
                      fill="#FFFFFF"
                    >
                      <path d="M444-96v-630L267-549l-51-51 264-264 264 264-51 51-177-177v630h-72Z" />
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      width="15px"
                      fill="#FFFFFF"
                    >
                      <path d="M480-96 216-360l51-51 177 177v-630h72v630l177-177 51 51L480-96Z" />
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      width="15px"
                      fill="#FFFFFF"
                    >
                      <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                  </span>
                </div>
              </div>
              <textarea
                className="shinContentArea"
                placeholder="Write your content here..."
              ></textarea>
            </div>
          </div>

          <footer className="shinFormFooter">
            <button className="shinSaveBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                width="15px"
                fill="#FFFFFF"
              >
                <path d="M816-672v456q0 29.7-21.15 50.85Q773.7-144 744-144H216q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h456l144 144Zm-72 30L642-744H216v528h528v-426ZM556.5-283.5Q588-315 588-360t-31.5-76.5Q525-468 480-468t-76.5 31.5Q372-405 372-360t31.5 76.5Q435-252 480-252t76.5-31.5ZM264-552h336v-144H264v144Zm-48-77v413-528 115Z" />
              </svg>
              Save Post
            </button>
            <button className="shinCancelBtn">Cancel</button>
          </footer>
        </main>

        {/* 오른쪽: Preview 영역 */}
        {isPreviewVisible && (
          <aside className="shinPreviewCard">
            <h2 className="shinSectionTitle">Preview</h2>
            <div className="shinBlogPostPreviewCard">
              <div className="shinThumbnailPreviewBox">
                {thumbnail ? (
                  <img src={thumbnail} alt="Preview" />
                ) : (
                  <div className="shinNoThumbnail">
                    <span>No thumbnail yet</span>
                  </div>
                )}
              </div>
              <div className="shinPostInfoPreview">
                <div className="shinPostDateRow">
                  <img
                    src="/shin/calendar.png"
                    alt="cal"
                    style={{ width: "16px" }}
                  />
                  <span>March 29, 2026</span>
                </div>
                <h3 className="shinPostTitlePreview">
                  {title || "Untitled Post"}
                </h3>
                <p className="shinPostExcerptPreview">
                  {excerpt || "No excerpt provided yet..."}
                </p>
                <div className="shinBottomSeparator"></div>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
