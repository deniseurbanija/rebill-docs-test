export const NotificationsSettingsDTO = {
    type: "object",
    properties: {
      id: {
        type: "string",
        description: "Unique identifier for the notification settings record."
      },
      eventsNotifiedByMessage: {
        type: "array",
        items: {
          type: "string",
          description: "Identifiers for events that trigger message notifications."
        },
        description: "List of event identifiers for which notifications are sent via message. Covers various events such as payment refunds, new subscriptions, charge rejections, and more."
      },
      eventsNotifiedByEmail: {
        type: "array",
        items: {
          type: "string",
          description: "Identifiers for events that trigger email notifications."
        },
        description: "List of event identifiers for which notifications are sent via email. Encompasses a range of scenarios including subscription cancellations, charge processes, and subscription renewals."
      },
      customerSupportEmail: {
        type: "string | null",
        description: "Email address for customer support. Null if not configured."
      }
    }
  };
  