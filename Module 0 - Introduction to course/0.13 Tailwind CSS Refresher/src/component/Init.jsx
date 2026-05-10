import bgImage1 from "../assets/11.jpg";
import bgImage2 from "./11.png";
import bgImage3 from "../../../../image/11.jpg";

function Init() {
  return (
    <>
      <div className="text-3xl font-bold underline">
        <h1>Hello World!</h1>
        <h2>This is test...</h2>
      </div>

      <div>
        <p className="text-red-500 text-3xl text-left">Tom</p>
        <p className="text-gray-400 text-lg text-center">Jerry</p>
        <p className="text-blue-900 text-xs text-right">Max</p>
      </div>

      <div className="bg-red-500 opacity-50 min-w-40 min-h-60">
        Tailwind CSS is great
      </div>
      <div className="bg-blue-200 w-1/2 h-32">Tailwind CSS is awesome</div>
      <div className="bg-gray-900 text-white m-4 p-8">
        Tailwind CSS is fantastic
      </div>

      {/* <div className="bg-[url('../../../../image/11.jpg')] bg-center bg-no-repeat bg-cover h-screen"></div> */}

      <img src={bgImage3} alt="image" className="w-64 h-64" />

      <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpk9nlQn0HJm9kWpPtJZGo0slLlTCggCtlQ&s')] bg-center bg-no-repeat bg-cover h-50 w-50"></div>

      {/* <div className="bg-[url('../assets/11.jpg')] bg-center bg-no-repeat bg-cover h-50 w-50"></div> */}

      {/* <div className="bg-[url('11.png')] bg-center bg-no-repeat bg-cover h-50 w-50"></div> */}

      <div
        style={{ backgroundImage: `url(${bgImage1})` }}
        className="bg-center bg-no-repeat bg-cover w-96 h-96"
      ></div>

      <img src={bgImage2} className="object-center object-cover w-96 h-96" />

      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        We are learning gradients
      </div>
      <div className="bg-linear-to-r from-cyan-500 to-blue-500">
        We are learning gradients
      </div>
    </>
  );
}

export default Init;
