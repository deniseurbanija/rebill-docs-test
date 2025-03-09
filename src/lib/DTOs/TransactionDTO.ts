export const InstantPaymentDTO = {
  currency: {
    value: 'The currency for the transaction.',
    type: 'string',
    required: true,
  },
  amount: {
    value: 'The amount to be charged.',
    type: 'number',
    required: true,
  },
  name: {
    value:
      'This name will appear on the checkout summary view and the payments section in your dashboard.',
    type: 'string',
    required: false,
  },
  description: {
    value:
      'This description will appear on the checkout summary view and the payments section in your dashboard.',
    type: 'string',
    required: false,
  },
}

export const InstantSubscriptionDTO = {
  currency: {
    value: 'The currency for the transaction.',
    type: 'string',
    required: true,
  },
  amount: {
    value: 'The amount to be charged.',
    type: 'number',
    required: true,
  },
  name: {
    value:
      'This name will appear on the checkout summary view and the payments section in your dashboard.',
    type: 'string',
    required: false,
  },
  description: {
    value:
      'This description will appear on the checkout summary view and the payments section in your dashboard.',
    type: 'string',
    required: false,
  },
  type: {
    value: 'The price type associated to the subscription. Valid types are: fixed, freemium',
    type: 'string',
    enum: ['fixed', 'freemium'],
    required: true,
  },
  frequency: {
    type: 'object',
    value: {
      type: {
        value:
          'This property specifies the frequency type for recurring processing (e.g., yearly or monthly) of a subscription.',
        type: 'string',
        enum: ['years', 'month'],
        required: true,
      },
      quantity: {
        value:
          'This property indicates the amount of frequency type set for recurring processing of a plan.',
        type: 'number',
        required: true,
      },
    },
  },
  debitDay: {
    value:
      "The plan debit date. Valid values are from 1 to 28. Valid values are from 1 to 28. If you don't define this value, the debit date will be the same as the creation date. This value is only allowed if the frequency type is specified as “month”.",
    type: 'number',
    required: false,
  },
  repetitions: {
    value:
      "Subscriptions's repetitions. A quantity greater than 1 to define the cycles or null for unlimited cycles.",
    type: 'number',
    required: false,
  },
}
