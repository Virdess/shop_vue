<template>
    <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel" data-bs-theme="light">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner" style="height: 500px;">
            <div class="carousel-item active">

                <img style="width: 100%; height: 100%;object-fit: cover;" width="100%" height="100%"
                    class="bd-placeholder-img"
                    src="https://www.greenqueen.com.hk/wp-content/uploads/2021/07/Rental-Fashion-Causes-More-Emissions-Than-Throwing-Clothes-Away.jpg"
                    alt="">
                <div class="container">
                    <div class="carousel-caption">
                        <h1>Отличные продукты.</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptas deleniti. Eius
                            reprehenderit molestiae ipsam. Similique sit et quidem eum!</p>
                        <p><a class="btn btn-lg btn-primary" href="#">Подробнее</a></p>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img style="width: 100%; height: 100%;object-fit: cover;" width="100%" height="100%"
                    class="bd-placeholder-img"
                    src="https://www.highsnobiety.com/static-assets/thumbor/4bW6iFabL1KNxEzgSniFj97GNzY=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2021/04/16162418/how-to-care-for-clothes-02.jpg"
                    alt="">

                <div class="container">
                    <div class="carousel-caption">
                        <h1>Прекрасные продукты.</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p><a class="btn btn-lg btn-primary" href="#">Подробнее</a></p>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img style="width: 100%; height: 100%;object-fit: cover;" width="100%" height="100%"
                    class="bd-placeholder-img"
                    src="https://ichef.bbci.co.uk/news/976/cpsprodpb/175BA/production/_130047659_isabella.jpg"
                    alt="">
                <div class="container">
                    <div class="carousel-caption">
                        <h1>Великолепные продукты.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <p><a class="btn btn-lg btn-primary" href="#">Подробнее</a></p>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script setup>

</script>

<style>.carousel-item {
    height: 32rem;
}</style>