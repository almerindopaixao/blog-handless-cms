import { PostData } from '../../domain/posts/post';
import { POST_URL } from '../../config/api-config';
import { fetchJson } from '../../utils/fetch-json';

export const getAllPosts = async (): Promise<PostData[]> => {
  const posts = await fetchJson<PostData[]>(POST_URL);
  return posts;
};
