import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import backgreen from "../assets/backgreen.svg";
import carfoot from "../assets/carfoot.png";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

function Home() {
  const navigate = useNavigate(); // Initialize navigate function

  const data = [
    {
      label: "Energy forms",
      value: "html",
      desc: `
              <h4 class="font-bold text-xl text-gray-800 mb-4">Renewable and Non-Renewable Energy</h4>
              <ul class="list-disc pl-6 text-gray-700">
                  <li><strong>Renewable energy</strong> is essentially inexhaustible and can be replenished naturally.</li>
                  <li><strong>Non-renewable energy</strong> is exhaustible and cannot be produced, grown, or replenished at a rate that can sustain its consumption.</li>
              </ul>
          `,
    },
    {
      label: "Primary sources of energy - Coal",
      value: "react",
      desc: `
              <h4 class="font-bold text-xl text-gray-800 mb-4">Primary sources of energy - Coal</h4>
              <ul class="list-disc pl-6 text-gray-700">
                  <li>Most abundant and geographically dispersed fossil fuel.</li>
                  <li>Peat, Brown coal (lignite), Sub-bituminous and Anthracite.</li>
                  <li>Coal reserve: 1257 billion tonnes worldwide, India: 378.21 billion metric tonnes.</li>
                  <li>Coal accounts for 55% of India’s energy needs.</li>
                  <li>133 years of coal left @ current consumption levels.</li>
              </ul>
          `,
    },
    {
      label: "Primary sources of energy - Oil",
      value: "vue",
      desc: `
              <h4 class="font-bold text-xl text-gray-800 mb-4">Primary sources of energy - Oil</h4>
              <ul class="list-disc pl-6 text-gray-700">
                  <li>World oil reserve: 1570 trillion barrels.</li>
                  <li>India oil reserve: 651.77 million tonnes.</li>
                  <li>At current rate of consumption, oil will be available for the next 47 years.</li>
              </ul>
          `,
    },
    {
      label: "Primary sources of energy - Natural Gas",
      value: "angular",
      desc: `
              <h4 class="font-bold text-xl text-gray-800 mb-4">Primary sources of energy - Natural Gas</h4>
              <ul class="list-disc pl-6 text-gray-700">
                  <li>World natural gas reserve: 1,064,349 trillion barrels of oil equivalent.</li>
                  <li>India natural gas reserve: 651.77 million tonnes.</li>
                  <li>At current rate of consumption, natural gas will be available for the next 50 years approximately.</li>
              </ul>
          `,
    },
    {
      label: "Solar, Wind, Bio power, Hydro electric",
      value: "svelte",
      desc: `
              <h4 class="font-bold text-xl text-gray-800 mb-4">Solar, Wind, Bio power, Hydro electric</h4>
              <ul class="list-disc pl-6 text-gray-700">
                  <li>Renewables’ share of total primary energy consumption globally reached 14.6%.</li>
                  <li>India’s target for renewable energy generation by 2030 is 500 GW, current capacity is 143.64 GW.</li>
                  <li>Installed energy capacity in India is 441.97 GW as of 31 March 2024.</li>
              </ul>
          `,
    },
    {
      label: "Energy and Environment",
      value: "energy",
      desc: `
              <h4 class="font-bold text-xl text-gray-800 mb-4">Energy and Environment</h4>
              <ul class="list-disc pl-6 text-gray-700">
                  <li>Combustion of hydrocarbon-based fuels generates by-products, mainly air pollutants such as CO2, PM, SO2, NOx, HC, and CO.</li>
                  <li>CO2 is a major contributor to global warming and climate change - CO2 emissions from the combustion of fossil fuels is by far the largest source of energy-related greenhouse gas emissions, contributing around 87% of the total.</li>
              </ul>
          `,
    },
  ];

  const handleClick = () => {
    navigate("/calci"); // Navigate to /calci page on button click
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${backgreen})` }}
    >
      {/* Nav Section */}
      <div className="w-full bg-black h-16 rounded-full flex items-center justify-between px-6">
        <p className="text-green-700 text-2xl font-pacifco font-bold">
          {" "}
          PlanetCare{" "}
        </p>
      </div>

      {/* Header Section */}
      <div className="text-center text-white space-y-6 mb-12 pt-12">
        <p className="text-4xl font-eczar text-green-900 font-bold">
          Green House Gas Emission Quantification
        </p>
        <button
          onClick={handleClick} // Attach handleClick to button click
          className="bg-green-600 buttonWrapper text-white text-lg font-bold py-3 px-6 rounded-full hover:bg-green-700 hover:scale-105 focus:scale-95 active:scale-90 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
        >
          Let’s Calculate
        </button>
      </div>

      {/* Illustration Section */}
      <div className="p-8 rounded-3xl flex flex-col sm:grid sm:grid-cols-2 sm:gap-8 items-center justify-center mx-auto mb-12">
        {/* Text Section */}
        <div className="sm:text-left text-center">
          <h3 className="text-4xl font-eczar font-bold text-gray-800 mb-6 tracking-wide">
            Actions Matter, Together We Can Make a Change
          </h3>
          <p className="text-gray-700 font-josefin mb-8 max-w-2xl mx-auto text-lg tracking-wide">
            Climate change presents unprecedented challenges, but we all have
            the power to make a difference. Small actions can ripple into a
            brighter, greener future. By choosing consciously, we can reduce our
            carbon footprint and inspire others to follow.
          </p>
          <p className="text-gray-700 font-josefin mb-6 max-w-2xl mx-auto text-lg tracking-wide">
            Imagine a world where clean energy powers our lives and waste is
            minimized. This vision begins with you. Every action contributes to
            a global movement that protects the planet and improves life for
            future generations.
          </p>
          <p className="text-gray-700 font-josefin mb-12 max-w-2xl mx-auto text-lg tracking-wide">
            Together, by embracing sustainable practices, we can ensure a
            thriving, clean environment for generations to come.
            <span className="font-eczar font-extrabold tracking-wider">
              {" "}
              We are the change makers🌿
            </span>
            . 
          </p>
        </div>

        {/* Image Section */}
        <div className="sm:flex sm:justify-end lg:mr-20 lg:-ml-16">
          <img
            src={carfoot}
            alt="Illustration"
            className="object-contain max-w-full h-auto lg:max-w-[85%] sm:max-w-[90%] lg:scale-110" // Increased size and scaling
          />
        </div>
      </div>

      <div className="p-6 w-full mx-auto shadow-lg rounded-lg">
  <Tabs value="html" className="rounded-lg">
    {/* Tabs Header Section */}
    <TabsHeader className="bg-green-900 rounded-t-lg flex flex-col sm:flex-row sm:space-y-0 space-y-2">
      {data.map(({ label, value }) => (
        <Tab
          key={value}
          value={value}
          className="text-black font-bold font-eczar text-lg py-2 px-4 transition-all duration-300"
        >
          {label}
        </Tab>
      ))}
    </TabsHeader>

    {/* Tabs Body Section */}
    <TabsBody className="p-4 bg-gray-50 justify-center rounded-b-lg">
      {data.map(({ value, desc }) => (
        <TabPanel
          key={value}
          value={value}
          className="text-gray-800 text-base leading-6"
        >
          <div dangerouslySetInnerHTML={{ __html: desc }} />
        </TabPanel>
      ))}
    </TabsBody>
  </Tabs>
</div>


    </div>
  );
}

export default Home;
