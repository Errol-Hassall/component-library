type ButtonProps = {
  label: string;
  backgroundColour: string;
};

export const Button = (props: ButtonProps) => {
  const { label, backgroundColour } = props;

  return (
    <button className={"button"} style={{ background: backgroundColour }}>
      {label}
    </button>
  );
};
