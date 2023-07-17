import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Typography,
} from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";

export interface CatFormRef {
  abrirModal: () => void;
}
interface PropsComponente {
  nextForm: () => void;
}

function CatForm(props: PropsComponente, ref: React.Ref<unknown | undefined>) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState<string>("");
  const cleanNameValue = () => {
    setName("");
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  useImperativeHandle(
    ref,
    (): CatFormRef => ({
      abrirModal: () => {
        console.log("opening ...");
        cleanNameValue();
        handleClickOpen();
      },
    })
  );
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`Hi I'm ${name} Cat Dialog`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Paper
        style={{
          display: "grid",
          gridRowGap: "20px",
          padding: "20px",
          margin: "10px 300px",
          borderBottom: "4px  solid #264BA3",
        }}
      >
        <Typography variant="h6">Hi I'm Cat Form</Typography>
        <Button
          onClick={() => {
            setName("kitty");
            setOpen(true);
          }}
          autoFocus
        >
          change name
        </Button>
      </Paper>
    </>
  );
}

export default forwardRef(CatForm);
