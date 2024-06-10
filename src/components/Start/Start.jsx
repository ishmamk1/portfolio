import StartMenuItem from "../StartMenuItem";
import "./Start.scss";
import { menuItems } from "src/data/menuItems";

const Start = ({ showStartMenu, setShowStartMenu, handleOpenWindow }) => {
  return (
    <nav className={showStartMenu ? "start" : "start start--hidden"}>

      <ul className="start__list">
        {menuItems.map((item) => (
          <StartMenuItem
            key={item.id}
            name={item.name}
            alt={item.alt}
            icon={item.icon}
            action={item.action}
            type={item.type}
            address={item.address}
            handleOpenWindow={handleOpenWindow}
            setShowStartMenu={setShowStartMenu}
          />
        ))}
      </ul>
    </nav>
  );
};
export default Start;
