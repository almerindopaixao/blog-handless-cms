import { GetStaticProps, GetStaticPaths } from 'next';
import { PostData } from '../../../domain/posts/post';
import { getAllPosts } from '../../../data/posts/get-all-post';
import HomePage from '../../../containers/HomePage';
import { useRouter } from 'next/router';
import { PaginationTypes } from '../../../domain/posts/pagination';
import { countAllPosts } from '../../../data/posts/count-all-post';

export type PageProps = {
  posts: PostData[];
  category?: string;
  tag?: string;
  pagination: PaginationTypes;
};

export default function Page({ posts, pagination, category, tag }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <div>Carregando...</div>;

  if (!posts.length) return <div>Página não encontrada</div>;

  return (
    <HomePage
      posts={posts}
      category={category}
      tag={tag}
      pagination={pagination}
    />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const page = Number(context.params.param[0]);
  const category = context.params.param[1] || '';
  const tag = context.params.param[2] || '';
  const postsPerPage = 3;
  const startFrom = (page - 1) * postsPerPage;

  const nextPage = page + 1;
  const previousPage = page - 1;

  const categoryQuery = category ? `&category.name_contains=${category}` : '';
  const tagQuery = category ? `&tag.name_contains=${tag}` : '';

  const urlQuery = `_sort=id:desc&_start=${startFrom}&_limit=${postsPerPage}${categoryQuery}${tagQuery}`;

  const posts = await getAllPosts(urlQuery);

  const numberOfPosts = Number(
    await countAllPosts(`${categoryQuery}${tagQuery}`),
  );

  const pagination: PaginationTypes = {
    nextPage,
    numberOfPosts,
    postsPerPage,
    previousPage,
    category,
    tag,
  };

  return {
    props: { posts, pagination, category, tag },
    revalidate: 600,
  };
};
