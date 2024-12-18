import { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phonenumber: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const Step1 = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phonenumber)
      newErrors.phonenumber = "Phone number is required";
    if (!formData.password) newErrors.password = "Password  is required";
    return newErrors;
  };

  const handleNext = () => {
    let errors = {};
    if (step === 1) errors = Step1();

    if (Object.keys(errors).length === 0) {
      setErrors({});
      setStep(step + 1);
    } else {
      setErrors(errors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <img className="ml-4" src="pineconelogo.png" />
        <h1 className="text-2xl font-bold mb-4 text-l-[] "> Join Us! 😎</h1>
        <p className="text-gray-600 mb-6 ">
          Please provide all current information accurately.
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
              onClick={() => setStep(2)}
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-[#777cce] transition"
            >
              Continue
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <p className="mb-4 text-gray-700">Email</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}

            <p className="mb-3 mt-3 text-gray-700 ">Phone number</p>
            <input
              type="text"
              name="phone number"
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.phonenumber ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              placeholder="Enter your phone number"
            />
            {errors.phonenumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phonenumber}</p>
            )}

            <p className="mb-3 mt-3 text-gray-700">Password</p>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={`w-full px-3 py-2 border rounded-md ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}

            <button
              onClick={() => setStep(3)}
              className="w-[280px] mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-[#777cce] transition "
            >
              Continue
            </button>
            <button
              onClick={() => setStep(1)}
              className="w-[128px] h-[44px] rounded-md bg-black text-white hover:bg-[#777cce] transition px-3 py-3 flex items-center justify-center"
            >
              Back
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="text-center">
            <p className="text-xl font-semibold mb-4">You're all set! 🔥 </p>
            <p className="text-gray-700">Welcome, {formData.firstName}!</p>

            <button
              onClick={() => setStep(2)}
              className="w-full mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-[#777cce] transition"
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
