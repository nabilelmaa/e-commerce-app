import React from "react";

function Form() {
  return (
    <div className="max-w-[400px]">
      <div className="flex justify-between">
        <p className="font-semibold text-gray-700">To contact us</p>
        <p className="font-semibold text-gray-700">للتواصل معنا</p>
      </div>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          className="border border-gray-300 rounded-md py-2 px-4"
          placeholder="Name / الاسم"
        />
        <input
          type="tel"
          className="border border-gray-300 rounded-md py-2 px-4"
          placeholder="Phone / رقم الهاتف"
        />
        <input
          type="text"
          className="border border-gray-300 rounded-md py-2 px-4"
          placeholder="City / المدينة"
        />
        <input
          type="text"
          className="border border-gray-300 rounded-md py-2 px-4"
          placeholder="Address / العنوان"
        />
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit / إرسال
        </button>
        <div className="">
        <p className="font-md text-gray-700">We will contact you to confirm the order.</p>
        <p className="font-md text-gray-700">.سوف نتصل بك لتأكيد الطلب</p>
      </div>
      </form>
    </div>
  );
}

export default Form;
