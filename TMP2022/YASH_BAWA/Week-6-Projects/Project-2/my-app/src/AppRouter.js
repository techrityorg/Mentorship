import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import {useRoutes} from "raviger";

const route = {
    "/":() => <Home/>,
    "/About":() =><About/>,
    "/Experience":()=><Experience/>,
    "/Contact":() => <Contact/>,
    "/Projects":() => <Projects/>
};

export default function AppRouter()
{
    const routes = useRoutes(route);
    return <>{routes}</>;
}