<template>
    <div class="card" style="width: 18rem; margin: 10px; padding: 0 !important;">
        <img :src="img" class="card-img-top" alt="prod img" style="height: 200px;object-fit: cover;">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ desc }}</p>
            <a class="btn btn-primary">${{ price }}</a>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    desc: String,
    price: Number,
    img:String,
})
</script>