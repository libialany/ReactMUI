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

export interface PersonalFormRef {
  abrirModal: () => void;
}
interface PropsComponente {
  nextForm: () => void;
}

function PersonalForm(
  props: PropsComponente,
  ref: React.Ref<unknown | undefined>
) {
  const cleanNameValue = () => {
    setName("");
  };
  const [name, setName] = useState<string>("");
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  useImperativeHandle(
    ref,
    (): PersonalFormRef => ({
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
          {`Hi I'm ${name} Personal Dialog`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            cancel
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
        <Typography variant="h6">Hi I'm Personal Form</Typography>
        <Button
          onClick={() => {
            setName("Rave");
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

export default forwardRef(PersonalForm);
