import React from "react";
import MobileSubmenuItem from "./MobileSubmenuItem";
import { shallow } from "enzyme";

describe("Mobile submenu", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<MobileSubmenuItem />);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("renders correctly", () => {
    const wrapper = shallow(<MobileSubmenuItem />);
    expect(wrapper.length).toBe(1);
  });
});
