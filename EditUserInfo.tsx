import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import EditNameModal from "./EditNameModal";
import EditEmailModal from "./EditEmailModal";
import EditPasswordModal from "./EditPasswordModal";
import EditPhoneModal from "./EditPhoneModal";
import type { FormValues, ModeType, SuccessStateType } from "./types";
import { Modes } from "./types";
import { rtl } from "../../../../shared/styles-utils";
import { PrimaryButton } from "../../../Button";
import { UpdateIcon } from "../../../../assets/Icons";
import {
  useUpdateCustomerInfoMutation,
  useUpdateCustomerPasswordMutation,
} from "../../../../generated/graphql";
import { useAuth } from "../../../../lib/Authentication";
import { useStore } from "../../../../lib/storeData";
import { createDefaultPhoneInput } from "../../../../shared/globals/UiElements/InputPhone";
import { H4 } from "../../../../shared/globals";

interface EditUserInfoProps {
  mode: ModeType;
  onSuccess: ({ mode, isSuccess }: SuccessStateType) => void;
}

const EditUserInfo = ({ mode, onSuccess }: EditUserInfoProps) => {
  const { storeId } = useStore();
  const [isOpen, setIsOpen] = React.useState(false);
  const [error, setError] = React.useState<React.ReactNode>(null);
  const { user } = useAuth();

  const phoneNumber = createDefaultPhoneInput(user?.phone);

  const [updateCustomer] = useUpdateCustomerInfoMutation();

  const handleSubmit = async (values: FormValues, mode: ModeType) => {
    try {
      await updateCustomer({
        variables: {
          customerId: user?.id!,
          storeId,
          input: {
            name: values?.name,
            phone: values?.phone?.value,
            email: values?.email,
          },
        },
      });
      setIsOpen(false);
      setError(null);
      onSuccess({ mode, isSuccess: true });
    } catch (e) {
      setError(<FormattedMessage defaultMessage="Something Went Wrong!!" />);
    }
  };

  const [updateCustomerPassword] = useUpdateCustomerPasswordMutation();

  const handlePasswordSubmit = async (values: FormValues, mode: ModeType) => {
    try {
      const { data } = await updateCustomerPassword({
        variables: {
          oldPassword: values?.oldPassword,
          newPassword: values?.newPassword,
        },
      });
      if (!data?.updateCustomerPassword) {
        setError(<FormattedMessage defaultMessage="Wrong password" />);
        return;
      }
      setIsOpen(false);
      setError(null);
      onSuccess({ mode, isSuccess: true });
    } catch (e) {
      setError(<FormattedMessage defaultMessage="Something Went Wrong!!" />);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setError(null);
  };

  return (
    <>
      <EditButton prefixIcon={<UpdateIcon />} onClick={() => setIsOpen(true)}>
        <H4 fontWeight={600} color="white">
          <FormattedMessage defaultMessage="Edit" />
        </H4>
      </EditButton>
      {mode === Modes["NAME"] ? (
        <EditNameModal
          isOpen={isOpen}
          onClose={handleClose}
          name={user?.name!}
          onSubmit={(values) => handleSubmit(values, mode)}
          error={error}
        />
      ) : mode === Modes["EMAIL"] ? (
        <EditEmailModal
          isOpen={isOpen}
          onClose={handleClose}
          email={user?.email!}
          onSubmit={(values) => handleSubmit(values, mode)}
          error={error}
        />
      ) : mode === Modes["PASSWORD"] ? (
        <EditPasswordModal
          isOpen={isOpen}
          onClose={handleClose}
          onSubmit={(values) => handlePasswordSubmit(values, mode)}
          error={error}
        />
      ) : mode === Modes["PHONE"] ? (
        <EditPhoneModal
          isOpen={isOpen}
          onClose={handleClose}
          phone={phoneNumber!}
          onSubmit={(values) => handleSubmit(values, mode)}
          error={error}
        />
      ) : null}
    </>
  );
};

export default EditUserInfo;

const EditButton = styled(PrimaryButton)`
  padding: ${rtl("10px 10px 10px 20px", "10px 20px 10px 10px")};
  height: 46px;
  svg {
    transform: scaleX(${rtl("-1", "1")});
  }
`;
