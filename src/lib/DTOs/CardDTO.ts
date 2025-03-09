import { CardHolderDTO } from './CardHolderDTO'
import { ExpirationDTO } from './ExpirationDTO'

export const CardDTO = {
  value: {
    id: {
      value:
        'Card ID. If the ID is provided in the payload, the other customer fields become optional.',
      type: 'string',
    },
    cardNumber: {
      value: 'Card number',
      type: 'string',
    },
    cardHolder: CardHolderDTO,
    securityCode: {
      value: 'Security code',
      type: 'string',
    },
    /* "deviceId": { "value": "Device Id", "type": "string" },
     -- commented because they are not required so far */
    expiration: ExpirationDTO,
  },
  type: 'object',
}
export const CardIdDTO = {
  value: {
    id: {
      value:
        'Card ID. If the ID is provided in the payload, the other customer fields become optional.',
      type: 'string',
    },
  },
  type: 'object',
}
