import Alert from "./Alert";

const Button = ({ name = "Button", btn = "del button", onPress }) => {
  return (
    <div>
      <button onClick={()=>onPress(btn)}>
        {name}
        {btn}
      </button>
    </div>
  );
};
export default Button;
