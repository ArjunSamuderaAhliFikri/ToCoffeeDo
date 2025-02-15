interface InputProps {
  type: "text" | "password" | "number";
  placeholder: string;
  classname: string;
  onChange?: () => {};
  maxLength: number;
}

const Input = (props: InputProps): JSX.Element => {
  return (
    <input
      maxLength={props.maxLength}
      onChange={props.onChange}
      className={props.classname}
      type={props.type ? props.type : "text"}
      placeholder={props.placeholder ? props.placeholder : "masukkan nama"}
    />
  );
};

export default Input;
