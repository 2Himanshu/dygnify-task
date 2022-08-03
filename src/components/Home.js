import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Loan from "./Loan";
import Personall from "./Personall";
import Bussiness from "./Bussiness";
function Home() {
  return (
    <div style={{ marginTop: "20px" }}>
      <Tabs>
        <TabList>
          <Tab>Personal Details</Tab>
          <Tab>Bussiness Details</Tab>
          <Tab>Loan Details</Tab>
        </TabList>

        <TabPanel>
          <Personall />
        </TabPanel>
        <TabPanel>
          <Bussiness />
        </TabPanel>
        <TabPanel>
          <Loan />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Home;
