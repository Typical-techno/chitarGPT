import React, { useState } from "react";
import "./App.css";
import FileUploadLogo from "./assets/fileupload.gif";
import Footer from "./components/Footer";

function App() {
  const [fileName, setFileName] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsUploading(true);
      setFileName(null); // Clear the previous file name
      // Simulate a file upload process
      setTimeout(() => {
        setIsUploading(false);
        setFileName(file.name);
      }, 3000); // Simulating a 3 second upload time
    }
  };

  return (
    <div className="App">
      <header className="App-header bg-cover">
        <div className="w-full flex flex-col xl:flex-row space-y-12 xl:space-y-0">
          <p className="text-5xl xl:text-8xl text-white drop-shadow-2xl font-bold items-center justify-center xl:justify-normal flex px-8">
            ChitraGPT
          </p>
          <div className="flex w-full justify-center xl:justify-end px-16">
            <div className="flex items-center justify-center w-full md:w-9/12 xl:w-5/12 border border-black rounded-xl">
              <div className="mx-auto w-full">
                <form className="py-4 px-9">
                  <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                    Upload File
                  </label>
                  <div className="mb-5">
                    <input
                      type="text"
                      name="url"
                      id="url"
                      placeholder="https://example.com/image.png"
                      className="w-full rounded-md border border-[#363434] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>

                  <div className="mb-6 pt-4">
                    <div className="mb-8 bg-blue-50 rounded-xl">
                      <input
                        type="file"
                        name="file"
                        id="file"
                        className="sr-only"
                        onChange={handleFileChange}
                      />
                      <label
                        htmlFor="file"
                        className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#363434] p-12 text-center"
                      >
                        <div>
                          {isUploading ? (
                            <div
                              className="h-full bg-indigo-600 rounded-full items-center justify-center animate-pulse"
                              style={{ width: "100%", height: "200%" }}
                            >
                              <p className="text-base px-32 py-1 text-white">
                                Uploading
                              </p>
                            </div>
                          ) : (
                            <>
                              <img src={FileUploadLogo} alt="File Upload" />
                              <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D] bg-gray-50">
                                {fileName || "Browse"}
                              </span>
                            </>
                          )}
                        </div>
                      </label>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    >
                      Deep scan the file
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
