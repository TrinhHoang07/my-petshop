import { DefaultLayout } from '../components/Layout/DefaultLayout';
import routesConfig from '../config/routes';
import { Accessories } from '../pages/Accessories';
import { Cat } from '../pages/Cat';
import { Categories } from '../pages/Categories';
import { Contact } from '../pages/Contact';
import { Description } from '../pages/Description';
import { Dog } from '../pages/Dog';
import { Food } from '../pages/Food';
import { Home } from '../pages/Home';
import { News } from '../pages/News';
import { Profile } from '../pages/Profile';
import { Detail } from '../pages/Detail';
import { Shop } from '../pages/Shop';
import { NotFound } from '../pages/NotFound';
import { FlagmentLayout } from '../components/Layout/FlagmentLayout';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { LayoutDetailNew } from '../components/Layout/LayoutDetailNew';
import { ProfileBanks } from '../pages/ProfileBanks';
import { ProfileAddress } from '../pages/ProfileAddress';
import { ProfileChangePassword } from '../pages/ProfileChangePassword';
import { ProfileBuys } from '../pages/ProfileBuys';
import { ProfileNoti } from '../pages/ProfileNoti';
import { ProfileVouchers } from '../pages/ProfileVouchers';

type TRoutes = {
    id: number;
    path: string;
    component: Function;
    layout: Function;
};

const publicRoutes: TRoutes[] = [
    {
        id: 1,
        path: routesConfig.home,
        component: Home,
        layout: DefaultLayout,
    },
    {
        id: 2,
        path: routesConfig.description,
        component: Description,
        layout: DefaultLayout,
    },
    {
        id: 3,
        path: routesConfig.accessories,
        component: Accessories,
        layout: DefaultLayout,
    },
    {
        id: 4,
        path: routesConfig.cat,
        component: Cat,
        layout: DefaultLayout,
    },
    {
        id: 5,
        path: routesConfig.dog,
        component: Dog,
        layout: DefaultLayout,
    },
    {
        id: 6,
        path: routesConfig.contact,
        component: Contact,
        layout: DefaultLayout,
    },
    {
        id: 7,
        path: routesConfig.food,
        component: Food,
        layout: DefaultLayout,
    },
    {
        id: 8,
        path: routesConfig.news,
        component: News,
        layout: DefaultLayout,
    },
    {
        id: 9,
        path: routesConfig.shop,
        component: Shop,
        layout: DefaultLayout,
    },
    {
        id: 10,
        path: routesConfig.detail,
        component: Detail,
        layout: DefaultLayout,
    },
    {
        id: 11,
        path: routesConfig.notFound,
        component: NotFound,
        layout: FlagmentLayout,
    },
    // test
    {
        id: 12,
        path: routesConfig.newsDetail,
        component: LayoutDetailNew,
        layout: DefaultLayout,
    },
];

const privateRoutes = [
    {
        id: 1,
        path: routesConfig.profile,
        component: Profile,
        layout: DefaultLayout,
    },
    {
        id: 2,
        path: routesConfig.categories,
        component: Categories,
        layout: DefaultLayout,
    },
    {
        id: 3,
        path: routesConfig.login,
        component: Login,
        layout: FlagmentLayout,
    },
    {
        id: 4,
        path: routesConfig.register,
        component: Register,
        layout: FlagmentLayout,
    },
    {
        id: 5,
        path: routesConfig.profile_bank,
        component: ProfileBanks,
        layout: DefaultLayout,
    },
    {
        id: 6,
        path: routesConfig.profile_address,
        component: ProfileAddress,
        layout: DefaultLayout,
    },
    {
        id: 7,
        path: routesConfig.profile_change_password,
        component: ProfileChangePassword,
        layout: DefaultLayout,
    },
    {
        id: 8,
        path: routesConfig.profile_buy,
        component: ProfileBuys,
        layout: DefaultLayout,
    },
    {
        id: 9,
        path: routesConfig.profile_noti,
        component: ProfileNoti,
        layout: DefaultLayout,
    },
    {
        id: 10,
        path: routesConfig.profile_voucher,
        component: ProfileVouchers,
        layout: DefaultLayout,
    },
];

export { publicRoutes, privateRoutes };
