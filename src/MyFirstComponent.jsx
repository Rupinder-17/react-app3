
import Button from "./Components/Button";
import Alert from "./Components/Alert";
import Input from "./Components/Input";
import { CardWithForm } from "./Components/Card";

const MyFirstComponent = () => {

 function handleAddClick(Data){
  console.log(Data)

 }
 function handleEditClick(items){
  console.log(items);
  
 }
 function handleDeleteButton(element){
  console.log(element);
  
 }
 function handleChange(e){
  console.log(e.target.value);
 }

  return (
    <div>
      <h1>hello</h1>
      <Button name="Add" btn="one" onPress={handleAddClick} />
      <Button name="edit" btn="two" onPress={handleEditClick} />
      <Button name="Delete" onPress={handleDeleteButton} />
      <Alert>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam provident
          vero, ipsam fugiat dolores animi aliquam cumque error itaque officia
          deleniti velit exercitationem, inventore suscipit placeat! Consequatur
          id voluptate molestias.
        </p>
      </Alert>
      <Alert color="yellow" fontFamily="Arial" fontSize="30px" padding="15px">
        <p>This is paragraph</p>
      </Alert>
      <Alert color="red">
        <h1>Rupinder</h1>
      </Alert>
      <Alert color="dodgerblue">
        <h2>Jaskaran singh</h2>
      </Alert>
      <Input
        type="email"
        label="Email"
        color="red"
        name="email"
        id="userEmail"
        backgroundColor="red"
        input-name="email"
        ontype={handleChange}
      />
      <Input
        type="password"
        label="password"
        color="blue"
        ontype={handleChange}
      />

      {/* <Input type="text" label="firstName" color="blue" onChange={handleChange} /> */}
      {/* <Input type="checkbox" label="" color="black" onChange={handleChange} /> */}
      {/* <Input type="radio" label="" color="black" onChange={handleChange} /> */}
      <CardWithForm />
      <img src="https://picsum.photos/600/600" alt="" />
    </div>
  );
};

export default MyFirstComponent;


