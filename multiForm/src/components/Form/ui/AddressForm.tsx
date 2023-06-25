import { Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputDropdown } from "../../FormComponents/FormInputDropdown";
import { DataFormularioType } from "../types/FormType";
import { forwardRef, useImperativeHandle } from "react";
import { useFormData } from "../../../context/FormDataContext";
import { AddressOptionsType } from "../../FormComponents/FormInputProps";

const arrAddress: AddressOptionsType[] = [
  { value: "Main Street", label: "Main Street" },
  { value: "Second Street", label: " Second Street" },
];

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
  const { dataStore, setStoreAddress } = useFormData();
  ///
  const defaultValues = {
    restaurantName: dataStore?.restaurantName,
    address: dataStore?.address,
  };
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
    console.log("Adress Form>", data);
    setStoreAddress(data);
    props.nextForm();
  };
  const { handleSubmit, control } = useForm<DataFormularioType>({
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
      <Typography variant="h4"> Address Store</Typography>
      <FormInputDropdown
        name="address"
        control={control}
        options={arrAddress}
        label=""
      />
    </Paper>
  );
}

export default forwardRef(AddressForm);
