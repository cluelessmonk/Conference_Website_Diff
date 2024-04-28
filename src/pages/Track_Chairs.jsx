const Track_Chairs = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-white text-3xl justify-center items-center font-bold  mt-10 mb-14 bg-blue-400 rounded-lg flex">
        Track Chairs
      </div>
      <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            Track 1: Biomedical Sensors and Devices
          </div>
          <p className="text-gray-700 text-base">
            <strong>Chair:</strong> Dr. John Doe
          </p>
          <p className="text-gray-700 text-base">
            <strong>Affiliation:</strong> Department of Biomedical Engineering,
            University of XYZ
          </p>
        </div>
      </div>

      <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            Track 2: Wearable Health Monitoring Systems
          </div>
          <p className="text-gray-700 text-base">
            <strong>Chair:</strong> Dr. Jane Smith
          </p>
          <p className="text-gray-700 text-base">
            <strong>Affiliation:</strong> Department of Electrical Engineering,
            ABC University
          </p>
        </div>
      </div>
    </div>
  );
};

export default Track_Chairs;
