import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Categorization } from './styled';
import { PostData } from '../../domain/posts/post';
import MainContainer from '../../components/MainContainer';
import PostCard from '../../components/PostCard';
import { SITE_NAME } from '../../config/api-config';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  tag?: string;
};

export default function HomePage({ posts, category, tag }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Esse é meu blog de tecnologia" />
      </Head>
      <Header />
      {category && <Categorization>Categoria: {category}</Categorization>}
      {tag && <Categorization>Tag: {tag}</Categorization>}
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              cover={post.cover.formats.small.url}
              slug={post.slug}
            />
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}
