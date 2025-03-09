import { CardHolderDTO } from "./CardHolderDTO";
import { ExpirationDTO } from "./ExpirationDTO";

export const CardForProfileCreationDTO = {
    "value": {
        "cardNumber": {
            "value": "Card number",
            "type": "string"
        },
        "cardHolder": CardHolderDTO,
        "securityCode": {
            "value": "Security code",
            "type": "string"
        },
        /* "deviceId": { "value": "Device Id", "type": "string" },
     -- commented because they are not required so far */
        "expiration": ExpirationDTO
    },
    "type": "object"
}

  