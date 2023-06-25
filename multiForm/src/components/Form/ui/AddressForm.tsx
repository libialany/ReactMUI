import { Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputDropdown } from "../../FormComponents/FormInputDropdown";
import { DataFormularioType } from "../types/FormType";
import { forwardRef, useImperativeHandle } from "react";
import { useFormData } from "../../../context/FormDataContext";
const defaultValues = {
  restaurantName: "",
  address: "",
};
export interface AddressFormRef {
  validate: () => void;
}
interface PropsComponente {
  nextForm: () => void;
}
function AddressForm(
  props: PropsComponente,
  ref: React.Ref<unknown | undefined>
) {
  const {setStoreAddress} = useFormData()
  ///
  useImperativeHandle(
    ref,
    (): AddressFormRef => ({
      validate: () => {
        console.log("validating ...");
        handleSubmit(onSubmitForm)();
      },
    })
  );
  ///
  const onSubmitForm = (data: DataFormularioType) => {
    console.log('Adress Form>',data);
    setStoreAddress(data)
    props.nextForm()
  }
  const { handleSubmit, control } =
    useForm<DataFormularioType>({
      defaultValues: defaultValues,
    });
  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "10px 300px",
      }}
    >
      <Typography variant="h4"> Form Demo</Typography>
      <FormInputDropdown
        name="address"
        control={control}
        label="Dropdown Input"
      />
    </Paper>
  );
}

export default forwardRef(AddressForm);
