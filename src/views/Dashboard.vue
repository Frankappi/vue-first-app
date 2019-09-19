<template>
    <div class="dashboard">
        <loggedInMenu />
        <div class="jumbotron">
            <h1>Welcome to our app, we hope you will enjoy it.</h1>
        </div>
        <div class="container">
            <div class="col-sm-12 postcontainer">
                <div class="card-deck">
                    <router-link to="/social" class="btn card bg-warning">
                        <div class="card-header">
                            <h4>Socializing</h4>
                        </div>
                        <div class="card-body text-center">
                            <font-awesome-icon :icon="['fas', 'users']" class="socialicon"/>
                        </div>
                        <div class="card-footer">
                            <p>
                                Post something, look at posts or make friends and chat wit your friend
                            </p>
                        </div>
                    </router-link>
                    <div class="card bg-secondary">
                        <div class="card-header">
                            <h4>Gallery</h4>
                        </div>
                        <div class="card-body text-center">
                            <font-awesome-icon :icon="['fas', 'images']" class="pictureicon"/>
                        </div>
                        <div class="card-footer">
                            <p>
                                Upload or simple look up some pictures
                            </p>
                            <strong>( Coming soon )</strong>
                        </div>
                    </div>
                    <div class="card bg-secondary">
                        <div class="card-header">
                            <h4>Media</h4>
                        </div>
                        <div class="card-body text-center">
                            <font-awesome-icon :icon="['fas', 'compact-disc']" class="mediaicon"/>
                        </div>
                        <div class="card-footer">
                            <p>
                                Listen to music or look up some video's
                            </p>
                            <strong>( Coming soon )</strong>
                        </div>
                    </div>
                    <router-link to="/profile" class="btn card bg-info">
                        <div class="card-header">
                            <h4>Profile</h4>
                        </div>
                        <div class="card-body text-center">
                            <font-awesome-icon :icon="['fas', 'id-badge']" class="profileicon"/>
                        </div>
                        <div class="card-footer">
                            <p>
                                Edit or look at your profile
                            </p>
                        </div>
                    </router-link >
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import loggedInMenu from '../components/loggedInBanner.vue'
export default {
    name: 'dashboard',
    data() {
        return {
            
        }
    },
    components: {
        loggedInMenu
    }
}
</script>

<style scoped>
    .postcontainer {
        margin: auto;
        padding: 50px 10px 50px 10px;
    }
    .socialicon {
        font-size: 65pt;
    }
    .pictureicon {
        font-size: 65pt;
    }
    .mediaicon {
        font-size: 65pt;
    }
    .profileicon {
        font-size: 65pt;
    }
</style>