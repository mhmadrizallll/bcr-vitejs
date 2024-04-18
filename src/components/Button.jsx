const Button = (props) => {
  const { name } = props;
  return (
    <button className="bg-[#5cb85f] text-white py-2 px-4 rounded-sm hover:bg-[#0a800e] transition duration-300 ease-in-out">
      {name}
    </button>
  );
};

export default Button;
