<template>
    <form>
        <md-card>
            <md-card-header :data-background-color="dataBackgroundColor">
                <h4 class="title">Edit Profile</h4>
                <p class="category">Edit {{ user.first_name }} {{ user.last_name }}'s information</p>
            </md-card-header>

            <md-card-content v-if="user">
                <div class="md-layout">
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                            <label>First Name</label>
                            <md-input v-model="user.first_name" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                            <label>Last Name</label>
                            <md-input v-model="user.last_name" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                            <label>Email Address</label>
                            <md-input v-model="user.email" type="email"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                            <label>CIP</label>
                            <md-input v-model="user.cip" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                            <label>Phone</label>
                            <md-input v-model="user.phone" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-33">
                        <md-field>
                            <label>Facebook</label>
                            <md-input v-model="user.facebook" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-size-100">
                        <md-field maxlength="3">
                            <label>Emergency Contact</label>
                            <md-textarea v-model="user.emergency_contact"></md-textarea>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-size-100">
                        <md-field maxlength="3">
                            <label>Allergies</label>
                            <md-textarea v-model="user.allergies"></md-textarea>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-size-100 text-right">
                        <md-button class="md-raised md-success">Update Profile</md-button>
                    </div>
                </div>
            </md-card-content>
        </md-card>
    </form>
</template>
<script>
export default {
    name: "edit-profile-form",
    props: {
        dataBackgroundColor: {
            type: String,
            default: ""
        },
        user: {
            type: Object,
            default: () => {
            }
        }
    },
    created() {
        if (!this.user) {
            this.user = {
                id: null,
                first_name: '',
                last_name: '',
                phone: '',
                facebook: '',
                cip: '',
                email: '',
                emergency_contact: '',
                allergies: '',
            }
        }
    }

};
</script>
<style></style>
