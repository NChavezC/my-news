const BASE_URL = "https://newsapi.org/v2/everything";


export const getNews = async ({ query }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_URL;
  console.log(`API KEY is: ${apiKey}`)
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const formattedYesterday = yesterday.toISOString().split('T')[0];

  const firstDayOfMonth = new Date(yesterday.getFullYear(), yesterday.getMonth(), 1);
  const formattedFirstDayOfMonth = firstDayOfMonth.toISOString().split('T')[0];

  const url = `${baseUrl}?q=${encodeURIComponent(
    query
  )}&domains=bbc.com,apnews.com,cnn.com,dw.com&from=${formattedFirstDayOfMonth}&to=${formattedYesterday}&sortBy=publishedAt&apiKey=${apiKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }

  const data = await response.json();
  return data.articles;
};

//&domains=bbc.com,apnews.com,cnn.com,dw.com&from=2025-02-06&to=2025-02-06&apiKey=