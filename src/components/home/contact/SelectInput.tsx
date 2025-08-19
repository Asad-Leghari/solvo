import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Input from "@mui/material/Input";
import { Checkbox } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type SelectInputProps = {
  value: string[];
  onChange: (event: SelectChangeEvent<string[]>) => void;
  options: string[];
  placeholder?: string;
  name: string;
  multiple?: boolean;
};

export default function SelectInput({
  value,
  onChange,
  options,
  placeholder = "Placeholder",
  name,
  multiple,
}: SelectInputProps) {
  const theme = useTheme();

  return (
    <FormControl sx={{ width: "100%" }} variant="standard">
      <Select
        multiple={multiple ? false : true}
        displayEmpty
        value={value}
        name={name}
        onChange={onChange}
        input={<Input />}
        renderValue={(selected) => {
          if ((selected as string[]).length === 0) {
            return (
              <span style={{ color: theme.palette.text.disabled }}>
                {placeholder}
              </span>
            );
          }
          return (selected as string[]).join(", ");
        }}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
      >
        {options.map((name) => (
          <MenuItem
            key={name}
            value={name}
            sx={{
              display: "flex",

              justifyContent: "space-between",
              fontWeight: value.includes(name)
                ? theme.typography.fontWeightMedium
                : theme.typography.fontWeightRegular,
              "&:hover": {
                backgroundColor: "#edf7ff", // lighter hover (12% opacity)
                color: "#0273BD",
              },
              "&.Mui-selected": {
                backgroundColor: "#edf7ff !important", // slightly stronger selection
                color: "#0273BD",
              },
            }}
          >
            {name}
            <Checkbox checked={value.includes(name)} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
