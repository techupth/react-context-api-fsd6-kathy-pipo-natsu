import { productContext } from "../App";
import { useContext } from "react";

function AppHeader() {
  const context = useContext(productContext);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {context.userData.username}</h2>
    </div>
  );
}

export default AppHeader;
