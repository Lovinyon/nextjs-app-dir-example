import ArticleList from "./compnents/ArticleList";
import { Badge, Heading } from "./common/components";
import { Article } from "./types";

async function getArticles() {
  const res = await fetch("http://localhost:3000/api/articles", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch artiles");
  }

  const data = await res.json();
  return data.artiles as Article[];
}

export default async function Home() {
  const articles = await getArticles();
  return (
    <div>
      <Badge>default</Badge>
      <Heading as="h1" mb={4}>
        新着記事
      </Heading>
      <ArticleList articles={articles} />
    </div>
  );
}
