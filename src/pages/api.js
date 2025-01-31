import axios from 'axios';

const buscarImagenes = async (palabra) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID FoUciSwqCxmEXk9ZaVLxrX9lNDMZ9G9NakD7fVfmD_s',
    },
    params: {
      query: palabra,
    },
  });

  return response.data.results;
};

export default buscarImagenes;
