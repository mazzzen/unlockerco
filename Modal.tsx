import * as React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Transition } from "react-transition-group";
import { Cancel as CloseIcon } from "../../../assets/Icons";
import { isBrowser } from "../../../lib/isBrowser";
import { useEscapeAndStopScrollingEffect } from "../../../hooks/useEscapeAndStopScrollingEffect";

const ModalWidth = {
  large: "95%",
  medium: "50%",
  small: "30%",
};

const desktopModalTransitionStyles = {
  entering: { transform: "translateY(-5rem)", opacity: 0 },
  entered: { transform: "translateY(0)", opacity: 1 },
  exiting: { transform: "translateY(-5rem)", opacity: 0 },
  exited: { transform: "translateY(-5rem)", opacity: 0 },
};

const mobileModalTransitionStyles = {
  entering: { transform: "translateY(5rem)", opacity: 0 },
  entered: { transform: "translateY(0)", opacity: 1 },
  exiting: { transform: "translateY(5rem)", opacity: 0 },
  exited: { transform: "translateY(5rem)", opacity: 0 },
};

function getModalTransition(isMobile: boolean, transitionState) {
  return isMobile
    ? {
        ...mobileModalTransitionStyles[transitionState],
      }
    : {
        ...desktopModalTransitionStyles[transitionState],
      };
}

const backdropTransitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export type ModalWidthType = keyof typeof ModalWidth;

export interface ModalProps {
  show: boolean;
  onClose: any;
  modalWidth?: ModalWidthType;
  noTransition?: boolean;
  closeOnEscape?: boolean;
  overflow?: boolean;
  position?: number;
  children?: React.ReactNode;
}

const Backdrop = styled.div<{ duration: number; zIndex: number }>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: ${({ zIndex }) => 999 + zIndex * 2};
  overflow-x: hidden;
  overflow-y: auto;
  outline: none;
  box-sizing: border-box;

  ${({ duration }) => `  transition: all ${duration}ms ease-in-out`};
`;

const ModalWrapper = styled.div<{ zIndex: number }>`
  position: fixed;
  z-index: ${({ zIndex }) => 1000 + zIndex * 2};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  top: 0;
  left: 0;
`;

const ModalContainer = styled.div<{
  modalWidth: ModalWidthType;
  duration: number;
  isOverflow: boolean;
  zIndex: number;
}>`
  box-sizing: border-box;
  position: fixed;
  z-index: ${({ zIndex }) => 1001 + zIndex * 2};
  max-height: 95%;
  max-width: 1060px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #fff;
  border-radius: 5px;
  width: ${({ modalWidth }) => ModalWidth[modalWidth]};
  ${({ duration }) => `  transition: all ${duration}ms ease-in-out`};
  ${({ isOverflow }) => isOverflow && `overflow:visible`};

  .ModalBody {
    overflow-y: ${({ isOverflow }) => (isOverflow ? "visible" : "auto")};
  }

  @media (max-width: 1024px) {
    min-width: ${ModalWidth["medium"]};
  }

  @media (max-width: 768px) {
    width: 100%;
    bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const CloseContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  height: 52px;
  width: 100%;
  padding: 16px 14px;
`;

const ModalTitle = styled.div`
  padding: 16px 20px;
  box-shadow: inset 0 -1px 0 0 #dfe3e8;
  min-height: 52px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const ModalBody = styled.div`
  padding: 20px;
  max-height: 70vh;
  /* overflow-y: auto; */
`;

const ModalFooter = styled.div`
  box-shadow: inset 0 1px 0 0 #dfe3e8;
  padding: 16px 20px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1;
`;

const ModalCloseButton = ({ onClick }) => {
  return (
    <CloseButton onClick={onClick}>
      <CloseIcon />
    </CloseButton>
  );
};

const Header = ({ children }) => {
  return <ModalTitle>{children}</ModalTitle>;
};

const Body = ({ children }) => {
  return <ModalBody className="ModalBody">{children}</ModalBody>;
};

const Footer = ({ children }) => {
  return <ModalFooter>{children}</ModalFooter>;
};

const Modal: React.FC<ModalProps> & {
  Header?: any;
  Footer?: any;
  Body?: any;
} = (props) => {
  const {
    show,
    onClose,
    children,
    modalWidth = "large",
    noTransition,
    closeOnEscape = true,
    overflow = false,
    position = 0,
  } = props;
  const duration = noTransition ? 0 : 200;
  const isMobile = isBrowser && window?.innerWidth <= 768;

  useEscapeAndStopScrollingEffect({ isOpen: show, onClose, closeOnEscape });

  const ModalComponent = (
    <Transition in={show} timeout={duration} mountOnEnter unmountOnExit>
      {(transitionState) => (
        <>
          {show && (
            <Backdrop
              duration={duration}
              zIndex={position}
              style={{
                ...backdropTransitionStyles[transitionState],
              }}
            />
          )}
          <ModalWrapper zIndex={position}>
            <ModalContainer
              zIndex={position}
              modalWidth={modalWidth}
              isOverflow={overflow}
              duration={duration}
              style={getModalTransition(isMobile, transitionState)}
            >
              {onClose && (
                <CloseContainer>
                  <ModalCloseButton onClick={onClose} />
                </CloseContainer>
              )}
              {children}
            </ModalContainer>
          </ModalWrapper>
        </>
      )}
    </Transition>
  );
  if (!isBrowser) {
    return null;
  }
  return (
    <>
      {ReactDOM.createPortal(ModalComponent, document.getElementById("modal"))}
    </>
  );
};

Modal.displayName = "Modal";
Modal.Body = Body;
Modal.Footer = Footer;
Modal.Header = Header;

export default Modal;
