import Link from "next/link";

const ROUTE_POST_ID = "posts/[id]";

const posts = [
  {
    id: 1,
    title: "Ver postagem 1",
  },
  {
    id: 2,
    title: "Ver postagem 2",
  },
];

const Home = () => {
  return (
    <div>
      <Link href="/author">
        <a>Sobre o autor</a>
      </Link>
      <h1>Bem-vindo ao meu blog</h1>
      {posts.map((post) => (
        <div key={`post-${post.id}`}>
          <button>{post.title}</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
