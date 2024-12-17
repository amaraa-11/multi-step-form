import { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.username) newErrors.username = "Username is required";
    return newErrors;
  };

  const handleNext = () => {
    let validationErrors = {};
    if (step === 1) validationErrors = validateStep1();

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setStep(step + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <img className="" src="pineconelogo.png" />
        <h1 className="text-2xl font-bold mb-4 text-center "> Join Us! 😎</h1>
        <p className="text-gray-600 mb-6 text-center">
          Step {step} of 3 - Please provide all current information accurately.
        </p>

        {step === 1 && (
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
        )}

        {step === 2 && (
          <div>
            <p className="mb-4 text-gray-700">Please provide your email.</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md"
            />
            <button
              onClick={() => setStep(3)}
              className="w-full mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-[#777cce] transition"
            >
              Continue
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="text-center">
            <p className="text-xl font-semibold mb-4">You're all set! 🎉</p>
            <p className="text-gray-700">Welcome, {formData.firstName}!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
