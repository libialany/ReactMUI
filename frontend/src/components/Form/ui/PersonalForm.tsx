import { Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../../FormComponents/FormInputText";
import { DataFormularioType } from "../types/FormType";
import { forwardRef, useImperativeHandle } from "react";
import { useFormData } from "../../../context/FormDataContext";
import { BorderBottom } from "@mui/icons-material";

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
  const { setStoreName, dataStore } = useFormData();
  ///
  const defaultValues = {
    restaurantName: dataStore?.restaurantName,
    address: dataStore?.address,
  };
  //
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
    console.log("Personal Form>", data);
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
        borderBottom: '4px  solid #264BA3'
      }}
    >
      <Typography variant="h6">Name Store:</Typography>
      <FormInputText
        name="restaurantName"
        control={control}
        label=""
      />
    </Paper>
  );
}

export default forwardRef(PersonalForm);
