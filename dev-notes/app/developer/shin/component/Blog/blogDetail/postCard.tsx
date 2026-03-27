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
    <div className="postCard">
      <div className="postImage">
        <img src={post.image} />
        <span className="postCategory">{post.category}</span>
      </div>

      <div className="postBody">
        <div className="postMeta">
          <img src="/shin/calendar.png" alt="calendar" />
          {post.date}
        </div>

        <h3>Blogs</h3>
        <p>학습 내용이나 개발 경험을 기록한 글입니다.</p>

        <a href="#" className="shinPostReadMore">
          Read more →
        </a>
      </div>
    </div>
  );
}
