import { Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../../FormComponents/FormInputText";
import { DataFormularioType } from "../types/FormType";
import { forwardRef, useImperativeHandle } from "react";
import { useFormData } from "../../../context/FormDataContext";
const defaultValues = {
  restaurantName: "",
  address: "",
};
export interface PersonalFormRef {
  validate: () => void;
}
interface PropsComponente {
  nextForm: () => void;
}

function PersonalForm(
  props: PropsComponente,
  ref: React.Ref<unknown | undefined>
) {
  const { setStoreName } = useFormData();
  ///
  useImperativeHandle(
    ref,
    (): PersonalFormRef => ({
      validate: () => {
        console.log("validating ...");
        handleSubmit(onSubmitForm)();
      },
    })
  );
  ///
  const onSubmitForm = (data: DataFormularioType) => {
    console.log('Personal Form>',data);
    setStoreName(data);
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
      <Typography variant="h4">Name Store:</Typography>
      <FormInputText name="restaurantName" control={control} label="Text Input" />
    </Paper>
  );
}

export default forwardRef(PersonalForm);
