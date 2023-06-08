import React from "react";
import { ProfileLayout } from "../../../components/CustomerProfile";
import { UserReviews } from "../../../components/CustomerProfile/components/my-reviews/UserReviews";
import { Section } from "../../../shared/layout";

const UserReviewsPage = () => {
  return (
    <Section background={"backgroundReverse"}>
      <ProfileLayout>
        <UserReviews />
      </ProfileLayout>
    </Section>
  );
};

export default UserReviewsPage;
