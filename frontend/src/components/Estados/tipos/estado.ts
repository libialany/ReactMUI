export interface EstadosTypeCRUD {
  idTipo: string;
  idEstado: string;
  idEstadoAnterior: string;
}

export const defaultValues = {
  idTipo: "1",
  idEstado: "1",
  idEstadoAnterior: "",
};

export interface StateIdType {
  idEstado: string;
  idEstadoAnterior: string;
}
export const defaultValueStates = {
  idEstado: "",
  idEstadoAnterior: "",
};
