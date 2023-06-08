import { CSSProperties } from "react";
import styled, { css } from "styled-components";
import { FlexRow } from "../../shared/globals";
import {
  FaceBook,
  Instagram,
  WhatsApp,
  SnapChat,
  Youtube,
  LinkedIn,
  Twitter,
  Telegram,
  Pinterest,
} from "../../assets/Icons";
import { StoreContextType } from "../../lib/storeData";

const socialIcons = {
  facebook: <FaceBook />,
  instagram: <Instagram />,
  whatsapp: <WhatsApp />,
  snapchat: <SnapChat />,
  youtube: <Youtube />,
  twitter: <Twitter />,
  linkedin: <LinkedIn />,
  telegram: <Telegram />,
  pinterest: <Pinterest />,
};

interface SocialLinksProps {
  socialSettings: StoreContextType["socialMedia"];
  padding?: CSSProperties["padding"];
  isCircle?: boolean;
}

const SocialLinks = ({
  socialSettings,
  padding,
  isCircle = true,
}: SocialLinksProps) => {
  return (
    <FlexRow data-test="footer-social-links-list" style={{ padding }}>
      {socialSettings?.map((social, i) => {
        const link = social?.link?.startsWith?.("http")
          ? social.link
          : `http://${social?.link}`;
        return (
          social?.link && (
            <Circle
              key={i}
              href={link}
              title={social.name!}
              data-test="footer-social-link-item"
              target="_blank"
              rel="noreferrer"
              isCircle={isCircle}
            >
              {socialIcons[social.name!]}
            </Circle>
          )
        );
      })}
    </FlexRow>
  );
};

export { SocialLinks };

const Circle = styled.a<{ isCircle?: boolean }>`
  text-decoration: none;
  cursor: pointer;
  :not(:last-child) {
    margin-inline-end: 14px;
  }

  ${({ isCircle }) =>
    isCircle &&
    css`
      width: 40px;
      height: 40px;
      padding: 10px;
      border: solid 1px #eee;
      border-radius: 50%;
      svg {
        width: 18px;
        height: 18px;
      }
    `}
`;
