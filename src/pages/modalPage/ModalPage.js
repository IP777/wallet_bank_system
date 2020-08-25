import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { RadioGroup } from "@material-ui/core";
import Button from "@material-ui/core/Button";

// import Form from "./Form";

const currenciesList = [
  {
    value: "other",
    label: "Разное",
  },
  {
    value: "car",
    label: "Машина",
  },
  {
    value: "products",
    label: "Продукти",
  },
  {
    value: "regular incame",
    label: "Регулярный доход",
  },
  {
    value: "irregular incame",
    label: "Нерегулярный дохід",
  },
];

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    height: 475,
    backgroundColor: "#fffffe",
    boxShadow: theme.shadows[5],
  },
  container: {
    margin: "0 auto",
    width: 280,
    // height: "100%",
  },
  title: {
    margin: 0,
    fontSize: 15,
    textAlign: "center",
    padding: "30px 0",
    backgroundColor: "#f2f3fc",
  },

  // radioBtn: {
  //   marginTop: 30,
  //   marginLeft: 160,
  // },
  containerCategory: {
    width: 280,
    margin: "0 auto",
  },
  inputCategory: {
    width: 280,
  },
  containerInput: {
    display: "flex",
    justifyContent: "center",
  },
  input: {
    marginRight: 25,
    width: 100,
  },
  titileComents: {
    textAlign: "center",
  },
  textarea: {
    padding: 0,
    resize: "none",
    width: 279,
    height: 50,
    border: "1px solid #b9c9d4",
    borderRadius: 5,
  },
  containerComents: {
    width: 280,
    margin: "0 auto",
  },
  containerBtn: {
    width: 280,
    margin: "0 auto",
  },
  btn: {
    width: 280,
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 className={classes.title}>ДОБАВИТЬ ТРАНЗАКЦИЮ</h2>
      <div className={classes.container}>
        <form>
          <div className={classes.containerRadioBtn}>
            <RadioGroup row className={classes.radioBtn}>
              <FormControlLabel
                value="in"
                control={<Radio color="primary" size="small" />}
                label="Доход"
              />
              <FormControlLabel
                value="out"
                control={<Radio color="primary" size="small" />}
                label="Расход"
              />
            </RadioGroup>
          </div>
          <div className={classes.containerCategory}>
            <TextField
              className={classes.inputCategory}
              id="outlined-select-category"
              select
              variant="outlined"
              label="Категория"
            >
              {currenciesList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className={classes.containerInput}>
            <TextField
              id="outlined-value"
              variant="outlined"
              className={classes.input}
              size="small"
            />
            <TextField
              id="date"
              type="date"
              defaultValue="2019-08-24"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
              className={classes.input}
            />
          </div>
          <div className={classes.containerComents}>
            <h2 className={classes.titileComents}>Комментарий</h2>
            <textarea className={classes.textarea} name="" id=""></textarea>
          </div>
          <div className={classes.containerBtn}>
            <Button variant="contained" color="primary" className={classes.btn}>
               ДОБАВИТЬ
            </Button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
