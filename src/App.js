import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterDateFns";
import Gallery from "./components/Gallery/Gallery";
import UserForm from "./UserForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LocalizationProvider dateAdapter={DateAdapter}>
      <UserForm />
      <Gallery />
    </LocalizationProvider>
  </QueryClientProvider>
);

export default App;
