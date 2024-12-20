"use client";
import { useState } from "react";
import Step1 from "./components/Step1.js";
import Step2 from "./components/Step2.js";
import Step3 from "./components/Step3.js";
import Step4 from "./components/Step4.js";

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
  const validateStep1 = () => {
    const newErrors = {};
    const regex = /^[A-Za-z]+$/;

    if (!formData.firstName) newErrors.firstName = "First name is required.";
    else if (!regex.test(formData.firstName))
      newErrors.firstName = "First name can only contain letters.";

    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    else if (!regex.test(formData.lastName))
      newErrors.lastName = "Last name can only contain letters.";

    if (!formData.username) newErrors.username = "Username is required.";
    if (formData.username === "taken") {
      newErrors.username =
        "This username is already taken. Please choose another one.";
    }

    return newErrors;
  };
  const validateStep2 = () => {
    const newErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /[0-9]/;
    if (!formData.email)
      newErrors.email = "Please provide a valid email address.";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Please provide a valid email address.";

    if (!formData.phonenumber)
      newErrors.phonenumber = "Please enter a valid phone number.";
    else if (!phoneRegex.test(formData.phonenumber))
      newErrors.phonenumber = "Please enter a valid phone number.";
    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters.";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password.";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    return newErrors;
  };
  const validateStep3 = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = "Please select a date of birth.";
    if (!formData.image) newErrors.image = "Please upload an image.";
    return newErrors;
  };

  const [errors, setErrors] = useState({});

  const handleNext = (validateFunction) => {
    const currentErrors = validateFunction();
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <img className="ml-4" src="pineconelogo.png" alt="Logo" />
        <h1 className="text-2xl font-bold mb-4">Join Us! 😎</h1>
        <p className="text-gray-600 mb-6 text-center">
          Please provide all current information accurately.
        </p>

        {step === 1 && (
          <Step1
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleNext={() => handleNext(validateStep1)}
          />
        )}

        {step === 2 && (
          <Step2
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleNext={() => handleNext(validateStep2)}
            handleBack={() => setStep(1)}
          />
        )}

        {step === 3 && (
          <Step3
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleImageChange={handleImageChange}
            handleNext={() => handleNext(validateStep3)}
            handleBack={() => setStep(2)}
          />
        )}

        {step === 4 && <Step4 firstName={formData.firstName} />}
      </div>
    </div>
  );
};

export default MultiStepForm;
