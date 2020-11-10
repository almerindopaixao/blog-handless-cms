import { GetServerSideProps } from 'next';
import HomePage from '../../containers/HomePage';
import { getAllPosts } from '../../data/posts/get-all-post';
import { PostData } from '../../domain/posts/post';

export type TagProps = {
  posts: PostData[];
  tag: string;
};

export default function Tag({ posts, tag }: TagProps) {
  return <HomePage posts={posts} tag={tag} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const urlQuery = `_sort=id:desc&_start=0&_limit=30&tag.name_contains=${ctx.query.tag}`;
  const posts = await getAllPosts(urlQuery);

  return {
    props: { posts, tag: ctx.query.tag },
  };
};
