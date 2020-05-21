import { useStats } from "../hooks/useStats";
import { useState } from "react";
import { Stats } from "./Stats";

export function CountrySelector() {
  const countries = useStats("https://covid19.mathdro.id/api/countries");
  const [selectedCountry, setSelectedCountry] = useState("USA");
  console.log(countries);
  if (!countries) return <p>Loading...</p>;
  return (
    <div>
      <h2>Currently Showing {selectedCountry}</h2>
      <select
        onChange={(e) => {
          console.log(e.target.value);
          setSelectedCountry(e.target.value);
        }}
      >
        {countries.countries.map((country) => {
          return (
            <option key={country.iso2} value={country.iso2}>
              {country.name}
            </option>
          );
        })}
      </select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      />
    </div>
  );
}
