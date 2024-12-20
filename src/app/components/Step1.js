const Step1 = ({ formData, errors, handleChange, handleNext }) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium">
          First Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className={`w-full mt-1 px-3 py-2 border ${
            errors.firstName ? "border-red-500" : "border-gray-300"
          } rounded-md`}
          placeholder="Enter first name"
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">
          Last Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className={`w-full mt-1 px-3 py-2 border ${
            errors.lastName ? "border-red-500" : "border-gray-300"
          } rounded-md`}
          placeholder="Enter last name"
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">
          Username <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className={`w-full mt-1 px-3 py-2 border ${
            errors.username ? "border-red-500" : "border-gray-300"
          } rounded-md`}
          placeholder="Enter username"
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username}</p>
        )}
      </div>

      <button
        onClick={handleNext}
        className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-[#777cce] transition"
      >
        Continue
      </button>
    </div>
  );
};

export default Step1;
