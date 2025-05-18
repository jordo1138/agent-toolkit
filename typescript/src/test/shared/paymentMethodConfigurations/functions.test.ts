import {listPaymentMethodConfigurations} from '@/shared/paymentMethodConfigurations/listPaymentMethodConfigurations';
import {updatePaymentMethodConfiguration} from '@/shared/paymentMethodConfigurations/updatePaymentMethodConfiguration';

const Stripe = jest.fn().mockImplementation(() => ({
  paymentMethodConfigurations: {
    list: jest.fn(),
    update: jest.fn(),
  },
}));

let stripe: ReturnType<typeof Stripe>;

beforeEach(() => {
  stripe = new Stripe('fake');
});

describe('listPaymentMethodConfigurations', () => {
  it('lists configurations', async () => {
    const mockConfigs = {data: [{id: 'pmc_123'}]};
    stripe.paymentMethodConfigurations.list.mockResolvedValue(mockConfigs);
    const result = await listPaymentMethodConfigurations(stripe, {}, {});
    expect(stripe.paymentMethodConfigurations.list).toHaveBeenCalledWith({}, undefined);
    expect(result).toEqual(mockConfigs.data);
  });

  it('includes account if in context', async () => {
    const mockConfigs = {data: []};
    stripe.paymentMethodConfigurations.list.mockResolvedValue(mockConfigs);
    const context = {account: 'acct_123'};
    await listPaymentMethodConfigurations(stripe, context, {});
    expect(stripe.paymentMethodConfigurations.list).toHaveBeenCalledWith({}, {stripeAccount: 'acct_123'});
  });
});

describe('updatePaymentMethodConfiguration', () => {
  it('updates configuration', async () => {
    const mockConfig = {id: 'pmc_123'};
    stripe.paymentMethodConfigurations.update.mockResolvedValue(mockConfig);
    const result = await updatePaymentMethodConfiguration(stripe, {}, {
      configuration: 'pmc_123',
      payment_method: 'link',
      enabled: true,
    });
    expect(stripe.paymentMethodConfigurations.update).toHaveBeenCalledWith(
      'pmc_123',
      {link: {display_preference: {merchant_enabled: true}}},
      undefined
    );
    expect(result).toEqual({id: 'pmc_123'});
  });
});
