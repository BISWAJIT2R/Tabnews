import axios from "axios";
import { formatDate } from "./DateApi";

const API_KEY = "a5c02a05e52a4c63a73cabbb1c40ef46"
export async function getNews(country, category, query) {
  let date = formatDate();
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );

    if (response.status != 200) {
      throw new Error(response.status);
    }

    const news = await response.json();
    return news;
  } catch (error) {
    throw new Error(error);
  }
}
