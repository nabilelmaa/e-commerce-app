import React from "react";

function Form() {
  return (
    <div className="max-w-[400px]">
      <div className="flex justify-between">
        <p className="font-semibold text-gray-700">To contact us</p>
        <p className="font-semibold text-gray-700">للتواصل معنا</p>
      </div>
      <form className="flex flex-col space-y-4 pt-4">
        <input
          type="text"
          className="border border-gray-300 focus:border-blue-500 rounded-md py-2 px-4 bg-white transition duration-300 ease-in-out"
          placeholder="Name / الاسم"
          onFocus={(e) => e.target.classList.add("ring", "ring-blue-200")}
          onBlur={(e) => e.target.classList.remove("ring", "ring-blue-200")}
        />
        <input
          type="tel"
          className="border border-gray-300 focus:border-blue-500 rounded-md py-2 px-4 bg-white transition duration-300 ease-in-out"
          placeholder="Phone / رقم الهاتف"
          onFocus={(e) => e.target.classList.add("ring", "ring-blue-200")}
          onBlur={(e) => e.target.classList.remove("ring", "ring-blue-200")}
        />
        <input
          type="text"
          className="border border-gray-300 focus:border-blue-500 rounded-md py-2 px-4 bg-white transition duration-300 ease-in-out"
          placeholder="City / المدينة"
          onFocus={(e) => e.target.classList.add("ring", "ring-blue-200")}
          onBlur={(e) => e.target.classList.remove("ring", "ring-blue-200")}
        />
        <input
          type="text"
          className="border border-gray-300 focus:border-blue-500 rounded-md py-2 px-4 bg-white transition duration-300 ease-in-out"
          placeholder="Address / العنوان"
          onFocus={(e) => e.target.classList.add("ring", "ring-blue-200")}
          onBlur={(e) => e.target.classList.remove("ring", "ring-blue-200")}
        />
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 transition duration-300 ease-in-out"
        >
          Submit / إرسال
        </button>
        <div>
          <p className="font-md text-gray-700">
            We will contact you to confirm the order.
          </p>
          <p className="font-md text-gray-700">.سوف نتصل بك لتأكيد الطلب</p>
        </div>
      </form>
    </div>
  );
}

export default Form;
