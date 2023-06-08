
import { categories } from "../constants";
import fetchNews from '../lib/fetchNews'
import NewsList from "./components/NewsList";

export default async function Home() {
  const news = await fetchNews(categories.join(","));
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
