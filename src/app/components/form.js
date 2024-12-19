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
    confirmPassword: "",
    date: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  const Step1 = () => {
    const newErrors = {};
    if (!formData.firstName)
      newErrors.firstName =
        "First name cannot contain special characters or numbers.";
    if (!formData.lastName)
      newErrors.lastName =
        "Last name cannot contain special characters or numbers.";
    if (!formData.username)
      newErrors.username =
        "This username is already taken. Please choose another one.";

    return newErrors;
  };

  const Step2 = () => {
    const newErrors = {};
    if (!formData.email)
      newErrors.email = "Please provide a valid email address.";
    if (!formData.phonenumber)
      newErrors.phonenumber = "Please enter a valid phone number.";
    if (!formData.password)
      newErrors.password = "Password must include letters and numbers.";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match. Please try again.";
    return newErrors;
  };
  const Step3 = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = "Please select a date.";
    if (!formData.image) newErrors.image = "Image cannot be blank";
  };

  const handleNext = () => {
    let currentErrors = {};
    if (step === 1) {
      currentErrors = Step1();
    } else if (step === 2) {
      currentErrors = Step2();
    } else if (step === 3) {
      currentErrors = Step3();
    }

    if (Object.keys(currentErrors).length === 0) {
      setErrors({});
      setStep((prevStep) => prevStep + 1);
    } else {
      setErrors(currentErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <img className="ml-4" src="pineconelogo.png" alt="Logo" />
        <h1 className="text-2xl font-bold mb-4 text-l-[]">Join Us! 😎</h1>
        <p className="text-gray-600 mb-6">
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
              onClick={handleNext}
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-[#777cce] transition"
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.phonenumber}
                </p>
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
                Confirm password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                // value={formData.confirmPassword}
                name="password"
                onChange={handleChange}
                className={`w-full mt-1 px-3 py-2 border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } rounded-md`}
                placeholder="Enter your password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              onClick={() => setStep(3)}
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-[#777cce] transition"
            >
              Continue
            </button>
            <button
              onClick={() => setStep(1)}
              className="w-full mt-2 bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400"
            >
              Back
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <div className="mb-4">
              <label className="text-sm font-bold text-black">
                Date of Birth
              </label>
              <input
                type="date"
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
                <p className="mb-2 text-sm text-black ">Add image</p>

                <input
                  value={formData.image}
                  onChange={handleChange}
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                />
              </label>
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-[#777cce] transition"
            >
              Submit
            </button>
            <button
              onClick={() => setStep(2)}
              className="w-full mt-2 bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400"
            >
              Back
            </button>
          </div>
        )}
        {step === 4 && (
          <div className="text-center">
            <p className="text-xl font-semibold mb-4">You're all set! 🔥 </p>
            <p className="text-gray-700">Welcome, {formData.firstName}!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
