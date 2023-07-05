import * as React from 'react';
import { mount } from 'enzyme';
import mountTest from '../../../../tests/mountTest';
import ProLogin from '../index';

mountTest(ProLogin);

describe('ProLogin', () => {
  it('render button count correctly', () => {
    const component = mount(<ProLogin title="Title">Test</ProLogin>);
    expect(component.find('button').text()).toBe('Test');
  });
});
