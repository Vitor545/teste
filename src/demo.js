import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

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

export const consTeste = [
  {
    codigo: "ATT_3874",
    nomeApresentacao: "Gás / Fluído refrigerante",
    dominio: [
      {
        codigo: "01",
        descricao: "R12",
      },
      {
        codigo: "02",
        descricao: "R1234yf",
      },
      {
        codigo: "03",
        descricao: "R134a",
      },
      {
        codigo: "04",
        descricao: "R22",
      },
      {
        codigo: "05",
        descricao: "R290",
      },
      {
        codigo: "06",
        descricao: "R404A",
      },
      {
        codigo: "07",
        descricao: "R407C",
      },
      {
        codigo: "08",
        descricao: "R410A",
      },
      {
        codigo: "09",
        descricao: "R448A",
      },
      {
        codigo: "10",
        descricao: "R449A",
      },
      {
        codigo: "11",
        descricao: "R452A",
      },
      {
        codigo: "12",
        descricao: "R507",
      },
      {
        codigo: "13",
        descricao: "R513A",
      },
      {
        codigo: "14",
        descricao: "R600a",
      },
      {
        codigo: "99",
        descricao: "Outros",
      },
    ],
    objetivos: [
      {
        codigo: 7,
        descricao: "Produto",
      },
    ],
  },
  {
    codigo: "ATT_3878",
    nomeApresentacao: "Gás / Fluído refrigerante",
    dominio: [
      {
        codigo: "01",
        descricao: "R12",
      },
      {
        codigo: "02",
        descricao: "R1234yf",
      },
      {
        codigo: "03",
        descricao: "R134a",
      },
      {
        codigo: "04",
        descricao: "R22",
      },
      {
        codigo: "05",
        descricao: "R290",
      },
      {
        codigo: "06",
        descricao: "R404A",
      },
      {
        codigo: "07",
        descricao: "R407C",
      },
      {
        codigo: "08",
        descricao: "R410A",
      },
      {
        codigo: "09",
        descricao: "R448A",
      },
      {
        codigo: "10",
        descricao: "R449A",
      },
      {
        codigo: "11",
        descricao: "R452A",
      },
      {
        codigo: "12",
        descricao: "R507",
      },
      {
        codigo: "13",
        descricao: "R513A",
      },
      {
        codigo: "14",
        descricao: "R600a",
      },
      {
        codigo: "99",
        descricao: "Outros",
      },
    ],
    objetivos: [
      {
        codigo: 7,
        descricao: "Produto",
      },
    ],
  },
  {
    codigo: "ATT_3879",
    nomeApresentacao: "Gás / Fluído refrigerante",
    dominio: [
      {
        codigo: "01",
        descricao: "R12",
      },
      {
        codigo: "02",
        descricao: "R1234yf",
      },
      {
        codigo: "03",
        descricao: "R134a",
      },
      {
        codigo: "04",
        descricao: "R22",
      },
      {
        codigo: "05",
        descricao: "R290",
      },
      {
        codigo: "06",
        descricao: "R404A",
      },
      {
        codigo: "07",
        descricao: "R407C",
      },
      {
        codigo: "08",
        descricao: "R410A",
      },
      {
        codigo: "09",
        descricao: "R448A",
      },
      {
        codigo: "10",
        descricao: "R449A",
      },
      {
        codigo: "11",
        descricao: "R452A",
      },
      {
        codigo: "12",
        descricao: "R507",
      },
      {
        codigo: "13",
        descricao: "R513A",
      },
      {
        codigo: "14",
        descricao: "R600a",
      },
      {
        codigo: "99",
        descricao: "Outros",
      },
    ],
    objetivos: [
      {
        codigo: 7,
        descricao: "Produto",
      },
    ],
  },
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip() {
  const theme = useTheme();
  const [stateAll, setStateAll] = React.useState({});

  console.log(stateAll);

  const handleChange = (event, selectId) => {
    const {
      target: { value },
    } = event;
    setStateAll({ ...stateAll, [selectId]: value });
  };

  return (
    <div>
      {consTeste.map((item) => (
        <FormControl
          sx={{ width: "20rem", height: "3.3rem", flex: "1 1 auto" }}
        >
          <InputLabel id="demo-multiple-chip-label">
            {item.nomeApresentacao}
          </InputLabel>
          <Select
            name={item.codigo}
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={stateAll[item.codigo] || []}
            onChange={(e) => handleChange(e, item.codigo)}
            input={
              <OutlinedInput
                id="select-multiple-chip"
                label={item.nomeApresentacao}
              />
            }
            renderValue={(selected) => {
              const descriptionSelected = item.dominio
                .filter((el) => selected.includes(el.codigo))
                .map((el) => el.descricao);
              return (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {descriptionSelected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              );
            }}
            MenuProps={MenuProps}
          >
            {item.dominio.map(({ codigo, descricao }) => {
              return (
                <MenuItem key={codigo} value={codigo}>
                  {descricao}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      ))}
    </div>
  );
}
