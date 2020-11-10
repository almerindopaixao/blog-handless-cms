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
        <Link href="/categories/[category]" as={`/categories/${category}`}>
          <a>{category.toLowerCase()}</a>
        </Link>
      </Span>
      <Span>
        <Link href="/tags/[tag]" as={`/tags/${tag}`}>
          <a>{tag.toLowerCase()}</a>
        </Link>
      </Span>
    </Container>
  );
};

export default PostDetails;
