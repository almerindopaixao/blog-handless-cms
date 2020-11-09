import { Container } from './styled';
import { formatDate } from '../../utils/format-date';

export type DateProps = {
  date: string;
};

const Date = ({ date }: DateProps) => {
  return <Container>{formatDate(date)}</Container>;
};

export default Date;
