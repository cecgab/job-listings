import { createRoot } from "react-dom/client";

import Layout from "./components/Layout/Layout";
import JobList from "./components/JobList/JobList";

import FilterProvider from "./contexts/FilterContext";

import data from "./data/data.json";
import "../src/styles/index.scss";
import JobFilter from "./components/JobFilter/JobFilter";

const App = () => {
  return (
    <Layout>
      <FilterProvider>
        <JobFilter />
        <JobList ads={data} />
      </FilterProvider>
    </Layout>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<App />);
