import React from "react";
import { Button, Card, Form } from "react-bootstrap";

const LoginPage = () => {

  return (
    <div className="container d-flex justify-content-center pb-5">
      <Card className="my-auto w-50 p-5 mt-5">
        <h4 className="mb-5 text-center">Автоматизированна система учета посещаемости студентов<br />Енакиевского политехнического техникума</h4>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Имя пользователя</Form.Label>
            <Form.Control type="email" placeholder="Введите логин" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="Пароль" />
          </Form.Group>
          <Button variant="primary" className="float-end">
            Войти
          </Button>
        </Form>
      </Card>
      
    </div>
    
  );
};

export default LoginPage;