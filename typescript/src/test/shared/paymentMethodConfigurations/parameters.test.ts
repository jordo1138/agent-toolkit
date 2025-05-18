import {listPaymentMethodConfigurationsParameters} from '@/shared/paymentMethodConfigurations/listPaymentMethodConfigurations';
import {updatePaymentMethodConfigurationParameters} from '@/shared/paymentMethodConfigurations/updatePaymentMethodConfiguration';

describe('listPaymentMethodConfigurationsParameters', () => {
  it('contains limit field', () => {
    const params = listPaymentMethodConfigurationsParameters();
    expect(Object.keys(params.shape)).toEqual(['limit']);
  });
});

describe('updatePaymentMethodConfigurationParameters', () => {
  it('contains required fields', () => {
    const params = updatePaymentMethodConfigurationParameters();
    expect(Object.keys(params.shape)).toEqual([
      'configuration',
      'payment_method',
      'enabled',
    ]);
  });
});
