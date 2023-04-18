import Merkadoniablack from "./Merkadoniablack.png"
import "./footer.css"
const footer = () => {
  return (
    <>
      <footer aria-label="Site Footer" className="bg-primary dark:bg-gray-900 site-footer">
        <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-teal-600 dark:text-teal-300">
              <img
                className="h-13"
                viewBox="0 0 118 24"
                fill="none"
                src={Merkadoniablack}
              />
       
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 pt-8 border-t border-gray-100 dark:border-gray-800 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Services
              </p>

              <nav aria-label="Footer Navigation - Services" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      1on1 Coaching
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Company Review
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Accounts Review
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      HR Consulting
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      SEO Optimisation
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Company
              </p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Accounts Review
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Helpful Links
              </p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Contact
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Live Chat
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white">Legal</p>

              <nav aria-label="Footer Navigation - Legal" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Accessibility
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Returns Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Refund Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Hiring Statistics
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; 2023. Merkadonia. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default footer;
