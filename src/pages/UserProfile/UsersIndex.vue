<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">All Members</h4>
                    </md-card-header>
                    <md-card-content>
:q
                        <md-table v-model="searched" md-sort="name" md-sort-order="desc" @md-selected="onSelect"
                                  md-fixed-header>

                            <md-table-toolbar v-if="!loading">
                                <h1 class="md-title"></h1>
                                <md-field md-clearable class="md-toolbar-section-end">
                                    <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable"/>
                                </md-field>
                            </md-table-toolbar>

                            <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
                                <div class="md-toolbar-section-start">{{ getAlternateLabel(count) }}</div>

                                <div class="md-toolbar-section-end">
                                    <md-button class="md-icon-button">
                                        <md-icon>delete</md-icon>
                                    </md-button>
                                </div>
                            </md-table-toolbar>

                            <md-table-empty-state v-if="!loading"
                                                  md-label="No member found"
                                                  :md-description="`No member found for this '${search}' query. Try a different search term or create a new member.`">
                                <md-button class="md-primary md-raised" @click="newMember">Create New Member
                                </md-button>
                            </md-table-empty-state>

                            <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple"
                                          md-auto-select>
                                <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
                                <md-table-cell md-label="First Name" md-sort-by="first_name">{{
                                        item.first_name
                                    }}
                                </md-table-cell>
                                <md-table-cell md-label="Last Name" md-sort-by="last_name">{{
                                        item.last_name
                                    }}
                                </md-table-cell>
                                <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
                                <md-table-cell md-label="CIP">{{ item.cip }}</md-table-cell>
                                <md-table-cell md-label="Facebook">{{ item.facebook }}</md-table-cell>
                                <md-table-cell md-label="Phone">{{ item.phone }}</md-table-cell>
                                <md-table-cell md-label="Actions">
                                    <router-link :to="{ name: 'User Profile', params: { id: item.id }}">
                                        <md-icon>edit</md-icon>
                                    </router-link>
                                </md-table-cell>
                            </md-table-row>
                        </md-table>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>

const toLower = text => {
    return text.toString().toLowerCase()
}

const searchByName = (items, term) => {

    if (term) {
        return items.filter(item => {
            return toLower(item.first_name).includes(toLower(term)) ||
                toLower(item.last_name).includes(toLower(term))
        })
    }

    return items
}

export default {
    name: "UsersIndex",
    data() {
        return {
            users: [],
            search: null,
            searched: [],
            loading: true,
            selected: []
        }
    },
    mounted() {
        this.$http
            .get('/users')
            .then(res => {
                this.users = res.data.data;
                this.searched = this.users;
                this.loading = false;
            })
            .catch(err => console.error(err));
    },
    methods: {
        newMember() {
            window.alert('Not implemented')
        },
        searchOnTable() {
            this.searched = searchByName(this.users, this.search)
        },
        onSelect(items) {
            this.selected = items;
        },
        getAlternateLabel(count) {
            let plural = ''

            if (count > 1) {
                plural = 's'
            }

            return `${count} member${plural} selected`
        }
    }
}
</script>

<style scoped>

</style>