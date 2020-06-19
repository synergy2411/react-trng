import React from 'react';
import { shallow } from 'enzyme';
import CheckBoxWithLAbel from './CheckBoxWithLabel';
import renderer from 'react-test-renderer';

test("Test Suite 1", () => {

    const cmp =renderer.create(<CheckBoxWithLAbel labelOn="On" labelOff="Off"/>)
    const tree = cmp.toJSON();
    expect(tree).toMatchSnapshot();
// const comp = shallow(<CheckBoxWithLAbel labelOn = "On" labelOff= "Off" />)
// expect(comp.text()).toEqual("Off");
// comp.find("input").simulate("change");
// expect(comp.text()).toEqual("On");

})