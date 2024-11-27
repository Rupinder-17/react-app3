import { useApiHook } from "@/hooks/useApiHook";
// import React, { useEffect } from "react";

export const ApiCallcustom = () => {
  const { data, loading, error, fetchData } = useApiHook();
  console.log("api data", data);

  // useEffect(() => {
  //   fetchData("https://api.freeapi.app/api/v1/public/cats/cat/random");
  // }, [fetchData]);

  const handleClick = () => {
    fetchData("https://api.freeapi.app/api/v1/public/cats/cat/random");
  };
  // let speechSynthesis = window.speechSynthesis;
  // let currentUtterance = null;
  let speechSynthesis = window.speechSynthesis;
  let currentUtterance = null;
  const speechDes = () => {
    if (currentUtterance) {
      speechSynthesis.cancel();
    }
    const description = data?.description;
    currentUtterance = new SpeechSynthesisUtterance(description);
    speechSynthesis.speak(currentUtterance);
  };
  const stopDes = ()=>{
    if(currentUtterance){
      speechSynthesis.cancel()
      currentUtterance = null
    }
  }
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {/* <div>
        <p className="bg-red-700">{data?.alt_names}</p>
      </div> */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex gap-20 ">
                <h1 className="text-2xl font-bold text-gray-800">
                  {data?.name}
                </h1>
                <button
                  onClick={handleClick}
                  className="bg-blue-700 px-4 py-1 text-white rounded-md "
                >
                  Random Cat
                </button>
              </div>

              <p className="text-gray-600">United States</p>
            </div>
            <img
              src={data?.image}
              alt="York Chocolate"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="font-semibold text-gray-700">Weight:</p>
              <p>Imperial: 12 - 18 lbs</p>
              <p>Metric: 5 - 8 kg</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Life Span:</p>
              <p>13 - 15 years</p>
            </div>
          </div>
          <div className="mb-6">
            <p className="font-semibold text-gray-700 mb-2">Temperament:</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                Playful
              </span>
              <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                Social
              </span>
              <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                Intelligent
              </span>
              <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                Curious
              </span>
              <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                Friendly
              </span>
            </div>
          </div>
          <div className="mb-6">
            <p className="font-semibold text-gray-700 mb-2">Description:</p>
            <p className="text-gray-600">{data?.description}</p>
          </div>
          <button onClick={speechDes} className="bg-green-800 px-4 py-2 text-white rounded-xl">Speck Description</button>
          <button onClick={stopDes} className="bg-red-800 text-white px-4 py-2 rounded-lg ml-3">Stop Speech</button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="font-semibold text-gray-700 mb-1">Adaptability:</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-1">
                Affection Level:
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-1">
                Child Friendly:
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "80%" }}
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-1">Dog Friendly:</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-1">Energy Level:</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-1">Grooming:</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "60%" }}
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-1">Health Issues:</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-red-600 h-2.5 rounded-full"
                  style={{ width: "20%" }}
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-1">Intelligence:</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-1">
                Shedding Level:
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "60%" }}
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-1">Social Needs:</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "80%" }}
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-1">
                Stranger Friendly:
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "80%" }}
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-1">Vocalisation:</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
              <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                Outdoor
              </span>
              <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">
                Lap Cat
              </span>
              <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                Not Hypoallergenic
              </span>
            </div>
            <a
              href="https://en.wikipedia.org/wiki/York_Chocolate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {Array.isArray(data) && data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.name}
              <p>{item.description}</p>
              <img src={item.image} alt="" />
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No data available</p>
      )}
    </div>
  );
};
