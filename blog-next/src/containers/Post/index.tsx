import Head from 'next/head';
import Comments from '../../components/Comments';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import MainContainer from '../../components/MainContainer';
import PostContainer from '../../components/PostContainer';
import PostCover from '../../components/PostCover';
import PostDetails from '../../components/PostDatails';
import { PostData } from '../../domain/posts/post';
import { SITE_NAME } from '../../config/api-config';
import { removeHtml } from '../../utils/remove-html';

export type PostProps = {
  post: PostData;
};

const Post = ({ post }: PostProps) => {
  return (
    <>
      <Head>
        <title>
          {post.title} - {SITE_NAME}
        </title>
        <meta
          name="description"
          content={removeHtml(post.content).slice(0, 150)}
        />
      </Head>
      <Header />
      <MainContainer>
        <Heading>{post.title}</Heading>
        <PostCover coverUrl={post.cover.formats.large.url} alt={post.title} />
        <PostDetails
          date={post.published_at}
          author={post.author.name}
          category={post.category.name}
          tag={post.tag.name}
        />
        <PostContainer content={post.content} />
        <Comments slug={post.slug} title={post.title} />
      </MainContainer>
      <Footer />
    </>
  );
};

export default Post;
