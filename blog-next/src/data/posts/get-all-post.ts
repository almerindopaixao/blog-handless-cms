import { PostData } from '../../domain/posts/post';
import { POST_URL } from '../../config/api-config';
import { fetchJson } from '../../utils/fetch-json';

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const url = `${POST_URL}?&${query}`;
  const posts = await fetchJson<PostData[]>(url);
  return posts;
};
