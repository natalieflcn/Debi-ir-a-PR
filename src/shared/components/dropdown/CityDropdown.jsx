import { useState } from "react";
import { DropdownMenuCard, DropdownMenuItem, StyledDropdown } from "./Dropdown";
import Button from "../ui/Button";
import useClickOutside from "../../hooks/useClickOutside";
import Heading from "../typography/Heading";
import Row from "../layout/Row";
import styled from "styled-components";
import Input from "../form/Input";

const StyledRow = styled(Row)`
  flex: 1 1 0;
`;

const StyledButton = styled(Button)`
  width: 24rem;
  /* width: 100%; */
`;

const StyledCityDropdown = styled(StyledDropdown)`
  width: 25rem;
  position: relative;
`;

const StyledDropdownMenuCard = styled(DropdownMenuCard)`
  /* width: 100%; */
  width: 25rem;

  /* position: relative;
  bottom: 3px; */
`;

const StyledDropdownMenuItem = styled(DropdownMenuItem)`
  border-bottom: 1px solid var(--color-light-200);
`;
const StyledInput = styled(Input)`
  width: 100%;
  /* position: relative; */
`;
const puertoRicoCities = [
  { id: 1, name: "Adjuntas" },
  { id: 2, name: "Aguada" },
  { id: 3, name: "Aguadilla" },
  { id: 4, name: "Aguas Buenas" },
  { id: 5, name: "Aibonito" },
  { id: 6, name: "Añasco" },
  { id: 7, name: "Arecibo" },
  { id: 8, name: "Arroyo" },
  { id: 9, name: "Barceloneta" },
  { id: 10, name: "Barranquitas" },
  { id: 11, name: "Bayamón" },
  { id: 12, name: "Cabo Rojo" },
  { id: 13, name: "Caguas" },
  { id: 14, name: "Camuy" },
  { id: 15, name: "Canóvanas" },
  { id: 16, name: "Carolina" },
  { id: 17, name: "Cataño" },
  { id: 18, name: "Cayey" },
  { id: 19, name: "Ceiba" },
  { id: 20, name: "Ciales" },
  { id: 21, name: "Cidra" },
  { id: 22, name: "Coamo" },
  { id: 23, name: "Comerío" },
  { id: 24, name: "Corozal" },
  { id: 25, name: "Culebra" },
  { id: 26, name: "Dorado" },
  { id: 27, name: "Fajardo" },
  { id: 28, name: "Florida" },
  { id: 29, name: "Guánica" },
  { id: 30, name: "Guayama" },
  { id: 31, name: "Guayanilla" },
  { id: 32, name: "Guaynabo" },
  { id: 33, name: "Gurabo" },
  { id: 34, name: "Hatillo" },
  { id: 35, name: "Hormigueros" },
  { id: 36, name: "Humacao" },
  { id: 37, name: "Isabela" },
  { id: 38, name: "Jayuya" },
  { id: 39, name: "Juana Díaz" },
  { id: 40, name: "Juncos" },
  { id: 41, name: "Lajas" },
  { id: 42, name: "Lares" },
  { id: 43, name: "Las Marías" },
  { id: 44, name: "Las Piedras" },
  { id: 45, name: "Loíza" },
  { id: 46, name: "Luquillo" },
  { id: 47, name: "Manatí" },
  { id: 48, name: "Maricao" },
  { id: 49, name: "Maunabo" },
  { id: 50, name: "Mayagüez" },
  { id: 51, name: "Moca" },
  { id: 52, name: "Morovis" },
  { id: 53, name: "Naguabo" },
  { id: 54, name: "Naranjito" },
  { id: 55, name: "Orocovis" },
  { id: 56, name: "Patillas" },
  { id: 57, name: "Peñuelas" },
  { id: 58, name: "Ponce" },
  { id: 59, name: "Quebradillas" },
  { id: 60, name: "Rincón" },
  { id: 61, name: "Río Grande" },
  { id: 62, name: "Sabana Grande" },
  { id: 63, name: "Salinas" },
  { id: 64, name: "San Germán" },
  { id: 65, name: "San Juan" },
  { id: 66, name: "San Lorenzo" },
  { id: 67, name: "San Sebastián" },
  { id: 68, name: "Santa Isabel" },
  { id: 69, name: "Toa Alta" },
  { id: 70, name: "Toa Baja" },
  { id: 71, name: "Trujillo Alto" },
  { id: 72, name: "Utuado" },
  { id: 73, name: "Vega Alta" },
  { id: 74, name: "Vega Baja" },
  { id: 75, name: "Vieques" },
  { id: 76, name: "Villalba" },
  { id: 77, name: "Yabucoa" },
  { id: 78, name: "Yauco" },
  // all 78 municipalities...
];

function CityDropdown({ onSelect, value }) {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedCity, setSelectedCity] = useState(null);
  const [search, setSearch] = useState("");

  const dropdownRef = useClickOutside(() => setIsOpen(false));

  const filteredCities = puertoRicoCities.filter((city) =>
    city.name.toLowerCase().includes(search.toLowerCase()),
  );

  function handleSelect(city) {
    onSelect(city.name);
    setIsOpen(false);
    setSearch("");
  }

  return (
    <StyledRow $direction="horizontal" $align="flex-start">
      <StyledCityDropdown ref={dropdownRef}>
        <StyledButton
          type="button"
          $size="small"
          $variation={value ? "darkRed" : "primary"}
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
        >
          {value ? value : "Select a city..."}
        </StyledButton>

        {isOpen && (
          <>
            <StyledInput
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search cities..."
              autoFocus
            />
            <StyledDropdownMenuCard>
              {filteredCities.length === 0 && (
                <StyledDropdownMenuItem>No cities found</StyledDropdownMenuItem>
              )}

              {filteredCities.map((city) => (
                <li key={city.id}>
                  <StyledDropdownMenuItem
                    onClick={() => handleSelect(city)}
                    $active={value?.id === city.id}
                    $dropdownVariation="red"
                  >
                    {city.name}
                  </StyledDropdownMenuItem>
                </li>
              ))}
            </StyledDropdownMenuCard>
          </>
        )}
      </StyledCityDropdown>
    </StyledRow>
  );
}

export default CityDropdown;
