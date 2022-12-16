import routes from "./router"  //引入配置好的路由数组

import { useRoutes } from "react-router-dom";

const App = () => {
  const element = useRoutes(routes)
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
