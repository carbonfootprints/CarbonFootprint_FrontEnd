import backgreen from "../assets/backgreen.svg";
import carfoot from "../assets/carfoot.png";
function Home() {


    return (
        <div
            className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center px-4 sm:px-6 lg:px-8"
            style={{ backgroundImage: `url(${backgreen})` }}
        >
            {/* Nav Section */}
            <div className="w-full bg-black h-16 rounded-full flex items-center justify-between px-6">
                <p className="text-green-700 text-2xl font-pacifco font-bold"> PlanetCare </p>

            </div>

            {/* Header Section */}
            <div className="text-center text-white space-y-6 mb-12 pt-12">
                <p className="text-4xl font-eczar text-green-900 font-bold">Green House Gas Emission Quantification</p>
                <button className="bg-green-600 buttonWrapper text-white text-lg font-bold py-3 px-6 rounded-full hover:bg-green-700 hover:scale-105 focus:scale-95 active:scale-90 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
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
                        Climate change presents unprecedented challenges, but we all have the power to make a difference. Small actions can ripple into a brighter, greener future. By choosing consciously, we can reduce our carbon footprint and inspire others to follow.
                    </p>
                    <p className="text-gray-700 font-josefin mb-6 max-w-2xl mx-auto text-lg tracking-wide">
                        Imagine a world where clean energy powers our lives and waste is minimized. This vision begins with you. Every action contributes to a global movement that protects the planet and improves life for future generations.
                    </p>
                    <p className="text-gray-700 font-josefin mb-12 max-w-2xl mx-auto text-lg tracking-wide">
                        Together, by embracing sustainable practices, we can ensure a thriving, clean environment for generations to come.
                        <span className="font-eczar font-extrabold tracking-wider"> We are the change makers🌿</span>.
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



            <div>
                
            </div>



        </div>
    );
}

export default Home;
