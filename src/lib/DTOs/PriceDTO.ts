export const PriceDTO = {
    type: "object",
    properties: {
      id: {
        type: "string",
        description: "Unique identifier for the price."
      },
      createdAt: {
        type: "string",
        description: "Date and time when the price was created."
      },
      frequency: {
        type: "object",
        properties: {
          quantity: {
            type: "number",
            description: "Quantity of the frequency."
          },
          type: {
            type: "string",
            description: "Type of the frequency (e.g., 'months')."
          }
        }
      },
      repetitions: {
        type: "number | null",
        description: "Number of repetitions for the price. Null if infinite or not applicable."
      },
      description: {
        type: "string | null",
        description: "Description of the price. Null if not provided."
      },
      currency: {
        type: "string",
        description: "Currency of the price (e.g., 'USD')."
      },
      archive: {
        type: "boolean",
        description: "Indicates whether the price is archived."
      },
      itemId: {
        type: "string",
        description: "Unique identifier for the item associated with the price."
      },
      amount: {
        type: "string",
        description: "Amount of the price."
      },
      type: {
        type: "string",
        description: "Type of the price (e.g., 'fixed')."
      },
      debitDay: {
        type: "number | null",
        description: "Day of the month for debit. Null if not applicable."
      },
      debitType: {
        type: "string | null",
        description: "Type of the debit. Null if not applicable."
      }
    }
  };
  