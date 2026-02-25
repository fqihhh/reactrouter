import { Outlet, NavLink } from "react-router-dom";
import "./Data.css";

export default function DataLayout() {
  return (
    <>
      <div>
        <h1>Ini Header</h1>
      </div>

      <div>
        <ul>
          <li>
            <NavLink 
              to="product"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="sellers"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Sellers
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="customers"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Customers
            </NavLink>
          </li>
        </ul>
      </div>

      <hr />

      <Outlet />
    </>
  );
}