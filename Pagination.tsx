import React from "react";
import styled, { css } from "styled-components";
import { FormattedNumber } from "react-intl";
import { LeftSmallArrow, RightSmallArrow } from "../../assets/Icons";
import { Link, useRouter } from "../../lib/i18n";
import { rtl, themeColor } from "../../shared/styles-utils";

const StyledPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0 110px;
`;

const PagesLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const PageLink = styled.a<{ active: boolean }>`
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  padding: 12px;
  text-align: center;
  color: ${({ theme }) => theme.text.alt};
  &:not(:last-child) {
    /* margin-right: 31px; */
  }
  ${({ active }) =>
    active
      ? css`
          color: ${themeColor("primary")};
        `
      : ""}
`;

const Navigate = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.special.border};
  background-color: ${themeColor("primary")};
  cursor: pointer;
  color: #fff;

  svg {
    transform: scaleX(${rtl("-1", "1")});
  }
`;

const PreviousLink = styled(Navigate)<{ disable: boolean }>`
  ${rtl("margin-left", "margin-right")}: 30px;
  ${(props) =>
    props.disable &&
    css`
      pointer-events: none;
      filter: opacity(50%);
    `}
`;

const NextLink = styled(Navigate)<{ disable: boolean }>`
  ${rtl("margin-right", "margin-left")}: 30px;
  ${(props) =>
    props.disable &&
    css`
      pointer-events: none;
      filter: opacity(50%);
    `}
`;

interface PaginationProps {
  offset: number;
  totalCount: number;
  itemPerPage: number;
  style?: React.CSSProperties;
}

export const Pagination = ({
  offset,
  totalCount,
  itemPerPage,
  style,
}: PaginationProps) => {
  const { pathname, query } = useRouter();
  const pagesCount = Math.ceil(totalCount / itemPerPage);
  const pagesArray = Array.from({ length: pagesCount }, (_, i) => i + 1);
  const currentPage = Math.floor(offset / itemPerPage) + 1;

  const [printedPages, setPrintedPages] =
    React.useState<(string | number)[]>(pagesArray);

  React.useEffect(() => {
    if (pagesCount > 5) {
      if (currentPage - 2 > 0 && currentPage + 2 < pagesCount) {
        setPrintedPages([
          1,
          currentPage - 2 + "",
          ...pagesArray.slice(currentPage - 2, currentPage + 1),
          currentPage + 2 + "",
          pagesCount,
        ]);
      } else if (currentPage - 2 <= 0) {
        setPrintedPages([
          ...pagesArray.slice(0, 4),
          pagesArray[5] + "",
          pagesCount,
        ]);
      } else if (currentPage + 2 >= pagesCount) {
        setPrintedPages([
          1,
          pagesArray[pagesCount - 5] + "",
          ...pagesArray.slice(pagesCount - 4),
        ]);
      }
    } else {
      setPrintedPages(pagesArray);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, pagesCount]);

  const pages = printedPages.map((page, index) => {
    return (
      <Link
        key={`page-${index}`}
        href={pathname}
        query={{ ...query, page }}
        passHref
      >
        <PageLink active={page === currentPage}>
          {typeof page === "string" ? "..." : <FormattedNumber value={page} />}
        </PageLink>
      </Link>
    );
  });

  const previousPage = currentPage - 1;
  const nextPages = currentPage + 1;

  if (totalCount <= itemPerPage) {
    return null;
  }

  return (
    <StyledPagination style={style}>
      <Link href={pathname} query={{ ...query, page: previousPage }} passHref>
        <PreviousLink disable={currentPage === 1} title="Previous">
          <LeftSmallArrow />
        </PreviousLink>
      </Link>
      <PagesLinks>{pages}</PagesLinks>
      <Link href={pathname} query={{ ...query, page: nextPages }} passHref>
        <NextLink as="a" disable={currentPage === pagesCount} title="Next">
          <RightSmallArrow />
        </NextLink>
      </Link>
    </StyledPagination>
  );
};
