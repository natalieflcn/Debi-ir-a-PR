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
  { id: 1, name: "San Juan" },
  { id: 2, name: "Ponce" },
  { id: 3, name: "Bayamón" },
  { id: 4, name: "Carolina" },
  { id: 5, name: "Toa Alta" },
  // all 78 municipalities...
];

function CityDropdown({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [search, setSearch] = useState("");

  const dropdownRef = useClickOutside(() => setIsOpen(false));

  const filteredCities = puertoRicoCities.filter((city) =>
    city.name.toLowerCase().includes(search.toLowerCase()),
  );

  function handleSelect(city) {
    setSelectedCity(city);
    setIsOpen(false);
    setSearch("");
    onSelect(city);
  }

  return (
    <StyledRow $direction="horizontal" $align="flex-start">
      <StyledCityDropdown ref={dropdownRef}>
        <StyledButton
          type="button"
          $size="small"
          $variation={selectedCity ? "darkRed" : "primary"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedCity ? selectedCity.name : "Select a city..."}
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
                    $active={selectedCity?.id === city.id}
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
