<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-100 md-size-66">
                <form>
                    <md-card>
                        <md-card-header data-background-color="green">
                            <h4 class="title">Edit Inventory</h4>
                            <p class="category">{{ inventory.name }} ({{ inventory.sku }})</p>
                        </md-card-header>

                        <md-card-content v-if="inventory">
                            <div class="md-layout">
                                <div class="md-layout-item md-small-size-100 md-size-33">
                                    <md-field>
                                        <label>Name</label>
                                        <md-input v-model="inventory.name" type="text"></md-input>
                                    </md-field>
                                </div>
                                <div class="md-layout-item md-small-size-100 md-size-33">
                                    <md-field>
                                        <label>SKU</label>
                                        <md-input v-model="inventory.sku" type="text"></md-input>
                                    </md-field>
                                </div>
                                <div class="md-layout-item md-small-size-100 md-size-33">
                                    <md-field>
                                        <label>Price</label>
                                        <md-input v-model="inventory.price" type="text"></md-input>
                                    </md-field>
                                </div>
                                <div class="md-layout-item md-size-100">
                                    <md-field maxlength="3">
                                        <label>Description</label>
                                        <md-textarea v-model="inventory.description"></md-textarea>
                                    </md-field>
                                </div>
                                <div class="md-layout-item md-size-100">
                                    <md-field maxlength="3">
                                        <label>Info</label>
                                        <md-textarea v-model="inventory.info"></md-textarea>
                                    </md-field>
                                </div>
                                <div class="md-layout-item md-size-100">
                                    <md-field maxlength="3">
                                        <label>Notes</label>
                                        <md-textarea v-model="inventory.notes"></md-textarea>
                                    </md-field>
                                </div>
                                <div class="md-layout-item md-small-size-100 md-size-33">
                                    <md-field>
                                        <label>State</label>
                                        <md-input v-model="inventory.state" type="text"></md-input>
                                    </md-field>
                                </div>
                                <div class="md-layout-item md-small-size-100 md-size-33">
                                    <md-field>
                                        <label>Purchase Date</label>
                                        <md-input v-model="inventory.purchase_date" type="text"></md-input>
                                    </md-field>
                                </div>
                                <div class="md-layout-item md-size-100 text-right">
                                    <md-button class="md-raised md-success">Update Inventory</md-button>
                                </div>
                            </div>
                        </md-card-content>
                    </md-card>
                </form>
            </div>
            <div class="md-layout-item md-medium-size-100 md-size-33">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EditInventory",
    data: () => {
        return {
            inventory: {}
        }
    },
    mounted() {
        if (this.$route.params.id) {

            this.$http
                .get(`/inventory/${this.$route.params.id}`)
                .then(res => this.inventory = res.data.data)
                .catch(err => console.error(err));
        }
    }
}
</script>

<style scoped>

</style>