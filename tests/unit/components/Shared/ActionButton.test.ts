import { mount } from "@vue/test-utils";
import ActionButton from "@/components/Shared/ActionButton.vue";

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "i'm so clickable",
        type: "primary",
      },
    });

    expect(wrapper.text()).toMatch("i'm so clickable");
  });

  it("applies one of severel styles to button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "i'm so clickable",
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});