const callToApi = () => {
  // Llamamos al API
  return fetch('https://api.tvmaze.com/search/shows?q=paranormal')
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};

export default callToApi;
