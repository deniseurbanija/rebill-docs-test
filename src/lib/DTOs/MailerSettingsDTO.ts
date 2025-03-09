export const MailerSettingsDTO = {
    type: "object",
    properties: {
      mailerProvider: {
        type: "string | null",
        description: "The provider for the mailer service. Null if not configured."
      },
      mailerHost: {
        type: "string | null",
        description: "The host for the mailer service. Null if not configured."
      },
      mailerFrom: {
        type: "string | null",
        description: "The from address used in outgoing emails. Null if not configured."
      },
      mailerUser: {
        type: "string | null",
        description: "The user name for the mailer service. Null if not configured."
      },
      mailerPassword: {
        type: "string | null",
        description: "The password for the mailer service. Null if not configured."
      }
    }
  };
  