const Alert = ({ color = "pink", fontFamily, fontSize, padding, children }) => {
  console.log(color, children);

  return (
    <div
      style={{
        backgroundColor: color,
        fontFamily: fontFamily,
        fontSize: fontSize,
        paddingLeft: padding,
      }}
    >
      {children}
    </div>
  );
};
export default Alert;
