import React from "react";

function SpecialSessions() {
  return (
    <div className="flex justify-center p-8">
      <div className="w-full lg:w-10/12">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Special Sessions
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="session bg-white rounded-md shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">
              SS01: eXplainable Artificial Intelligence (XAI) for Cyber-Physical
              Systems
            </h3>
            <p className="mb-2">
              <strong>Organizers:</strong>
            </p>
            <ul>
              <li>
                Dr. Ramanujam E., Assistant Professor, Department of Computer
                Science and Engineering, National Institute of Technology
                Silchar, Assam, India - 788010
              </li>
              <li>
                Dr. Abirami A M., Associate Professor, Department of Information
                Technology, Thiagarajar College of Engineering, Madurai, Tamil
                Nadu, India - 625015
              </li>
            </ul>
          </div>
          <div className="session bg-white rounded-md shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">
              SS02: Smart Technologies for Sustainable Energy, Environment and
              Transportation System
            </h3>
            <p className="mb-2">
              <strong>Organizers:</strong>
            </p>
            <ul>
              <li>
                Dr. Shailendra Singh, Department of Electrical Engineering,
                National Institute of Technology Agartala, Tripura
              </li>
              <li>
                Dr. Sadhan Gope, Department of Electrical Engineering, National
                Institute of Technology Agartala, Tripura
              </li>
              <li>
                Dr. Padmagirisan P., Department of Electrical Engineering,
                National Institute of Technology Agartala, Tripura
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialSessions;
