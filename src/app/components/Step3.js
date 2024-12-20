const Step3 = ({
  formData,
  errors,
  handleChange,
  handleImageChange,
  handleNext,
  handleBack,
}) => {
  return (
    <div>
      <div className="mb-4">
        <label className="text-sm font-bold text-black">Date of Birth</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.date ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.date && (
          <p className="text-red-500 text-sm mt-1">{errors.date}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-60 border-2 border-gray-300 rounded-md cursor-pointer hover:bg-gray-100"
        >
          <p className="mb-2 text-sm text-black">Add image</p>
          {formData.image && (
            <img
              src={URL.createObjectURL(formData.image)}
              alt="Uploaded Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
          )}

          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            id="dropzone-file"
            className="hidden"
          />
        </label>
        {errors.image && (
          <p className="text-red-500 text-sm mt-1">{errors.image}</p>
        )}
      </div>

      <button
        onClick={handleNext}
        className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-[#777cce] transition"
      >
        Submit
      </button>
      <button
        onClick={handleBack}
        className="w-full mt-2 bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400"
      >
        Back
      </button>
    </div>
  );
};

export default Step3;
