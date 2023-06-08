import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { PrimaryButton } from "../../../components/Button";
import { theme } from "../../theme";
import { H3, FlexRow } from "../index";
import Modal, { ModalWidthType } from "./Modal";

export interface ModalConfirmProps {
  show?: boolean;
  onClose?: () => void;
  modalHeader: ReactNode;
  modalBody: ReactNode;
  cancelText?: ReactNode;
  confirmText?: ReactNode;
  loading: boolean;
  modalWidth?: ModalWidthType;
  onConfirm?: () => void;
  onCancel?: () => void;
  children?: React.ReactNode;
}

const ModalConfirm: React.FC<ModalConfirmProps> = ({
  children,
  show = false,
  onClose,
  modalHeader,
  modalBody,
  cancelText = <FormattedMessage defaultMessage="Cancel" />,
  confirmText = <FormattedMessage defaultMessage="Delete" />,
  loading = false,
  modalWidth = "small",
  onConfirm,
  onCancel,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const isMountedRef = useRef(false);

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    if (onClose) {
      onClose();
    }
    setOpenModal(false);
  };

  useEffect(() => {
    setOpenModal(show);
  }, [show]);

  useEffect(() => {
    if (loading) {
      isMountedRef.current = true;
    } else if (isMountedRef.current) {
      isMountedRef.current = false;
      setOpenModal(false);
      if (onClose) {
        onClose();
      }
    }
  }, [loading, onClose]);

  let OpenButton: ReactElement | null = null;
  if (children) {
    OpenButton = React.cloneElement(children as ReactElement, {
      onClick: () => {
        setOpenModal(true);
      },
    });
  }

  return (
    <>
      {OpenButton}

      <Modal
        show={openModal}
        onClose={handleCancel}
        modalWidth={modalWidth}
        closeOnEscape={false}
      >
        <Modal.Header>
          <H3>{modalHeader}</H3>
        </Modal.Header>
        <Modal.Body>
          <ModalBodyContent>{modalBody}</ModalBodyContent>
        </Modal.Body>
        <Modal.Footer>
          <FlexRow justifyContent="end">
            <StyledCancelButton onClick={handleCancel}>
              {cancelText}
            </StyledCancelButton>
            <StyledConfirmButton isLoading={loading} onClick={onConfirm}>
              {confirmText}
            </StyledConfirmButton>
          </FlexRow>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const ModalBodyContent = styled.p`
  padding: 10px 0px;
  text-align: center;
`;

const StyledConfirmButton = styled(PrimaryButton)`
  margin-inline-start: 10px;
  background-color: red;
  border-color: red;
`;

const StyledCancelButton = styled(PrimaryButton)`
  border: 1px solid #dde2e4;
  background-color: ${theme.colors.white};
  color: ${theme.text.default};
`;

ModalConfirm.displayName = "ModalConfirm";

export { ModalConfirm };
