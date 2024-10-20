import { useApi } from "@/hooks/useApi";

export const ApiData = () => {
  const [isloading, apiData] = useApi("/comments");
  console.log("api", apiData);
  // console.log(error);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6 underline text-blue-800">Comments Data</h1>
      {isloading ? (
        <p>loading...</p>
      ) : (
        // <pre>{ JSON.stringify(apiData, null, "\t")}</pre>
        <table className="  border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left text-xl font-semibold">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Body</th>
            </tr>
          </thead>
          <tbody>
            {apiData?.map((item, index) => (
              <tr key={index} className="border-b shadow  text-gray-500">
                <td className="border-r px-3 text-gray-700">{item?.id}</td>
                <td className="border-r  px-3">{item?.name}</td>
                <td className="border-r px-3">{item?.email}</td>
                <td className="border-r px-3">{item?.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
