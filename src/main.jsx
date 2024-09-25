import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import Reset from "./pages/Reset/Reset.jsx";
import Add from "./pages/AddExpenses/Add.jsx";
import AddBudget from "./pages/Addbudget/AddBudget.jsx";
import Edit from "./pages/Edit/Edit.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Add",
    element: <Add />,
  },
  {
    path: "/Reset",
    element: <Reset />,
  },
  {
    path: "/addBudget",
    element: <AddBudget />,
  },
  {
    path: "/ExpensesPage",
    element: <App />,
  },
  {
    path: "/BudgetPage",
    element: <App />,
  },
  {
    path: "/edit/:id/:source",
    element: <Edit />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
