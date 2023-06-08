import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ApolloError } from "@apollo/client";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import { getLocaleInfo } from "../../../lib/i18n/locales-data";
import { Section } from "../styled";

interface FilterByCategoryProps {
  availableFilters: {
    propertyName: string;
    propertyId: string;
    valueName: string;
    valueId: string;
    count?: number;
  }[];
  loading: boolean;
  error: ApolloError | undefined;
  selectedFilterIds: string[];
}

export const AvailableFilterChoices = ({
  availableFilters: availableFiltersProp,
  loading,
  error,
  selectedFilterIds,
}: FilterByCategoryProps) => {
  const router = useRouter();
  const { locale } = useIntl();
  const activeLocale = getLocaleInfo(locale).code;
  const [availableFilters, setAvailableFilters] =
    useState(availableFiltersProp);

  useEffect(() => {
    if (availableFiltersProp?.length) {
      setAvailableFilters(availableFiltersProp);
    }
  }, [availableFiltersProp]);

  if (error && !availableFilters) {
    return null;
  }

  availableFilters?.sort((a, b) => {
    const fa = a.valueName,
      fb = b.valueName;

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
  return (
    <Section>
      <StyledUL>
        {availableFilters?.map((filter, i) => (
          <StyledLI key={i}>
            <StyledCheckBox
              type="checkbox"
              checked={
                selectedFilterIds?.includes(filter.valueId) ||
                selectedFilterIds?.includes(
                  filter?.valueId! + "|" + filter?.propertyId!
                )
              }
              id={filter?.valueId!}
              disabled={loading}
              onChange={(event) => {
                let filters = selectedFilterIds;
                if (event.target.checked) {
                  if (filter.valueId.startsWith("c:"))
                    filters.push(filter?.valueId!);
                  else
                    filters.push(filter?.valueId! + "|" + filter?.propertyId!);
                } else {
                  if (filter.valueId.startsWith("c:"))
                    filters = filters.filter(
                      (item) => item !== filter?.valueId!
                    );
                  else
                    filters = filters.filter(
                      (item) =>
                        item !== filter?.valueId! + "|" + filter.propertyId
                    );
                  if (router.route.includes("collection")) {
                    router.push(`/${activeLocale}/shop`);
                    return;
                  }
                }
                if (router.query.collection) {
                  filters.push(
                    availableFilters?.find(
                      (item) => item.valueName === router.query.collection
                    )?.valueId!
                  );
                }

                router.push(
                  {
                    pathname: router.pathname.includes("collection")
                      ? `/${activeLocale}/shop`
                      : router.asPath?.split("?")[0],
                    query: {
                      ...router.query,
                      page: 1,
                      filters,
                    },
                  },
                  undefined,
                  { scroll: false }
                );
              }}
            />

            <StyledLabel htmlFor={filter.valueId!} disabled={loading}>
              {filter?.valueName}
            </StyledLabel>
            {/* 
              TODO: Add the number of products for each filter when enabling the filters 
              <StyledSubTitle>({filter?.count})</StyledSubTitle> 
            <StyledSubTitle>({filter?.count})</StyledSubTitle>
              <StyledSubTitle>({filter?.count})</StyledSubTitle> 
            */}
          </StyledLI>
        ))}
      </StyledUL>
    </Section>
  );
};

const StyledUL = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
`;
const StyledLI = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
const StyledLabel = styled.label<{ disabled }>`
  ${({ disabled }) => disabled && "opacity: 0.5;"}
  margin-inline-start: 10px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed;" : "pointer;")};
`;
const StyledCheckBox = styled.input<{ disabled }>`
  ${({ disabled }) => disabled && "opacity: 0.5;"}
  cursor: ${({ disabled }) => (disabled ? "not-allowed;" : "pointer;")};
`;
// TODO: use this when enabling the filters
// const StyledSubTitle = styled.h3`
//   font-size: 12px;
//   font-weight: 500;
//   margin-inline-start: 10px;
//   color: #353535;
// `;
