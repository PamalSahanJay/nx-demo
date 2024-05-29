import { render } from '@testing-library/react';

import CommonUiComp from './common-ui-comp';

describe('CommonUiComp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonUiComp />);
    expect(baseElement).toBeTruthy();
  });
});
