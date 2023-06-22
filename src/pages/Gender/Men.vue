<script>
import Card from '../../components/Card.vue'
import { defineComponent } from 'vue';
export default defineComponent({
    components: { Card },
    data() {
        return {
            products: [
                {
                    img:'https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png',
                    title: 'Product name 1',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    price: 300
                },
                {
                    img:'https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png',
                    title: 'Product name 2',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    price: 300
                },
                {
                    img:'https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png',
                    title: 'Product name 3',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    price: 300
                },
                {
                    img:'https://s3.amazonaws.com/www-inside-design/uploads/2018/12/The-product-of-you-810x810.png',
                    title: 'Product name 7',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    price: 300
                },
            ],
            whatProd:'',
        }
    },
    methods:{
        getWhatProd(prod){
            this.whatProd = prod
        }
    }
})
</script>

<template>
    <div class="home">
        <h1>
            Мужское
        </h1>
        <div class="row" v-if="Object.keys(products).length">
            <Card style="cursor: pointer;" v-for="product in products" :key="product" :title="product.title" :desc="product.desc" :price="product.price" :img="product.img" v-on:click="getWhatProd(product.title)"/>
        </div>
        <h5>
            {{whatProd}}
        </h5>
    </div>
</template>