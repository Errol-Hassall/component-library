import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    backgroundColour: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  backgroundColour: "white",
};

export const BackgroundColour = Template.bind({});
BackgroundColour.args = {
  label: "Coloured Button",
  backgroundColour: "red",
};

export const CanClickButton = Template.bind({});
CanClickButton.args = {
  label: "Clicked Button",
  backgroundColour: "white",
};
CanClickButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole("button"));

  await expect(canvas.getByText("Clicked Button")).toBeInTheDocument();
};

export const CanColourButton = Template.bind({});
CanColourButton.args = {
  label: "Coloured Button",
  backgroundColour: "red",
};
CanColourButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole("button"));

  await expect(canvas.getByText("Coloured Button")).toBeInTheDocument();
  await expect(canvas.getByText("Coloured Button")).toHaveStyle(
    "background-color: rgb(255, 0, 0)"
  );
};
