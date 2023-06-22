<template>
    <form class="col-3" style="margin: 100px auto">
        <h1 class="h3 mb-3 fw-normal">Вход</h1>

        <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>
        <router-link to="/home"><button class="btn btn-primary w-100 py-2" type="submit" style="margin: 5px;">Войти</button></router-link>
        <router-link to="register"><button class="btn btn-success w-100 py-2" href="/register"
                style="margin: 5px;">Зарегистрироваться</button></router-link>

    </form>
</template>

<script>

</script>