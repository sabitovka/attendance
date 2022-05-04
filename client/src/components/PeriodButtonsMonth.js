import React, { useEffect, useState } from "react";
import { Badge, Button, Modal, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import ru from "date-fns/locale/ru";

registerLocale('ru', ru);

export const PeriodButtonsMonth = ({ onPeriodSelected }) => {
  const date = new Date();

  const [selectedPeriod, setSelectedPeriod] = useState(new Date());
  const [isFromDatePicker, setIsFromDatePicker] = useState(false);
  const [show, setShow] = useState(false);
    
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    
    switch (e) {
      case 1: 
        setSelectedPeriod(new Date());
        break;
      case 2:
        let month = (date.getMonth() - 1) < 0 ? 11 : date.getMonth() - 1;
        let year = (month == 11) ? date.getFullYear() - 1 : date.getFullYear();
        setSelectedPeriod(new Date(year, month, 1));
        break;
    }
    setIsFromDatePicker(false);
  }

  useEffect(() => {
    onPeriodSelected(selectedPeriod);
  }, [selectedPeriod]);

  return (
    <>
      <ToggleButtonGroup type="radio" name="options" defaultValue={1} onChange={handleChange}>
        <ToggleButton 
          id="period-button-month-0"
          type="checkbox"
          variant="outline-primary"
          value={1}>Текущий месяц</ToggleButton>
        <ToggleButton 
          id="period-button-month-1"
          type="checkbox"
          variant="outline-primary"
          value={2}>Прошлый месяц</ToggleButton>
        <ToggleButton 
          id="period-button-month-2"
          type="checkbox"
          variant="outline-primary"
          onClick={handleShow}
          value={3}>
            Выбрать месяц 
            <Badge 
              pill bg="danger" 
              className={`position-absolute top-0 start-100 translate-middle ${ !isFromDatePicker && 'd-none' }`}
              >{selectedPeriod.toLocaleString("Ru-ru", { "month": "long" })}, {selectedPeriod.getFullYear()}</Badge>
        </ToggleButton>
      </ToggleButtonGroup>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Выберите месяц</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="d-flex justify-content-center">
            <DatePicker
              locale="ru"
              selected={new Date()}
              onChange={(e => {
                setSelectedPeriod(e);
                setIsFromDatePicker(true);
                handleClose();
              })}
              dateFormat="MM/yyyy"
              showMonthYearPicker
              inline
              showFullMonthYearPicker
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}