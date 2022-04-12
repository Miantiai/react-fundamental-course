import PostItem from '../PostItem/PostItem';

export default function PostList({ posts, title, remove }) {
  if (posts.length == 0) {
    return <h2 style={{ textAlign: 'center' }}>Posts not found!</h2>;
  } 
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
}
