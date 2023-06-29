// const ContactMe = () => {
//   return <div>ContactMe</div>;
// };
// export default ContactMe;

const ContactMe = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen mt-[120px] flex justify-center items-center p-4"
    >
      <form method="POST" action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-xl tracking-widest uppercase text-pink-600 font-semibold">
            Contact
          </p>
          <p className="text-gray-500 py-4">
            // Submit the form below to send me an email -
          </p>
        </div>
        <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white w-full px-4 py-3 my-8 mx-auto">Submit</button>
      </form>
    </div>
  );
};

export default ContactMe;
