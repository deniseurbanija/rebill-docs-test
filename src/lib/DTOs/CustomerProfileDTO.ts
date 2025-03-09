import { CardDTO } from './CardDTO';
import { AddressDTO } from './AddressDTO';

export const CustomerProfileDTO = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Unique identifier for the customer's profile."
    },
    firstName: {
      type: "string",
      description: "Customer's first name."
    },
    lastName: {
      type: "string",
      description: "Customer's last name."
    },
    cellPhone: {
      type: "string",
      description: "Customer's cell phone number."
    },
    birthday: {
      type: "string | null",
      description: "Customer's birthday. Null if not provided."
    },
    taxIdNumber: {
      type: "string",
      description: "Customer's tax ID number. Empty string if not provided."
    },
    taxIdType: {
      type: "string",
      description: "Type of the tax ID. Empty string if not provided."
    },
    personalIdType: {
      type: "string",
      description: "Type of the personal ID."
    },
    personalIdNumber: {
      type: "string",
      description: "Number of the personal ID."
    },
    userEmail: {
      type: "string",
      description: "Email address of the customer."
    },
    createdAt: {
      type: "string",
      description: "Date and time when the profile was created."
    },
    cards: {
      type: "array",
      items: CardDTO,
      description: "Array of card objects associated with the customer."
    },
    address: AddressDTO
  }
};
