function Footer() {
  return (
    <div className="   col-span-12 min-h-[100px] rounded-lg shadow  ">
      <footer className="bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left">
        <div className="container p-6">
          <div className="grid gap-x-4 md:grid-cols-2 lg:grid-cols-3">
            {/* First text section */}
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                About Us
              </h5>
              <p className="mb-3 text-neutral-800 dark:text-neutral-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                cumque non adipisci tenetur quaerat.
              </p>
            </div>

            {/* Second links section */}
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                Services
              </h5>
              <ul className="mb-0 list-none">
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Web Dev
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Design
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            {/* Third links section */}
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                Resources
              </h5>
              <ul className="mb-0 list-none">
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
          © 2023 Copyright:
          <a
            className="text-neutral-800 dark:text-neutral-400"
            href="https://tw-elements.com/"
          >
            TW Elements
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
