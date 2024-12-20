const Step2 = ({ formData, errors, handleChange, handleNext, handleBack }) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full mt-1 px-3 py-2 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded-md`}
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
          className={`w-full mt-1 px-3 py-2 border ${
            errors.phonenumber ? "border-red-500" : "border-gray-300"
          } rounded-md`}
          placeholder="Enter your phone number"
        />
        {errors.phonenumber && (
          <p className="text-red-500 text-sm mt-1">{errors.phonenumber}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={`w-full mt-1 px-3 py-2 border ${
            errors.password ? "border-red-500" : "border-gray-300"
          } rounded-md`}
          placeholder="Enter your password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={`w-full mt-1 px-3 py-2 border ${
            errors.confirmPassword ? "border-red-500" : "border-gray-300"
          } rounded-md`}
          placeholder="Confirm your password"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
        )}
      </div>

      <button
        onClick={handleNext}
        className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-[#777cce] transition"
      >
        Continue
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

export default Step2;
