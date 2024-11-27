import { useApiHook } from "@/hooks/useApiHook";
import React, { useEffect } from "react";

export const ApiCallcustom = () => {
  const { data, loading, error, fetchData } = useApiHook();
  console.log("api data", data);
  

  useEffect(() => {
    fetchData("https://api.freeapi.app/api/v1/public/cats/cat/random");
  }, [fetchData]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <div>
        <p>{data?.alt_names}</p>
      </div>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {data?.name}
              </h1>
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
            <p className="text-gray-600">
              York Chocolate cats are known to be true lap cats with a sweet
              temperament. They love to be cuddled and petted. Their curious
              nature makes them follow you all the time and participate in
              almost everything you do, even if related to water: unlike many
              other cats, York Chocolates love it.
            </p>
          </div>
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
                  className="bg-blue-600 h-2.5 rounded-full"
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
