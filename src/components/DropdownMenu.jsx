// DropdownMenu.jsx
const DropdownMenu = ({ items , onItemClick }) => {
    return (
      <div className="absolute mt-2 top-10 bg-white text-[#107C3A] w-48 border-b-8 border-[#107C3A] rounded-lg shadow-lg z-20 animate-dropdown">
        <ul>
          {items.map((item, idx) => (
            <li key={idx} className="hover:text-white hover:bg-[#0A9642]">
              <a className="block px-4 py-2"
               onClick={() => onItemClick(item)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default DropdownMenu;
  