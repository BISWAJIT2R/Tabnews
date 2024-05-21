export async function getNews(country, category, query, date) {
    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&q=${query}&from=${date}&to=${date}&sortBy=publishedAt&apiKey=a5c02a05e52a4c63a73cabbb1c40ef46`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const news = await response.json();
      return news;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error; // Rethrow the error after logging it
    }
  }
  

