import { PriceDTO } from './PriceDTO';

export const SubscriptionDTO = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Unique identifier for the subscription."
    },
    quantity: {
      type: "number",
      description: "Quantity of the subscription."
    },
    lastChargeDate: {
      type: "string",
      description: "The last charge date for the subscription."
    },
    nextChargeDate: {
      type: "string",
      description: "The next scheduled charge date for the subscription."
    },
    nextRetryingDate: {
      type: "string | null",
      description: "The next retrying date for the subscription. Null if not applicable."
    },
    lastRetryingDate: {
      type: "string | null",
      description: "The last retrying date for the subscription. Null if not applicable."
    },
    remainingIterations: {
      type: "number | null",
      description: "The remaining iterations for the subscription. Null if infinite or not applicable."
    },
    userEmail: {
      type: "string",
      description: "Email address associated with the subscription."
    },
    customerFirstName: {
      type: "string",
      description: "Customer's first name associated with the subscription."
    },
    customerLastName: {
      type: "string",
      description: "Customer's last name associated with the subscription."
    },
    status: {
      type: "string",
      description: "Current status of the subscription (e.g., 'ACTIVE')."
    },
    createdAt: {
      type: "string",
      description: "Date and time when the subscription was created."
    },
    title: {
      type: "string",
      description: "Title of the subscription item."
    },
    externalReference: {
      type: "string | null",
      description: "External reference for the subscription. Null if not provided."
    },
    metadataObject: {
      type: "object | null",
      description: "Metadata object for the subscription. Null if not provided."
    },
    balance: {
      type: "string",
      description: "Current balance of the subscription."
    },
    invoices: {
      type: "array",
      description: "Array of invoice objects associated with the subscription. Empty if none are present."
    },
    price: PriceDTO
  }
};
