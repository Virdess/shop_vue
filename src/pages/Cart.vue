<script>
import Card from '../components/Card.vue'
import { defineComponent } from 'vue';
export default defineComponent({
    components: { Card },
    data() {
        return {
            products: [
                {
                    img: 'https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png',
                    title: 'Product name 5',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    price: 300
                },
                {
                    img: 'https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png',
                    title: 'Product name 6',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    price: 300
                },
            ],
            whatProd: '',
        }
    },
    methods: {
        getWhatProd(prod) {
            this.whatProd = prod
        }
    }
})
</script>

<template>
    <div class="home">
        <h1>
            Детское
        </h1>
        <div class="row" v-if="Object.keys(products).length">
            <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
                <div class="list-group list-group-checkable d-grid gap-2 border-0" style="cursor: pointer;">
                    <label class="list-group-item rounded-3 py-3" for="listGroupCheckableRadios1"
                        v-for="product in products">
                        <div class="row">
                            <div class="col-md-5">
                                <img :src="product.img" alt="" style="width: 150px; object-fit: cover;">
                            </div>
                            <div class="col">
                                {{ product.title }}
                                <span class="d-block small opacity-50">{{ product.desc }}</span>;
                            </div>
                        </div>

                    </label>
                </div>
            </div>
        </div>
        <button class="btn btn-success">Купить</button>
        <h5>
            {{ whatProd }}
        </h5>
    </div>
</template>