import React from "react";

const Committee = () => {
  const organizingCommittee = [
    {
      role: "Patron",
      name: "Prof. Rama S. Verma",
      department: "Director",
      college: "MNNIT Allahabad",
    },
    {
      role: "Chairperson",
      name: "Head",
      department: "Department of Biotechnology",
      college: "MNNITA",
    },
    {
      role: "Treasurer",
      name: "Dr. Joybrata Mal",
      department: "Department of Biotechnology",
      college: "MNNIT Allahabad",
    },
  ];

  const organizingSecretaries = [
    {
      name: "Dr. Manisha Sachan",
      department: "Department of Biotechnology",
      college: "MNNIT Allahabad",
    },
    {
      name: "Dr. Seema Nara",
      department: "Department of Biotechnology",
      college: "MNNIT Allahabad",
    },
  ];

  const organizingCoordinators = [
    {
      name: "Dr. Rajitha B.",
      department: "Department of Computer Science and Engineering",
      college: "MNNIT Allahabad",
    },
    {
      name: "Dr. Girijesh Patel",
      department: "Department of Biotechnology",
      college: "MNNIT Allahabad",
    },
    {
      name: "Dr. Nirmal Ch. Roy",
      department: "Department of Electronics and Communication Engineering",
      college: "MNNIT Allahabad",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8 overflow-x-auto text-base">
      <header className="text-center">
        <h1 className="text-3xl underline text-white font-bold">
          Organizing Committee
        </h1>
      </header>
      <main className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="table-container">
            <h2 className="text-xl underline   font-bold mb-4">
              Organizing Committee
            </h2>
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="px-4 py-2">Role</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">College</th>
                </tr>
              </thead>
              <tbody>
                {organizingCommittee.map((member, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{member.role}</td>
                    <td className="border px-4 py-2">
                      {member.name}, {member.department}
                    </td>
                    <td className="border px-4 py-2">{member.college}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-container">
            <h2 className="text-xl font-bold mb-4 underline">
              Organizing Secretary(s)
            </h2>
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Department</th>
                  <th className="px-4 py-2">College</th>
                </tr>
              </thead>
              <tbody>
                {organizingSecretaries.map((member, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{member.name}</td>
                    <td className="border px-4 py-2">{member.department}</td>
                    <td className="border px-4 py-2">{member.college}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-container">
            <h2 className="text-xl font-bold mb-4 underlined">
              Organizing Coordinator(s)
            </h2>
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Department</th>
                  <th className="px-4 py-2">College</th>
                </tr>
              </thead>
              <tbody>
                {organizingCoordinators.map((member, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{member.name}</td>
                    <td className="border px-4 py-2">{member.department}</td>
                    <td className="border px-4 py-2">{member.college}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Committee;
