import React from "react";
import MobileSubmenu from "./MobileSubmenu";
import { shallow } from "enzyme";

describe("Mobile submenu", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<MobileSubmenu />);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("renders correctly", () => {
    const wrapper = shallow(<MobileSubmenu />);
    expect(wrapper.length).toBe(1);
  });
});
