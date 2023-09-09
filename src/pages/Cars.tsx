import Checkbox from "../ui/Checkbox";
import FormRowVertical from "../ui/FormRowVertical";

function Cars() {
  return (
    <div>
      <FormRowVertical label='Email address' type='horizontal'>
        <Checkbox />
      </FormRowVertical>
    </div>
  );
}

export default Cars;
