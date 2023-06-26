import "./App.css";
import DropFileInput from "./drop-file-input/DropFileInput";

function App() {
  const onFileChange = (files:any) => {
    console.log(files);
}
  return (
    <>
      <DropFileInput />
    </>
  );
}

export default App;
