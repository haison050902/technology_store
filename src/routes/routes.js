import config from '~/config';

// Layouts
import { AdminLayout, DefaultLayout, AuthLayout, EmployeeLayout } from '~/layouts';

// Pages
import Home from '~/pages/Customer/Home/Home';
import Dashboard from '~/pages/Admin/Dashboard/Dashboard';
import ProductPage from '~/pages/Customer/ProductPage/ProductPage';
import ProductDetail from '~/pages/Customer/ProductDetail/ProductDetail';
import History from '~/pages/Customer/History/History';
import CartPage from '~/pages/Customer/CartPage/CartPage';
import ShippingPage from '~/pages/Customer/ShippingPage/ShippingPage';
import AboutUs from '~/pages/Customer/AboutUs/AboutUs';
import Profile from '~/pages/Customer/Profile/Profile';
import Login from '~/pages/Customer/Login/Login';
import Register from '~/pages/Customer/Register/Register';
import Invoice from '~/pages/Admin/Invoice/Invoice';
import Warehouse from '~/pages/Admin/Warehouse/Warehouse';
import Report from '~/pages/Admin/Report/Report';
import Logout from '~/pages/Admin/Logout/Logout';
import Order from '~/pages/Employee/Order/Order';
import CustomerCare from '~/pages/Employee/CustomerCare/CustomerCare';
import OrderList from '~/pages/Employee/OrderList/OrderList';
import Customer from '~/pages/Admin/Customer/Customer';
import Employee from '~/pages/Admin/Employee/Employee';
import Product from '~/pages/Admin/Product/Product';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.products, component: ProductPage, layout: DefaultLayout },
    { path: config.routes.history, component: History, layout: DefaultLayout },
    { path: config.routes.product_categoty, component: ProductPage },
    { path: config.routes.product_detail, component: ProductDetail },
    { path: config.routes.about, component: AboutUs },
    { path: config.routes.profile, component: Profile, layout: DefaultLayout },
    { path: config.routes.cart, component: CartPage },
    { path: config.routes.shipping, component: ShippingPage },
    { path: config.routes.login, component: Login, layout: AuthLayout },
    { path: config.routes.register, component: Register, layout: AuthLayout },
    { path: config.routes.dashboard, component: Dashboard, layout: AdminLayout },
    { path: config.routes.home, component: Home },
    { path: config.routes.dashboard, component: Dashboard, layout: AdminLayout },
    { path: config.routes.employee, component: Employee, layout: AdminLayout },
    { path: config.routes.customer, component: Customer, layout: AdminLayout },
    { path: config.routes.product, component: Product, layout: AdminLayout },
    // { path: config.routes.order, component: Order, layout: AdminLayout },
    { path: config.routes.invoice, component: Invoice, layout: AdminLayout },
    { path: config.routes.warehouse, component: Warehouse, layout: AdminLayout },
    { path: config.routes.report, component: Report, layout: AdminLayout },
    { path: config.routes.logout, component: Logout, layout: AdminLayout },
    { path: config.routes.order, component: Order, layout: EmployeeLayout },
    { path: config.routes.customercare, component: CustomerCare, layout: EmployeeLayout },
    { path: config.routes.orderlist, component: OrderList, layout: EmployeeLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
