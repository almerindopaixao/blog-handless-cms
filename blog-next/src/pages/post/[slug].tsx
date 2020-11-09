import { GetStaticPaths, GetStaticProps } from 'next';
import Post from '../../containers/Post';
import { countAllPosts } from '../../data/posts/count-all-post';
import { getAllPosts } from '../../data/posts/get-all-post';
import { getPost } from '../../data/posts/get-post';
import { PostData } from '../../domain/posts/post';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  return <Post post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfposts = await countAllPosts();
  const posts = await getAllPosts(`_limit=${numberOfposts}`);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPost(ctx.params.slug);

  return {
    props: { post: posts[0] },
  };
};
