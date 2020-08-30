<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">Ordered Table</h4>
                        <p class="category">Here is a subtitle for this table</p>
                    </md-card-header>
                    <md-card-content>
                        <ordered-table table-header-color="green" :users="users"></ordered-table>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
import {OrderedTable} from "@/components";

export default {
    name: "UsersIndex",
    components: {
        OrderedTable
    },
    data() {
        return {
            users: []
        }
    },
    mounted() {
        this.$http
            .get('/users')
            .then(res => this.users = res.data.data)
            .error(err => console.error(err));
    }
}
</script>

<style scoped>

</style>