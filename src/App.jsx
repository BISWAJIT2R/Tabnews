import { useEffect, useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import NewsBox from "./components/NewsBox";
import NewsContainer from "./components/NewsContainer";
import Query from "./components/Query";
import { formatDate } from "./services/DateApi";
import { getNews } from "./services/Api";
const INIT_FORM = {
  country: "in",
  category: "general",
  query: "",
};
const App = () => {
  const [{ country, category, query }, setFromData] = useState(INIT_FORM);
  const [news, setNews] = useState([]);

  let date = formatDate();
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await getNews(country, category, query);
        setNews(news.articles)
      } catch (error) {
        console.log(error);
      } 
    };
    fetchNews()
  }, [country, category, query, date]);
 
  return (
    <Container>
      <Header />
      <Query setFromData={setFromData} />
      <NewsContainer>
        {
        news.map(({title, description, url},i) => <NewsBox key={i} title={title} description={description} url={url}/>)
        }
      </NewsContainer>
    </Container>
  );
};

export default App;
