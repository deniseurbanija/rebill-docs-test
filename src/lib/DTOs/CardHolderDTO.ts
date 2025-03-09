import { PersonalIdentificationDTO } from "./PersonalIdentificationDTO";

export const CardHolderDTO = {
  "value": {
      "name": {
          "value": "Card holder's name",
          "type": "string"
      },
      "identification": PersonalIdentificationDTO
  },
  "type": "object"
}