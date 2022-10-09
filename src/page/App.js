import HeaderPage from "../assets/components/HeaderPage";
import { Section1 } from "../assets/components/Section1";
import { Section2 } from "../assets/components/Section2";
import { Section3 } from "../assets/components/Section3";
import { Section4 } from "../assets/components/Section4";
import { Section5 } from "../assets/components/Section5";
import { Section6 } from "../assets/components/Section6";
import { Section7 } from "../assets/components/Section7";
import "../assets/css/App.css";

function App() {
  return (
    <div className="flex flex-col  lg:mx-0  lg:container 2xl:mx-auto">
      <HeaderPage />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
}

export default App;
