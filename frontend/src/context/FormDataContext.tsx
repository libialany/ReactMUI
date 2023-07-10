import React, { createContext, ReactNode, useContext, useState } from "react";
type DataFormularioType = {
  restaurantName: string;
  address: string;
};
interface ContextProps {
  dataStore: DataFormularioType;
  setStoreName: (data: DataFormularioType) => Promise<void>;
  setStoreAddress: (data: DataFormularioType) => Promise<void>;
}

const FormStoreContext = createContext<ContextProps>({} as ContextProps);

interface FormContextType {
  children: ReactNode;
}

export const FormStoreProvider = ({ children }: FormContextType) => {
  const [data, setData] = useState<DataFormularioType>({
    restaurantName: "",
    address: "",
  });
  const setFormStore = async (values: DataFormularioType) => {
    setData((prevValues) => ({
      ...prevValues,
      restaurantName: values.restaurantName,
    }));
  };
  const setDataAddress = async (values: DataFormularioType) => {
    setData((prevValues) => ({
      ...prevValues,
      address: values.address,
    }));
  };
  return (
    <FormStoreContext.Provider
      value={{
        dataStore: data,
        setStoreName: setFormStore,
        setStoreAddress: setDataAddress,
      }}
    >
      {children}
    </FormStoreContext.Provider>
  );
};
export const useFormData = () => useContext(FormStoreContext);
