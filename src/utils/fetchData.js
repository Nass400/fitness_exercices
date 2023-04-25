export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '776c2992dfmsh92cdd500086417fp182889jsn3c849348731e',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '776c2992dfmsh92cdd500086417fp182889jsn3c849348731e',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
