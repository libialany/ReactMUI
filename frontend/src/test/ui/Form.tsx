import React, { useRef, useState } from "react";
import { PersonalFormRef } from "./PersonalForm";
import CatForm, { CatFormRef } from "./CatForm";
import PersonalForm from "./PersonalForm";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Typography,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Menu,
  MenuItem,
} from "@mui/material";
export default function Form() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const refPersonalForm = useRef<PersonalFormRef>();
  const refCatForm = useRef<CatFormRef>();

  const nextForm = () => {
    console.log("You clicked me....");
  };
  return (
    <React.Fragment>
      <Typography component="h1" variant="h4" align="center">
        Testing
      </Typography>
      <>
        <Button
          sx={{
            m: 2,
            p: 1,
          }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          color="info"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          open a dialog
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              refPersonalForm?.current?.abrirModal();
              handleClose();
            }}
          >
            Personal dialog
          </MenuItem>
          <MenuItem
            onClick={() => {
              refCatForm?.current?.abrirModal();
              handleClose();
            }}
          >
            Cat dialog
          </MenuItem>
        </Menu>
      </>
      <React.Fragment>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Cat</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CatForm ref={refCatForm} nextForm={nextForm} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Personal</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PersonalForm ref={refPersonalForm} nextForm={nextForm} />
          </AccordionDetails>
        </Accordion>
      </React.Fragment>
    </React.Fragment>
  );
}
