import ReactDOM from "react-dom/client";
import { BrowserRouter as Router} from "react-router-dom";
import RootApp from "./App"; //引入根组件
import "./index.scss"//公共css
import "./plugins"
import store from "@/redux";
import {Provider} from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement); //创建html 根元素
 
root.render(  // 页面渲染
    <Router> 
      <Provider store={store}>
      <RootApp />
      </Provider>
    </Router>
)