import Header from '../../components/Header';
import { Container } from './styled';
import { PostData } from '../../domain/posts/post';
import MainContainer from '../../components/MainContainer';

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
            <h2 key={post.slug}>{post.title}</h2>
          ))}
        </Container>
      </MainContainer>
    </>
  );
}
