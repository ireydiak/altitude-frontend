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
            <sidebar-link to="users">
                <md-icon>person</md-icon>
                <p>All Users</p>
            </sidebar-link>
           <sidebar-link to="equipment">
               <md-icon>storefront</md-icon>
               <p>Equipment</p>
           </sidebar-link>
            <sidebar-link to="activities">
                <md-icon>sports_rugby</md-icon>
                <p>Activities</p>
            </sidebar-link>
        </side-bar>

        <div class="main-panel">
            <top-navbar></top-navbar>

            <fixed-plugin
                :color.sync="sidebarBackground"
                :image.sync="sidebarBackgroundImage"
            >
            </fixed-plugin>

            <dashboard-content></dashboard-content>

        </div>
    </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
    components: {
        TopNavbar,
        DashboardContent,
        MobileMenu,
        FixedPlugin
    },
    data() {
        return {
            sidebarBackground: "green",
            sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg")
        };
    }
};
</script>
