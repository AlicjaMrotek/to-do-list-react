import React from "react";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

//1. Stylowanie inputa
const StyleSearchBar = styled(TextField)({
  "& label.Mui-focused": {
    color: "#609EA2",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#609EA2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#332C39",
    },
    "&:hover fieldset": {
      borderColor: "#C92C6D",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#609EA2",
    },
  },
});

function SearchBar(props) {
  const { query, value } = props;

  //2 Funkcja po wpisaniu w input zapytania
  function handleChange(event) {
    //2.1 "Złapanie" stringa z inputów
    const { value } = event.target;
    //2.2 Wywołanie funkcji z App:
    query(value);
    // function handleSearch(queryText) {
    //  setSearchQuery(queryText);
    // }
  }

  return (
    <header>
      <div className="title">
        <TaskAltRoundedIcon sx={{ fontSize: 32 }} />
        <h1>To do list</h1>
      </div>
      <div>
        <StyleSearchBar
          id="outlined-basic"
          variant="outlined"
          onChange={handleChange}
          value={value}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#609EA2" }} />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </header>
  );
}

export default SearchBar;
