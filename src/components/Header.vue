<template>
    <header data-bs-theme="dark">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/home">Shop</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <router-link to="/home" class="nav-link">Главная</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="About" class="nav-link">О нас</router-link>
                        </li>
                        <div class="dropdown" v-on:click="toggle">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Для кого?
                            </button>
                            <ul class="dropdown-menu" :style="{ display: active ? 'block' : 'none' }">
                                <li><router-link class="dropdown-item" to="/men">Мужчинам</router-link></li>
                                <li><router-link class="dropdown-item" to="/women">Женщинам</router-link></li>
                                <li><router-link class="dropdown-item" to="/children">Детям</router-link></li>
                            </ul>
                        </div>
                    </ul>
                    <!--form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form-->
                </div>
                <router-link to="cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-cart2"
                        viewBox="0 0 16 16">
                        <path
                            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                    </svg>
                </router-link>

            </div>
        </nav>
    </header>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            active: false
        }
    },
    methods: {
        toggle() {
            this.active = !this.active
        }
    }
})
</script>

<style>
.bi-cart2 {
    cursor: pointer;
}
</style>