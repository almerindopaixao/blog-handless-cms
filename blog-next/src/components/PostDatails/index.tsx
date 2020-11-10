import { Container, Paragraph, Span } from './styled';
import Date from '../Date';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
  tag: string;
};

const PostDetails = ({ author, category, date, tag }: PostDetailsProps) => {
  return (
    <Container>
      <Paragraph>
        Publicado em <Date date={date} /> por {author} |
      </Paragraph>
      <Span>{category}</Span>
      <Span>{tag}</Span>
    </Container>
  );
};

export default PostDetails;
