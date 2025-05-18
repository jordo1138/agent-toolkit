import Stripe from 'stripe';
import {z} from 'zod';
import type {Context} from '@/shared/configuration';
import type {Tool} from '@/shared/tools';

export const listPaymentMethodConfigurationsPrompt = (_context: Context = {}) => `
This tool will fetch a list of Payment Method Configurations from Stripe.

It takes one optional argument:
- limit (int, optional): The number of configurations to return.
`;

export const listPaymentMethodConfigurationsParameters = (_context: Context = {}) =>
  z.object({
    limit: z
      .number()
      .int()
      .min(1)
      .max(100)
      .optional()
      .describe(
        'A limit on the number of objects to be returned. Limit can range between 1 and 100.'
      ),
  });

export const listPaymentMethodConfigurations = async (
  stripe: Stripe,
  context: Context,
  params: z.infer<ReturnType<typeof listPaymentMethodConfigurationsParameters>>
) => {
  try {
    const configs = await stripe.paymentMethodConfigurations.list(
      params,
      context.account ? {stripeAccount: context.account} : undefined
    );

    return configs.data;
  } catch (error) {
    return 'Failed to list payment method configurations';
  }
};

const tool = (context: Context): Tool => ({
  method: 'list_payment_method_configurations',
  name: 'List Payment Method Configurations',
  description: listPaymentMethodConfigurationsPrompt(context),
  parameters: listPaymentMethodConfigurationsParameters(context),
  actions: {
    paymentMethodConfigurations: {
      read: true,
    },
  },
  execute: listPaymentMethodConfigurations,
});

export default tool;
