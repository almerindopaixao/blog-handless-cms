import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container } from './styled';
import { PostData } from '../../domain/posts/post';
import MainContainer from '../../components/MainContainer';
import PostCard from '../../components/PostCard';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
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
