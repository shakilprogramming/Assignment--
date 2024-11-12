// Footer.jsx

const Footer = () => {
  return (
      <footer className="bg-gray-800 text-gray-200 py-10 px-5">
          <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Links Section */}
              <div className="space-y-2 text-center md:text-left">
                  <h4 className="text-lg font-semibold">Quick Links</h4>
                  <nav className="flex flex-col space-y-1">
                      <a className="link link-hover text-gray-400 hover:text-white">About Us</a>
                      <a className="link link-hover text-gray-400 hover:text-white">Contact</a>
                      <a className="link link-hover text-gray-400 hover:text-white">Jobs</a>
                      <a className="link link-hover text-gray-400 hover:text-white">Press Kit</a>
                  </nav>
              </div>

              {/* Contact Information */}
              <div className="text-center md:text-left space-y-2">
                  <h4 className="text-lg font-semibold">Contact Us</h4>
                  <p className="text-gray-400">1234 Street Name, City, Country</p>
                  <p className="text-gray-400">+1 (234) 567-8901</p>
                  <p className="text-gray-400">info@company.com</p>
              </div>

              {/* Social Media Links */}
              <div className="text-center md:text-left space-y-2">
                  <h4 className="text-lg font-semibold">Follow Us</h4>
                  <div className="flex justify-center md:justify-start space-x-4">
                      <a href="#" aria-label="Twitter">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-gray-400 hover:text-white">
                              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                          </svg>
                      </a>
                      <a href="#" aria-label="YouTube">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-gray-400 hover:text-white">
                              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                          </svg>
                      </a>
                      <a href="#" aria-label="Facebook">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-gray-400 hover:text-white">
                              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                          </svg>
                      </a>
                  </div>
              </div>

              {/* Copyright */}
              <div className="text-center md:text-left mt-4 lg:mt-0">
                  <p className="text-gray-400">© {new Date().getFullYear()} ACME Industries Ltd. All rights reserved.</p>
              </div>
          </div>
      </footer>
  );
};

export default Footer;
