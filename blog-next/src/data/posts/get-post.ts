import { PostData } from '../../domain/posts/post';
import { POST_URL } from '../../config/api-config';
import { fetchJson } from '../../utils/fetch-json';
import { markdownToHtml } from '../../utils/markdown-to-html';

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POST_URL}?slug=${slugString}`;
  const jsonPosts = await fetchJson<PostData[]>(url);

  const content = await markdownToHtml(jsonPosts[0].content);
  const finalContent = { ...jsonPosts[0], content };
  return [finalContent];
};
