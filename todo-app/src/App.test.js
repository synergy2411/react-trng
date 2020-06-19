import React from 'react';
import App from './App';

import { shallow } from 'enzyme';

describe("Test suite 1", () => {
  it("Should render the app", () => {
    shallow(<App />)
  })
  it("Should be truthy", () => {
    expect(true).toBeTruthy();
  })
})