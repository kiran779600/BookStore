import React from 'react';

function Contact() {
  return (
    <>
      <div>
        <form action="https://formspree.io/f/xpwaqnwd" method="POST" >
          <section className="text-gray-700 body-font relative ">
            <div className="container px-5 py-24 mx-auto dark:bg-slate-900 dark:text-white">
              <div className="flex flex-col text-center w-full mb-12 ">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:bg-slate-900 dark:text-white">
                  Contact Us
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.
                </p>
              </div>
              <div className="lg:w-1/2 md:w-2/3 mx-auto " >
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="name" className="leading-7 text-sm text-gray-600 dark:bg-slate-900 dark:text-white">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:bg-slate-900 dark:text-white">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="message" className="leading-7 text-sm text-gray-600 dark:bg-slate-900 dark:text-white">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button type="submit" className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
    </>
  );
}

export default Contact;
