export interface AddressOptionsType {
  value: string;
  label: string;
}
export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  setValue?: any;
  options?: AddressOptionsType[];
}
