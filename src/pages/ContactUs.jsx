function ContactUs() {
  return (
    <div className="flex flex-col items-center p-3  h-full text-white overflow-x-auto ">
      <button className="ContactUs-button py-4 px-8 rounded-3xl  bg-blue-600 text-white text-3xl font-bold mb-8">
        Contact Us
      </button>

      <h3 className="text-white underline text-2xl mb-4">
        Secretariat SCES 2024
      </h3>

      <h2 className="text-blue-600 text-xl mb-2">
        Department of Computer Science and Engineering, MNNIT Allahabad
      </h2>

      <p className="text-blue-600 text-lg mb-2">Phone: 91-5322271237, 1238</p>
      <p className="text-blue-600 text-lg mb-2">
        Mobile: +919984421252, +919044533554
      </p>
      <p className="text-blue-600 text-base mb-2">
        Email:{" "}
        <a
          href="mailto:manishas@mnnit.ac.in?"
          target="_blank"
          className="underline"
        >
          manishas@mnnit.ac.in,
        </a>
        &nbsp;
        <a
          href="mailto:seemanara@mnnit.ac.in?"
          target="_blank"
          className="underline"
        >
          seemanara@mnnit.ac.in
        </a>
      </p>
      <p className="text-blue-600 text-lg mb-2">
        Website:{" "}
        <a href="http://www.mnnit.ac.in/" target="_blank" className="underline">
          www.mnnit.ac.in
        </a>
      </p>
    </div>
  );
}

export default ContactUs;
