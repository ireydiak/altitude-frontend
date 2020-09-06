<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">All Members</h4>
                        <p class="category">All members</p>
                    </md-card-header>
                    <md-card-content>
                        <div>
                            <md-table>
                                <md-table-row>
                                    <md-table-head md-numeric>ID</md-table-head>
                                    <md-table-head>Name</md-table-head>
                                    <md-table-head>Email</md-table-head>
                                    <md-table-head>Gender</md-table-head>
                                    <md-table-head>Job Title</md-table-head>
                                </md-table-row>

                                <md-table-row>
                                    <md-table-cell md-numeric>1</md-table-cell>
                                    <md-table-cell>Shawna Dubbin</md-table-cell>
                                    <md-table-cell>sdubbin0@geocities.com</md-table-cell>
                                    <md-table-cell>Male</md-table-cell>
                                    <md-table-cell>Assistant Media Planner</md-table-cell>
                                </md-table-row>

                                <md-table-row>
                                    <md-table-cell md-numeric>2</md-table-cell>
                                    <md-table-cell>Odette Demageard</md-table-cell>
                                    <md-table-cell>odemageard1@spotify.com</md-table-cell>
                                    <md-table-cell>Female</md-table-cell>
                                    <md-table-cell>Account Coordinator</md-table-cell>
                                </md-table-row>

                                <md-table-row>
                                    <md-table-cell md-numeric>3</md-table-cell>
                                    <md-table-cell>Vera Taleworth</md-table-cell>
                                    <md-table-cell>vtaleworth2@google.ca</md-table-cell>
                                    <md-table-cell>Male</md-table-cell>
                                    <md-table-cell>Community Outreach Specialist</md-table-cell>
                                </md-table-row>
                            </md-table>
                        </div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EquipmentIndex",
    mounted() {
        this.$http
            .get('/users')
            .then(res => this.equipments = res.data.data)
            .catch(err => console.error(err));
    }
}
</script>

<style scoped>

</style>