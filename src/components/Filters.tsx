import { useEffect, useState } from "react";
import useFilters from "../hooks/useFilters";
import Checkbox from "./Checkbox";
import { Card, CurrencyBadge } from "./styles/Filters.styled";

const currencies: string[] = ["RUB", "USD", "EUR"];
const stops: { label: string; value: string }[] = [
  {
    label: "Все",
    value: "all",
  },
  {
    label: "Без пересадок",
    value: "0",
  },
  {
    label: "1 пересадка",
    value: "1",
  },
  {
    label: "2 пересадки",
    value: "2",
  },
  {
    label: "3 пересадки",
    value: "3",
  },
];

function Filters() {
  const { currency, setCurrency } = useFilters();
  const [isOnly, setOnly] = useState<string>("");

  useEffect(() => {}, [isOnly]);

  return (
    <Card>
      <h4>Валюта</h4>
      <div>
        {currencies.map((cur) => (
          <CurrencyBadge
            key={cur}
            onClick={() => setCurrency(cur)}
            className={cur === currency ? "active" : "none"}
          >
            {cur}
          </CurrencyBadge>
        ))}
      </div>
      <h4>Количество пересадок</h4>
      {stops.map((stop) => (
        <Checkbox
          key={stop.value}
          {...stop}
          isOnly={isOnly}
          setOnly={setOnly}
        />
      ))}
    </Card>
  );
}

export default Filters;
