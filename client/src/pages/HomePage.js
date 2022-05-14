import React from "react";
import { NavLink } from "react-router-dom";
import { navigation } from '../common/navigation' 

const HomePage = () => {
  return (
    <div className="container">
      <h3 className="mt-5 w-75">
        {"Автоматизированна система учета посещаемости студентов Енакиевского политехнического техникума"}
      </h3>
      {
        navigation.map(nav => {
          return (
            <>
              <h4 className="mt-3" key={nav.role.id}>{nav.role.title}</h4>
              {
                nav.actions.map((action, index) => {
                  return (
                    <NavLink to={action.link} key={`${nav.role.name}.${index}`}>{action.title} <br /></NavLink>
                  )
                })
              }
            </>
          )
        })
      }
    </div>
  );
};

export default HomePage;