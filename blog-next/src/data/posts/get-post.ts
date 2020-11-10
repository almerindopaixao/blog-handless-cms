import { PostData } from '../../domain/posts/post';
import { POST_URL } from '../../config/api-config';
import { fetchJson } from '../../utils/fetch-json';
import { markdownToHtml } from '../../utils/markdown-to-html';
import { formatDate } from '../../utils/format-date';

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POST_URL}?slug=${slugString}`;
  const jsonPosts = await fetchJson<PostData[]>(url);

  if (!jsonPosts.length) return jsonPosts;

  const content = await markdownToHtml(jsonPosts[0].content);
  const finalContent = {
    ...jsonPosts[0],
    content,
    published_at: formatDate(jsonPosts[0].published_at),
  };
  return [finalContent];
};
