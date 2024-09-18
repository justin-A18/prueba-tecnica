import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { router } from "./router";
import "./index.css";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>
);
