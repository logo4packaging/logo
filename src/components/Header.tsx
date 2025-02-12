interface IProps {
  toggleDarkMode: () => void;
}

const Header = ({ toggleDarkMode }: IProps) => {
  return (
    <div className="bg-[#141516]  h-16 text-white flex items-center justify-between w-full sticky top-0">
      <div className="container     flex items-center justify-between m-auto px-7">
        <h2>logo</h2>
        <div className="flex items-center justify-between gap-x-3.5">
          
          <p>whatsApp</p>
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 bg-gray-800 text-white rounded"
          >
            Toggle Dark Mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
