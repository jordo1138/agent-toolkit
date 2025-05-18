import Stripe from 'stripe';
import {z} from 'zod';
import type {Context} from '@/shared/configuration';
import type {Tool} from '@/shared/tools';

export const updatePaymentMethodConfigurationPrompt = (_context: Context = {}) => `
This tool will update a payment method configuration in Stripe.

It takes the following arguments:
- configuration (str): The ID of the payment method configuration to update.
- payment_method (str): The payment method type to modify (e.g., 'link').
- enabled (bool): Whether the payment method should be enabled.
`;

export const updatePaymentMethodConfigurationParameters = (_context: Context = {}) =>
  z.object({
    configuration: z.string().describe('The ID of the configuration to update.'),
    payment_method: z.string().describe('The payment method type to modify.'),
    enabled: z.boolean().describe('Whether the payment method should be enabled.'),
  });

export const updatePaymentMethodConfiguration = async (
  stripe: Stripe,
  context: Context,
  params: z.infer<ReturnType<typeof updatePaymentMethodConfigurationParameters>>
) => {
  try {
    const updateParams: any = {
      [params.payment_method]: {
        display_preference: {merchant_enabled: params.enabled},
      },
    };

    const config = await stripe.paymentMethodConfigurations.update(
      params.configuration,
      updateParams,
      context.account ? {stripeAccount: context.account} : undefined
    );

    return {id: config.id};
  } catch (error) {
    return 'Failed to update payment method configuration';
  }
};

const tool = (context: Context): Tool => ({
  method: 'update_payment_method_configuration',
  name: 'Update Payment Method Configuration',
  description: updatePaymentMethodConfigurationPrompt(context),
  parameters: updatePaymentMethodConfigurationParameters(context),
  actions: {
    paymentMethodConfigurations: {
      update: true,
    },
  },
  execute: updatePaymentMethodConfiguration,
});

export default tool;
