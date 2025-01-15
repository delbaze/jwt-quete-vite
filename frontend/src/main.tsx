import App from "./App.tsx";
import Home from "./components/Home.tsx";
import Login from "./components/auth/Login.tsx";
import Register from "./components/auth/Register.tsx";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";

export const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false,
  }),
  uri: "http://localhost:4005",
});

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", element: <Register /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
);
