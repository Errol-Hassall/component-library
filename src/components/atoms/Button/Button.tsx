type ButtonProps = {
  label: string;
  backgroundColour: string;
  textColour: string;
};

export const Button = (props: ButtonProps) => {
  const { label, backgroundColour, textColour } = props;

  return (
    <button
      className={"button"}
      style={{ background: backgroundColour, color: textColour, width: "10%" }}
    >
      {label}
    </button>
  );
};
