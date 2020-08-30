<template>
    <div>
        <p v-if="!users">No users</p>
        <md-table v-model="users" :table-header-color="tableHeaderColor">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
                <md-table-cell md-label="First Name">{{ item.first_name }}</md-table-cell>
                <md-table-cell md-label="Last Name">{{ item.last_name }}</md-table-cell>
                <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
                <md-table-cell md-label="CIP">{{ item.cip }}</md-table-cell>
                <md-table-cell md-label="Facebook">{{ item.facebook }}</md-table-cell>
                <md-table-cell md-label="Phone">{{ item.phone }}</md-table-cell>
                <md-table-cell md-label="Edit">
                    <router-link :to="{ name: 'User Profile', params: { id: item.id }}">
                        <md-icon>edit</md-icon>
                    </router-link>
                </md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
export default {
    name: "ordered-table",
    props: {
        tableHeaderColor: {
            type: String,
            default: ""
        },
        users: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            selected: [],
        };
    }
};
</script>
