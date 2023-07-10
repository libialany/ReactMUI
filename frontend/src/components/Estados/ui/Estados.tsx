import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FormInputDropdown } from "../../FormComponents/FormInputDropdown";
import { useForm } from "react-hook-form";
import {
  EstadosTypeCRUD,
  StateIdType,
  defaultValueStates,
} from "../tipos/estado";
import axios from "axios";

function Estados() {
  const id = "99";
  const url = "http://localhost:3000/flujo-estados";
  const changeState = async (idEstado: string) => {
    const res = await axios.get(`${url}/${idEstado}`);
    setValues(res?.data);
  };
  const setValues = ({ idEstado, idEstadoAnterior }: StateIdType) => {
    setValue("idEstado", idEstado);
    setValue("idEstadoAnterior", idEstadoAnterior);
  };
  const [statesIds, setStatesIds] = useState<StateIdType>(defaultValueStates);
  useEffect(() => {
    changeState(id);
  }, []);

  const { handleSubmit, watch, setValue, control } = useForm<EstadosTypeCRUD>({
    defaultValues: {
      idEstado: statesIds?.idEstado,
      idEstadoAnterior: statesIds?.idEstadoAnterior,
    },
  });
  const idEstado = watch("idEstado");
  const idEstadoAnterior = watch("idEstadoAnterior");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <form>
        <Grid container rowSpacing={2} direction={"column"}>
          <Grid item>
            <FormInputDropdown name={"idEstado"} control={control} label={""} />
            <p>{idEstado}</p>
          </Grid>
          <Grid item>
            <FormInputDropdown
              name={"idEstadoAnterior"}
              control={control}
              label={""}
            />
            <p>{idEstadoAnterior}</p>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            p: 2,
          }}
        >
          <Button
            onClick={() => {
              changeState(idEstado);
            }}
          >
            change state
          </Button>
          <Button>cancel</Button>
        </Box>
      </form>
    </Box>
  );
}

export default Estados;
