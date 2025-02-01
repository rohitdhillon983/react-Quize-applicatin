const fetchQuizData = async () => {
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const apiUrl = 'https://api.jsonserve.com/Uw5CrX';
    try {
      const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
      const data = await response.json();
    //   console.log(data.contents); // Log the data
      return JSON.parse(data.contents); // Parse the JSON string
    } catch (error) {
      console.error('Error fetching quiz data:', error);
      throw error;
    }
  };
  
  export default fetchQuizData;