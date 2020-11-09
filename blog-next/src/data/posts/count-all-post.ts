import { POST_URL } from '../../config/api-config';
import { fetchJson } from '../../utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<string> => {
  const url = `${POST_URL}/count?${query}`;
  const numberOfPosts = await fetchJson<string>(url);
  return numberOfPosts;
};
