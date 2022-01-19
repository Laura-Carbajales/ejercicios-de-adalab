const callToApi = (searchName) => {
  // Llamamos al API
  return fetch(`https://api.tvmaze.com/search/shows?q=${searchName}`)
    .then((response) => response.json())
    .then((response) => {
      const result = response.map((serie) => {
        return {
          name: serie.show.name,
          channel: serie.show.language,
        };
      });
      // Retornamos los resultados del API al componente App
      return result;
    });
};

export default callToApi;
