"use client";

import "./postCard.css";
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
    <div className="sunPostCard">
      {/* 이미지 섹션 */}
      <div className="sunPostImage">
        <img src={post.image} alt={post.title} />
        <span className="sunPostCategory">{post.category}</span>
      </div>

      {/* 텍스트 섹션 */}
      <div className="sunPostBody">
        <div className="sunPostMeta">
          {/* 아이콘 경로도 sun으로 변경하는 것이 좋습니다 */}
          <img
            src="/shin/calendar.png"
            alt="calendar"
            className="sunMetaIcon"
          />
          <span className="sunPostDate">{post.date}</span>
        </div>

        <h3 className="sunPostTitle">{post.title}</h3>
        <p className="sunPostDesc">
          학습 내용이나 개발 경험을 기록한 글입니다.
        </p>

        <a
          href={`/developer/sun/component/blog/blogDetail/${post.id}`}
          className="sunPostReadMore"
        >
          Read more →
        </a>
      </div>
    </div>
  );
}
