import { CustomerProfileDTO } from './CustomerProfileDTO';
import { SubscriptionDTO } from './SubscriptionDTO';

export const CustomerDetailDTO = {
  id: {
    type: "string",
    description: "Unique identifier for the customer."
  },
  profile: CustomerProfileDTO,
  subscriptions: {
    type: "array",
    items: SubscriptionDTO,
    description: "Array of subscription objects containing details about the customer's subscriptions."
  },
  organizationId: {
    type: "string",
    description: "Unique identifier for the organization associated with the customer."
  }
};