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

  @media (max-width: 690px) {
    align-self: center;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  min-width: 0;
  /* max-width: 25rem; */
  /* width: 100%; */
`;

const StyledCityDropdown = styled(StyledDropdown)`
  width: 100%;
  position: relative;
  min-width: 0;
`;

const StyledDropdownMenuCard = styled(DropdownMenuCard)`
  /* width: 100%; */
  width: 100%;
  min-width: 0;

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
  { id: "adjuntas", name: "Adjuntas" },
  { id: "aguada", name: "Aguada" },
  { id: "aguadilla", name: "Aguadilla" },
  { id: "aguas-buenas", name: "Aguas Buenas" },
  { id: "aibonito", name: "Aibonito" },
  { id: "añasco", name: "Añasco" },
  { id: "arecibo", name: "Arecibo" },
  { id: "arroyo", name: "Arroyo" },
  { id: "barceloneta", name: "Barceloneta" },
  { id: "barranquitas", name: "Barranquitas" },
  { id: "bayamón", name: "Bayamón" },
  { id: "caborojo", name: "Cabo Rojo" },
  { id: "caguas", name: "Caguas" },
  { id: "camuy", name: "Camuy" },
  { id: "canóvanas", name: "Canóvanas" },
  { id: "carolina", name: "Carolina" },
  { id: "cataño", name: "Cataño" },
  { id: "cayey", name: "Cayey" },
  { id: "ceiba", name: "Ceiba" },
  { id: "ciales", name: "Ciales" },
  { id: "cidra", name: "Cidra" },
  { id: "coamo", name: "Coamo" },
  { id: "comerío", name: "Comerío" },
  { id: "corozal", name: "Corozal" },
  { id: "culebra", name: "Culebra" },
  { id: "dorado", name: "Dorado" },
  { id: "fajardo", name: "Fajardo" },
  { id: "florida", name: "Florida" },
  { id: "guánica", name: "Guánica" },
  { id: "guayama", name: "Guayama" },
  { id: "guayanilla", name: "Guayanilla" },
  { id: "guaynabo", name: "Guaynabo" },
  { id: "gurabo", name: "Gurabo" },
  { id: "hatillo", name: "Hatillo" },
  { id: "hormigueros", name: "Hormigueros" },
  { id: "humacao", name: "Humacao" },
  { id: "isabela", name: "Isabela" },
  { id: "jayuya", name: "Jayuya" },
  { id: "juana-díaz", name: "Juana Díaz" },
  { id: "juncos", name: "Juncos" },
  { id: "lajas", name: "Lajas" },
  { id: "lares", name: "Lares" },
  { id: "las-marías", name: "Las Marías" },
  { id: "las-piedras", name: "Las Piedras" },
  { id: "loíza", name: "Loíza" },
  { id: "luquillo", name: "Luquillo" },
  { id: "manatí", name: "Manatí" },
  { id: "maricao", name: "Maricao" },
  { id: "maunabo", name: "Maunabo" },
  { id: "mayagüez", name: "Mayagüez" },
  { id: "moca", name: "Moca" },
  { id: "morovis", name: "Morovis" },
  { id: "naguabo", name: "Naguabo" },
  { id: "naranjito", name: "Naranjito" },
  { id: "orocovis", name: "Orocovis" },
  { id: "peñuelas", name: "Peñuelas" },
  { id: "ponce", name: "Ponce" },
  { id: "quebradillas", name: "Quebradillas" },
  { id: "rincón", name: "Rincón" },
  { id: "río-grande", name: "Río Grande" },
  { id: "sabana-grande", name: "Sabana Grande" },
  { id: "salinas", name: "Salinas" },
  { id: "san-germán", name: "San Germán" },
  { id: "san-juan", name: "San Juan" },
  { id: "san-lorenzo", name: "San Lorenzo" },
  { id: "san-sebastián", name: "San Sebastián" },
  { id: "santa-isabel", name: "Santa Isabel" },
  { id: "toa-alta", name: "Toa Alta" },
  { id: "toa-baja", name: "Toa Baja" },
  { id: "trujillo-alto", name: "Trujillo Alto" },
  { id: "utuado", name: "Utuado" },
  { id: "vega-alta", name: "Vega Alta" },
  { id: "vega-baja", name: "Vega Baja" },
  { id: "vieques", name: "Vieques" },
  { id: "villalba", name: "Villalba" },
  { id: "yabucoa", name: "Yabucoa" },
  { id: "yauco", name: "Yauco" },
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
