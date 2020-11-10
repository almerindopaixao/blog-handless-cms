import { DiscussionEmbed } from 'disqus-react';
import { SITE_URL } from '../../config/api-config';
import { Container } from './styled';

export type CommentsProps = {
  slug: string;
  title: string;
};

const Comments = ({ slug, title }: CommentsProps) => {
  return (
    <Container>
      <DiscussionEmbed
        shortname="almerindopaixao"
        config={{
          url: `${SITE_URL}/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
};

export default Comments;
