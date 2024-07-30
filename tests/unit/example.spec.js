import { mount } from "@vue/test-utils";

const App = {
  props: {
    count: {
      type: Number,
      required: true
    }
  },
  methods: {
    isEven(count) {
      return count % 2 === 0;
    }
  },
  template: `
    <div>
      Count: {{ count }} - Is even: {{ isEven(count) }}
    </div>
  `
};

test("App", () => {
  const wrapper = mount(App, {
    props: {
      count: 3
    }
  });
  console.log(wrapper.html());
  expect(wrapper.html()).toContain("true");
});
