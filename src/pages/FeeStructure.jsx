function FeeStructure() {
  return (
    <div className="overflow-x-scroll p-2 ">
      <h2 className="First text-3xl font-bold text-blue-600 ml-1/3">
        Fee Structure (excluding GST @18%)
      </h2>
      <h3 className="text-lg text-blue-600 mt-4 ml-1/3">
        All the participants are requested to register online at{" "}
        <a href="www.mnnit.ac.in/ADT2024" className="text-blue-600 underline">
          www.mnnit.ac.in/ADT2024
        </a>
      </h3>

      <table className="table1 mx-auto mt-8">
        <thead>
          <tr>
            <th className="border border-black px-4 py-2">
              Category of Participants
            </th>
            <th className="border border-black px-4 py-2">Early Bird</th>
            <th className="border border-black px-4 py-2">Late</th>
            <th className="border border-black px-4 py-2">On spot</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-4 py-2">
              Student(UG/PG) (INR)
            </td>
            <td className="border border-black px-4 py-2">2000</td>
            <td className="border border-black px-4 py-2">2500</td>
            <td className="border border-black px-4 py-2">3000</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">
              PhD/Postdoc/Research Fellow (INR)
            </td>
            <td className="border border-black px-4 py-2">3000</td>
            <td className="border border-black px-4 py-2">3500</td>
            <td className="border border-black px-4 py-2">4000</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">Academia (INR)</td>
            <td className="border border-black px-4 py-2">6000</td>
            <td className="border border-black px-4 py-2">6500</td>
            <td className="border border-black px-4 py-2">7000</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">Industries (INR)</td>
            <td className="border border-black px-4 py-2">8000</td>
            <td className="border border-black px-4 py-2">9000</td>
            <td className="border border-black px-4 py-2">10000</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">
              Foreign Delegates (USD)
            </td>
            <td className="border border-black px-4 py-2">200</td>
            <td className="border border-black px-4 py-2">250</td>
            <td className="border border-black px-4 py-2">300</td>
          </tr>
        </tbody>
      </table>

      <h2 className="Second text-lg mt-8 ml-1/3">
        *Fee includes registration charges, refreshments served during the
        events and the conference kit.
      </h2>

      <h2 className="Third text-3xl font-bold text-blue-600 mt-8 ml-1/3">
        Bank Account Details: -
      </h2>
      <table className="table2 mx-auto mt-8">
        <thead>
          <tr>
            <th className="border border-black px-4 py-2">Field</th>
            <th className="border border-black px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-4 py-2">Account Name</td>
            <td className="border border-black px-4 py-2">
              SNFCE MNNIT Allahabad
            </td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">Account Number</td>
            <td className="border border-black px-4 py-2">10424975574</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">IFSC Code</td>
            <td className="border border-black px-4 py-2">SBIN0002580</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">Bank and Branch</td>
            <td className="border border-black px-4 py-2">
              SBI MNNIT Allahabad
            </td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">SWIFT Code</td>
            <td className="border border-black px-4 py-2">SBININBB828</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FeeStructure;
