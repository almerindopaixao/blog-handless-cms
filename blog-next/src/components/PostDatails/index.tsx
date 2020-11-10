import Link from 'next/link';
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
      <Span>
        <Link href={`/categories/${category}`}>{category.toLowerCase()}</Link>
      </Span>
      <Span>
        <Link href={`/tags/${tag}`}>{tag.toLowerCase()}</Link>
      </Span>
    </Container>
  );
};

export default PostDetails;
