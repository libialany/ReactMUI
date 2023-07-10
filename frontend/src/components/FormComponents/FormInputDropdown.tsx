import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
export const FormInputDropdown: React.FC<FormInputProps> = ({
  name,
  control,
  label,
  options
}) => {
  const generateSingleOptions = () => {
    const optionsMap =  options || []
    return optionsMap.map((option: any) => {
      return (
        <MenuItem key={option.value} value={option.label}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl size={"small"}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select
            onChange={onChange}
            value={value}
          >
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};
