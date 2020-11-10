import Link from 'next/link';
import { PaginationTypes } from '../../domain/posts/pagination';
import { Container, NextLink, PreviousLink } from './styled';

export type PaginationProps = PaginationTypes;

const Pagination = ({
  nextPage,
  numberOfPosts,
  postsPerPage,
  previousPage,
  category,
  tag,
}: PaginationProps) => {
  const categoryName = category || '';
  const tagName = tag || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}/${tagName}`;
  const previousLink = `/post/page/${previousPage}/${categoryName}/${tagName}`;
  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;
  return (
    <Container>
      {hasPreviousPage && (
        <PreviousLink>
          <Link href="post/page/[...param]" as={previousLink}>
            <a>Previous</a>
          </Link>
        </PreviousLink>
      )}
      {hasNextPage && (
        <NextLink>
          <Link href="post/page/[...param]" as={nextLink}>
            <a>Next</a>
          </Link>
        </NextLink>
      )}
    </Container>
  );
};

export default Pagination;
