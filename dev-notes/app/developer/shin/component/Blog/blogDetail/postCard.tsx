"use client";

import "./postcard.css";

type Props = {
  post: {
    id: number;
    title: string;
    category: string;
    date: string;
    image: string;
  };
};

export default function PostCard({ post }: Props) {
  return (
    <div className="shinPostCard">
      {/* 이미지 섹션 */}
      <div className="shinPostImage">
        <img src={post.image} alt={post.title} />
        <span className="shinPostCategory">{post.category}</span>
      </div>

      {/* 텍스트 섹션 */}
      <div className="shinPostBody">
        <div className="shinPostMeta">
          <img
            src="/shin/calendar.png"
            alt="calendar"
            className="shinMetaIcon"
          />
          <span className="shinPostDate">{post.date}</span>
        </div>

        <h3 className="shinPostTitle">{post.title}</h3>
        <p className="shinPostDesc">
          학습 내용이나 개발 경험을 기록한 글입니다.
        </p>

        <a
          href={`/developer/shin/component/blog/blogDetail/${post.id}`}
          className="shinPostReadMore"
        >
          Read more →
        </a>
      </div>
    </div>
  );
}
