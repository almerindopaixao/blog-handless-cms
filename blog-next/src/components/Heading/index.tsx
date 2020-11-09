import { Container } from './styled';

export type HeadingProps = {
  children: React.ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
  return <Container>{children}</Container>;
};

export default Heading;
