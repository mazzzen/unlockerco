import React, { useMemo } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import styled, { css } from "styled-components";
import {
  ShippingDestinationsQuery,
  useShippingDestinationsQuery,
} from "../../generated/graphql";
import { useStore } from "../../lib/storeData";
import { FlexCol, FlexRow, Label } from "../../shared/globals";
import Asterisk from "../../shared/globals/UiElements/Asterisk";
import SelectWithIcon from "../../shared/globals/UiElements/SelectWithIcon";
import { rtl } from "../../shared/styles-utils";
import { RequiredSpan } from "../CustomerProfile/components/my-addresses/styled";

export interface ShippingDestination {
  country?: { value: string; label: string } | null;
  state?: { value: string; label: string } | null;
  city?: { value: string; label: string } | null;
  region?: { value: string; label: string } | null;
  isValid?: boolean;
}

type DestinationsMap = Map<
  string,
  {
    id: string;
    parentId?: string;
    name: string;
    children?: string[];
    hasChildren: boolean;
  }
>;

interface ShippingDestinationSelectProps {
  startQuery: boolean;
  value?: ShippingDestination;
  error: boolean;
  onChange?: (selections: ShippingDestination) => void;
}

const ShippingDestinationSelect: React.FC<ShippingDestinationSelectProps> = ({
  startQuery,
  value: selections,
  error,
  onChange,
}) => {
  const intl = useIntl();
  const { storeId } = useStore();

  const { data } = useShippingDestinationsQuery({
    variables: { storeId },
    skip: !startQuery,
  });

  const destinationsMap = useMemo(() => getDestinations(data), [data]);

  return (
    <FlexCol alignItems="stretch">
      <StyledField noMargin>
        <Label>
          <FlexRow>
            <FormattedMessage defaultMessage="Country" />
            <Asterisk />
          </FlexRow>
        </Label>
        <SelectWithIcon
          dataTest="select-country"
          keyField="value"
          options={getOptions(destinationsMap)!}
          value={selections?.country}
          className={error ? "invalid" : ""}
          renderOption={(value: ShippingDestination["country"]) =>
            value?.label!
          }
          placeholder={intl.formatMessage({
            defaultMessage: "Select Country",
          })}
          onChange={(option: any) => {
            onChange?.({
              country: option,
              state: null,
              city: null,
              region: null,
              isValid: false,
            });
          }}
        />
        {error && !selections?.country && (
          <RequiredSpan>
            <FormattedMessage defaultMessage="Select a country" />
          </RequiredSpan>
        )}
      </StyledField>

      <StyledFlexRow>
        <StyledField>
          <Label>
            <FlexRow>
              <FormattedMessage defaultMessage="State" />
              <Asterisk />
            </FlexRow>
          </Label>
          <SelectWithIcon
            dataTest="select-state"
            keyField="value"
            options={getOptions(destinationsMap, selections?.country?.value)!}
            value={selections?.state}
            disabled={!selections?.country?.value}
            className={error ? "invalid" : ""}
            renderOption={(value: ShippingDestination["state"]) =>
              value?.label!
            }
            placeholder={intl.formatMessage({
              defaultMessage: "Select State",
            })}
            onChange={(option: any) => {
              onChange?.({
                country: selections?.country,
                state: option,
                city: null,
                region: null,
                isValid:
                  option.value &&
                  !destinationsMap.get(option?.value || "")?.hasChildren,
              });
            }}
          />
          {error && !selections?.state && (
            <RequiredSpan>
              <FormattedMessage defaultMessage="Select a governorate" />
            </RequiredSpan>
          )}
        </StyledField>

        {destinationsMap.get(selections?.state?.value || "")?.hasChildren && (
          <StyledField>
            <Label>
              <FlexRow>
                <FormattedMessage defaultMessage="City" />
                <Asterisk />
              </FlexRow>
            </Label>
            <SelectWithIcon
              dataTest="select-city"
              keyField="value"
              options={getOptions(destinationsMap, selections?.state?.value)!}
              value={selections?.city}
              disabled={!selections?.state?.value}
              className={error ? "invalid" : ""}
              renderOption={(value: ShippingDestination["city"]) =>
                value?.label!
              }
              placeholder={intl.formatMessage({
                defaultMessage: "Select City",
              })}
              onChange={(option: any) => {
                onChange?.({
                  country: selections?.country,
                  state: selections?.state,
                  city: option,
                  region: null,
                  isValid:
                    option.value &&
                    !destinationsMap.get(option?.value || "")?.hasChildren,
                });
              }}
            />
            {error && !selections?.city && (
              <RequiredSpan>
                <FormattedMessage defaultMessage="Select a city" />
              </RequiredSpan>
            )}
          </StyledField>
        )}

        {destinationsMap.get(selections?.city?.value || "")?.hasChildren && (
          <StyledField>
            <Label>
              <FlexRow>
                <FormattedMessage defaultMessage="Region" />
                <Asterisk />
              </FlexRow>
            </Label>
            <SelectWithIcon
              dataTest="select-region"
              keyField="value"
              options={getOptions(destinationsMap, selections?.city?.value)!}
              value={selections?.region}
              disabled={!selections?.city?.value}
              className={error ? "invalid" : ""}
              renderOption={(value: ShippingDestination["region"]) =>
                value?.label!
              }
              placeholder={intl.formatMessage({
                defaultMessage: "Select Region",
              })}
              onChange={(option: any) => {
                onChange?.({
                  country: selections?.country,
                  state: selections?.state,
                  city: selections?.city,
                  region: option,
                  isValid: !!option.value,
                });
              }}
            />
            {error && !selections?.region && (
              <RequiredSpan>
                <FormattedMessage defaultMessage="Select a region" />
              </RequiredSpan>
            )}
          </StyledField>
        )}
      </StyledFlexRow>
    </FlexCol>
  );
};

export default ShippingDestinationSelect;

function getDestinations(data: ShippingDestinationsQuery | undefined) {
  const destinationsMap: DestinationsMap = new Map();
  data?.store?.shippingZones?.nodes?.forEach((zone) => {
    zone?.countries?.nodes?.forEach((country) => {
      destinationsMap.set(country?.id!, {
        id: country?.id!,
        parentId: undefined,
        name: country?.name!,
        children: [
          ...(destinationsMap.get(country?.id!)?.children || []),
          ...(country?.states?.nodes?.map((state) => state?.id!) || []),
        ],
        hasChildren: !!country?.states?.totalCount,
      });

      country?.states?.nodes?.forEach((state) => {
        destinationsMap.set(state?.id!, {
          id: state?.id!,
          parentId: country?.id!,
          name: state?.name!,
          children: state?.cities?.nodes?.map((city) => city?.id!),
          hasChildren: !!state?.cities?.totalCount,
        });
        state?.cities?.nodes?.forEach((city) => {
          destinationsMap.set(city?.id!, {
            id: city?.id!,
            parentId: state?.id!,
            name: city?.name!,
            children: city?.regions?.nodes?.map((region) => region?.id!),
            hasChildren: !!city?.regions?.totalCount,
          });
          city?.regions?.nodes?.forEach((region) => {
            destinationsMap.set(region?.id!, {
              id: region?.id!,
              parentId: city?.id!,
              name: region?.name!,
              children: undefined,
              hasChildren: false,
            });
          });
        });
      });
    });
  });

  return destinationsMap;
}

function getOptions(destinationsMap: DestinationsMap, parentId?: string) {
  if (parentId) {
    return destinationsMap.get(parentId)?.children?.map((id) => ({
      value: id!,
      label: destinationsMap.get(id)?.name!,
    }));
  }

  const options: ShippingDestination["country"][] = [];
  destinationsMap.forEach((item) => {
    if (!item?.parentId) {
      options.push({ label: item?.name!, value: item?.id! });
    }
  });
  return options;
}

/**
 *
 * Styles
 *
 */

const StyledFlexRow = styled(FlexRow)`
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledField = styled.div<{ noMargin?: boolean }>`
  position: relative;
  flex: 1;
  min-width: 150px;

  ${({ noMargin }) =>
    noMargin &&
    css`
      ${rtl("margin-left", "margin-right")}: 0 !important
    `};

  :not(:last-of-type) {
    ${rtl("margin-left", "margin-right")}: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    :not(:last-of-type) {
      margin: 0;
    }
  }
`;
