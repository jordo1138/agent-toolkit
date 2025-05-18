import {listPaymentMethodConfigurationsPrompt} from '@/shared/paymentMethodConfigurations/listPaymentMethodConfigurations';
import {updatePaymentMethodConfigurationPrompt} from '@/shared/paymentMethodConfigurations/updatePaymentMethodConfiguration';

describe('listPaymentMethodConfigurationsPrompt', () => {
  it('mentions limit argument', () => {
    const prompt = listPaymentMethodConfigurationsPrompt();
    expect(prompt).toContain('limit');
  });
});

describe('updatePaymentMethodConfigurationPrompt', () => {
  it('mentions configuration argument', () => {
    const prompt = updatePaymentMethodConfigurationPrompt();
    expect(prompt).toContain('configuration');
  });
});
