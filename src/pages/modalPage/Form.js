import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
// import styles from "./modal.modul.css";

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

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  selectCategory: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  containerTitle: {
    backgroundColor: "#f7f9f6",
    height: 74,
  },
  title: {
    textAlign: "center",
    fontSize: 14,
    margin: "0 auto",
    paddingTop: 30,
  },
  radioBtn: {
    marginLeft: 50,
    marginBottom: 30,
  },
  form: {
    width: 280,
    padding: "0 110px",
  },
  //   containerCategory: {
  //     marginBottom: 32,
  //     height: 35,
  //   },
  Category: {
    width: "100%",
  },
  containerInput: {
    display: "flex",
  },
  input: {
    marginRight: 30,
    padding: 0,
    width: 130,
    "&:last-child": {
      marginRight: 0,
    },
  },
}));

export default function Form() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.containerTitle}>
        <h2 className={classes.title}>ДОБАВИТЬ ТРАНЗАКЦИЮ</h2>
      </div>
      <form className={classes.form}>
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="position"
            name="position"
            defaultValue="top"
            className={classes.radioBtn}
          >
            <FormControlLabel
              value="in"
              control={<Radio color="primary" />}
              label="Доход"
            />
            <FormControlLabel
              value="out"
              control={<Radio color="secondary" />}
              label="Расход"
            />
          </RadioGroup>
          <div className={classes.containerCategory}>
            <TextField
              className={classes.Category}
              id="outlined-select-category"
              select
              //   value={}
              //   onChange={console.log("work")}
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
            />
            <TextField
              id="date"
              type="date"
              defaultValue="2019-08-24"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.input}
            />
          </div>
          <div>
            <h2>Комментарий</h2>
            <TextareaAutosize
              aria-label="empty textarea"
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              rowsMax={4}
            />
          </div>
          <div>
            <Button variant="contained" color="primary">
              Primary
            </Button>
          </div>
        </FormControl>
      </form>
    </>
  );
}
