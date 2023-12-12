import React, { useState } from "react";

const Register2 = () => {
  const [formData, setFormData] = useState({});
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    setSelectedPicture(file);
  };

  const handleDocumentChange = (event) => {
    const file = event.target.files[0];
    setSelectedDocument(file);
  };

  const handleUpload = () => {
    // Handle the file upload logic here
    if (selectedPicture && selectedDocument) {
      console.log("Picture selected:", selectedPicture);
      console.log("Document selected:", selectedDocument);
      // You can perform further actions, like uploading the files to a server
    } else {
      console.log("Please select both picture and document");
    }
  };

  return (
    <div className="container ">
      <div className="mb-8">
        <h1 className="font-bold text-center underline text-2xl mb-4">
          APPLICATION FORM FOR OSCA ID
        </h1>
        <h1 className="font-bold text-center underline text-2xl">
          (Senior Citizen ID)
        </h1>
      </div>
      <form>
        <div className="mb-4">
          <h1 className="font-bold text-xl">Requirements for New Applicant</h1>
          <ul className="list-disc list-inside pl-4">
            <li>2 (1x1) Pictures</li>
            <li>2 Valid Documents for Being Senior Citizen and Residency</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-700">
              Upload 1x1 Pictures:
            </label>
            <input
              type="file"
              onChange={handlePictureChange}
              className="mt-1 p-2 border rounded-md w-63"
            />
          </div>
          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-700">
              Upload Valid Documents:
            </label>
            <input
              type="file"
              onChange={handleDocumentChange}
              className="mt-1 p-2 border rounded-md w-63"
            />
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={handleUpload}
            className="bg-red-800 hover:bg-blue-700 text-white  py-2 px-4 rounded"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register2;
