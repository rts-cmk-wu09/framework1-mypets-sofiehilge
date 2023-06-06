import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import TutorialApp from "./pages/Tutorial.jsx";
import ListView from "./pages/ListView.jsx";
import ErrorView from "./pages/ErrorView.jsx";
import DetailView from "./pages/DetailView.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorView />}>
      <Route index element={<TutorialApp />} />
      <Route path="/listview/" element={<ListView />} />
      <Route path="/detailview" element ={<DetailView/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
