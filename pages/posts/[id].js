import Link from "next/link";

const ROUTE_POST_ID = "comment/[id]";

const posts = [
  {
    id: 1,
    title: "Ver comentário",
  },
];

const PostPage = () => {
  return (
    <div>
      <Link href="/">
        <a>Página inicial</a>
      </Link>
      <p>ID da Postagem: #{router.query.id}</p>

      <h3>Você tem um comentário nessa postagem!</h3>

      {posts.map((post) => (
        <div key={`post-${post.id}`}>
          <button>{post.title}</button>
        </div>
      ))}
    </div>
  );
};

export default PostPage;
