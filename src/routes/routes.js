import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile/UserProfile.vue";
import UsersIndex from "@/pages/UserProfile/UsersIndex";
import EquipmentIndex from "@/pages/Inventory/EquipmentIndex";
import ActivitiesIndex from "@/pages/Activity/ActivitiesIndex";
import InventoryIndex from "@/pages/Inventory/InventoryIndex";
import EditInventory from "@/pages/Inventory/EditInventory";

const routes = [
    {
        path: '/',
        component: DashboardLayout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
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
                component: EquipmentIndex
            },
            {
                path: 'inventory',
                name: 'Inventory',
                component: InventoryIndex
            },
            {
                path: 'inventory/:id',
                name: 'Edit Inventory',
                component: EditInventory
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
