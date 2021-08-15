import Home from "./components/Home";
import Categories from "./screens/category/categories";
import AddCategory from "./screens/category/addCategory";

export default {
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/admin/categories",
            component: Categories
        },
        {
            path: "/admin/add-categories",
            component: AddCategory
        }
    ]
};
