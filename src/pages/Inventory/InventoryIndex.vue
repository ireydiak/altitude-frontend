<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">Inventory</h4>
                    </md-card-header>
                    <md-card-content>
                        <div v-if="loading">loading...</div>

                        <md-table v-model="searched" md-sort="name" md-sort-order="desc" md-fixed-header>
                            <md-table-toolbar v-if="!loading">
                                <h1 class="md-title"></h1>
                                <md-field md-clearable class="md-toolbar-section-end">
                                    <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable"/>
                                </md-field>
                            </md-table-toolbar>
                            <md-table-empty-state v-if="!loading"
                                                  md-label="No inventory found"
                                                  :md-description="`No item found for this '${search}' query. Try a different search term or create a new inventory.`">
                                <md-button class="md-primary md-raised" @click="newInventory">Create New Inventory
                                </md-button>
                            </md-table-empty-state>
                            <md-table-row slot="md-table-row" slot-scope="{ item }">
                                <md-table-cell md-label="SKU" md-sort-by="sku">{{ item.sku }}</md-table-cell>
                                <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
                                <md-table-cell md-label="Description">{{ item.description }}</md-table-cell>
                                <md-table-cell md-label="Note">{{ item.note }}</md-table-cell>
                                <md-table-cell md-label="Info">{{ item.info }}</md-table-cell>
                                <md-table-cell md-label="Actions">
                                    <router-link :to="{ name: 'Edit Inventory', params: { id: item.id }}">
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
        return items.filter(item => toLower(item.name).includes(toLower(term)))
    }

    return items
}

export default {

    name: "InventoryIndex",
    data: () => {
        return {
            inventory: {},
            search: null,
            searched: [],
            loading: true
        }
    },
    mounted() {
        this.$http
            .get('inventory')
            .then(res => {
                this.inventory = res.data.data;
                this.searched = res.data.data;
                this.loading = false;
            })
            .catch(err => console.error(err));
    },
    methods: {
        newInventory() {
            window.alert('Not implemented')
        },
        searchOnTable() {
            this.searched = searchByName(this.inventory, this.search)
        },
    }
}
</script>

<style scoped>

</style>