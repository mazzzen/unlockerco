import { SubscriptionStatus } from "../../generated/graphql";

export function checkSubscriptionActive(
  subscription:
    | {
        status: SubscriptionStatus;
      }
    | undefined
    | null
) {
  return (
    subscription?.status === SubscriptionStatus.Active ||
    subscription?.status === SubscriptionStatus.CancelRequested ||
    subscription?.status === SubscriptionStatus.PastDue ||
    subscription?.status === SubscriptionStatus.DowngradeRequested
  );
}
