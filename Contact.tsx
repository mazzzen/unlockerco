import { FormattedMessage } from "react-intl";
import Contact from "../../../components/Contact";
import { StyledHeader } from "../../../components/UtilityComponents/styled";
import { H1 } from "../../../shared/globals";
import { Section } from "../../../shared/layout";
import type { ContactPageProps } from "../../types";

const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <>
      <StyledHeader>
        <H1>
          <FormattedMessage defaultMessage="Contact Us" />
        </H1>
      </StyledHeader>
      <Section background="backgroundReverse">
        <Contact />
      </Section>
    </>
  );
};

export default ContactPage;
