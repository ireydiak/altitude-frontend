<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-100 md-size-66">
                <edit-profile-form data-background-color="green" :user="user"></edit-profile-form>
            </div>
            <div class="md-layout-item md-medium-size-100 md-size-33">
                <user-card></user-card>
            </div>
        </div>
    </div>
</template>

<script>
import {EditProfileForm, UserCard} from "@/pages";

export default {
    components: {
        EditProfileForm,
        UserCard
    },
    data() {
        return {
            user: {}
        }
    },
    mounted() {
        if (this.$route.params.id) {
            this.$http
                .get(`/users/${this.$route.params.id}`)
                .then(res => {console.log(res); this.user = res.data.data;})
                .catch(err => console.error(err));
        }
    }
};
</script>
