import React from "react";
import { shallow } from "enzyme";
import MobileCategories from "./MobileCategories";

describe("Mobile categories", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<MobileCategories />);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("renders correctly", () => {
    const wrapper = shallow(<MobileCategories />);
    expect(wrapper.length).toBe(1);
  });
});
