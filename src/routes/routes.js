import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile/UserProfile.vue";
import UsersIndex from "@/pages/UserProfile/UsersIndex";
import ProductsIndex from "@/pages/Equipment/EquipmentIndex";
import ActivitiesIndex from "@/pages/Activity/ActivitiesIndex";

const routes = [
    {
        path: "/",
        component: DashboardLayout,
        redirect: "/dashboard",
        children: [
            {
                path: "dashboard",
                name: "Dashboard",
                component: Dashboard
            },
            {
                path: 'users',
                name: 'Users',
                component: UsersIndex
            },
            {
                path: 'users/:id',
                name: 'User Profile',
                component: UserProfile
            },
            {
                path: 'equipment',
                name: 'Equipment',
                component: ProductsIndex
            },
            {
                path: 'activities',
                name: 'Activities',
                component: ActivitiesIndex
            },
        ]
    }
];

export default routes;
