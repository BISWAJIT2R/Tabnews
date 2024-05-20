const key = "a5c02a05e52a4c63a73cabbb1c40ef46";

export async function GetNews() {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


export async function DemoNews() {
    const res = await fetch(
        `http://localhost:3000/articles`
      );
      const result = await res.json();
      const data =  result;
     return data
}
