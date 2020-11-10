import { Container } from './styled';

export type DateProps = {
  date: string;
};

const Date = ({ date }: DateProps) => {
  return <Container>{date}</Container>;
};

export default Date;
