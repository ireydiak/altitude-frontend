<template>
    <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
        <notifications></notifications>

        <side-bar
            :sidebar-item-color="sidebarBackground"
            :sidebar-background-image="sidebarBackgroundImage"
        >
            <mobile-menu slot="content"></mobile-menu>
            <sidebar-link to="/dashboard">
                <md-icon>dashboard</md-icon>
                <p>Dashboard</p>
            </sidebar-link>
            <sidebar-link to="/users">
                <md-icon>person</md-icon>
                <p>All Users</p>
            </sidebar-link>
           <sidebar-link to="/inventory">
               <md-icon>storefront</md-icon>
               <p>Inventory</p>
           </sidebar-link>
            <sidebar-link to="activities">
                <md-icon>sports_rugby</md-icon>
                <p>Activities</p>
            </sidebar-link>
        </side-bar>

        <div class="main-panel">
            <top-navbar></top-navbar>

            <dashboard-content></dashboard-content>

        </div>
    </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
    components: {
        TopNavbar,
        DashboardContent,
        MobileMenu,
    },
    data() {
        return {
            sidebarBackground: "green",
            sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg")
        };
    }
};
</script>
