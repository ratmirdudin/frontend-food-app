import FoodsPage from "../pages/FoodsPage/FoodsPage";
import FoodDetailPage from "../pages/FoodDetailPage/FoodDetailPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import CalendarPage from "../pages/CalendarPage/CalendarPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import MainPage from "../pages/MainPage/MainPage";

export const LINKS = {
    Main: "/",
    Foods: "/foods",
    Calendar: "/calendar",
    About: "/about",
    Contacts: "/contacts",
    Login: "/auth/login",
    Register: "/auth/register",
    Account: "/account",
}

export const routes = [
    // { element: <FoodsPage/>},
    {index: true, element: <MainPage/>},
    {path: LINKS.Foods, element: <FoodsPage/>},
    {path: `${LINKS.Foods}/:id`, element: <FoodDetailPage/>},
    {path: LINKS.Calendar, element: <CalendarPage/>},
    {path: LINKS.About, element: <AboutPage/>},
    {path: LINKS.Contacts, element: <ContactsPage/>},
    {path: "*", element: <NotFoundPage/>}
]