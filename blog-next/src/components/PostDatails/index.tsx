import { Container } from './styled';
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
      Publicado por <Date date={date} />{' '}
    </Container>
  );
};

export default PostDetails;
