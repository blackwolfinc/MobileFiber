import HeaderPage from "../assets/components/HeaderPage";
import { Section1 } from "../assets/components/Section1";
import { Section2 } from "../assets/components/Section2";
import "../assets/css/App.css";

function App() {
  return (
    <div className="flex flex-col  lg:mx-0  lg:container 2xl:mx-auto">
      <HeaderPage />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
