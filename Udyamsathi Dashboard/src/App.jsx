import React from "react";
import {
  Header,
  Footer,
  Rank,
  Report,
  RegisterButton,
  SigninButton,
  Submission,
  UserNotification,
  Newsletter,
  ContactUs,
  GoogleTranslate,
  ImpactMetric,
  PieChart,
  AssignmentMetric,
} from "./components";
import Copyright from "./components/Copyright/Copyright";
import FooterLogo from "./components/FooterLogo/FooterLogo";

const App = () => {
  return (
    <>
      <Header />
      <UserNotification />
      <Submission />
      <Rank />

      <Report />

      <Footer />

      <Copyright />
    </>
  );
};

export default App;
