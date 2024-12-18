const StepThree = () => {
  const [formData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    date: "",
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-8 font-bold">
          Date of Birth
        </p>
        <input
          type="date"
          value={formData.date}
          placeholder=""
          className={`w-[410px] h-11 border-solid border-[#CBD5E1] border-[1px] rounded-md  pl-2 ${
            errors.date ? "border-red-500" : "border-gray-300"
          } rounded-md`}
        >
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date}</p>
          )}
        </input>
      </div>
    </div>
  );
};
