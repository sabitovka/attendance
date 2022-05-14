import React, { useEffect, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

export const PeriodButtonsMonth = ({ onPeriodSelected }) => {
  const date = new Date();

  const [selectedPeriod, setSelectedPeriod] = useState(new Date());

  const handleChange = (e) => {
    
    switch (e) {
      case 1: 
        setSelectedPeriod(new Date());
        break;
      case 2:
        setSelectedPeriod(new Date());
        break;
      case 3: 
        setSelectedPeriod(new Date());
        break;
    }
  }

  useEffect(() => {
    onPeriodSelected(selectedPeriod);
  }, [selectedPeriod]);

  return (
    <>
      <ToggleButtonGroup type="radio" name="options" defaultValue={1} onChange={handleChange}>
        <ToggleButton 
          id="period-button-week-0"
          type="checkbox"
          variant="outline-primary"
          value={1}>Все</ToggleButton>
        <ToggleButton 
          id="period-button-week-1"
          type="checkbox"
          variant="outline-primary"
          value={2}>Прошлая неделя</ToggleButton>
        <ToggleButton 
          id="period-button-week-2"
          type="checkbox"
          variant="outline-primary"
          value={3}>
            С начала семестра
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}