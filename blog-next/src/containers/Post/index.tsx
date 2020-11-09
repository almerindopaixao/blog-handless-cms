import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import { PostData } from '../../domain/posts/post';

export type PostProps = {
  post: PostData;
};

const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />
      <MainContainer>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </MainContainer>
      <Footer />
    </>
  );
};

export default Post;
