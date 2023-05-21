import axios from 'axios';

const API_KEY = '33585066-cae5e25e756cb0d7a12760c5d';
const DEFAULT_PER_PAGE = 12;
const DEFAULT_IMAGE_TYPE = 'photo';
const DEFAULT_ORIENTATION = 'horizontal';
const DEFAULT_SAFESEARCH = true;
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const imageSearch = async (query, page = 1) => {
  const options = {
    params: {
      key: API_KEY,
      q: query,
      image_type: DEFAULT_IMAGE_TYPE,
      orientation: DEFAULT_ORIENTATION,
      safesearch: DEFAULT_SAFESEARCH,
      per_page: DEFAULT_PER_PAGE,
      page: page,
    },
  };

  const response = await axios.get('', options);
  return response.data;
};
