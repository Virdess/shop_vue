<template>
    <form class="col-3" style="margin: 100px auto">
        <h1 class="h3 mb-3 fw-normal">Регистрация</h1>

        <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating">
            <input type="text" class="form-control" id="floatingUsername" placeholder="username">
            <label for="floatingUsername">Username</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Пароль</label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit" style="margin: 5px;">Зарегистрироваться</button>
        <router-link to="login">
            <button class="btn btn-success w-100 py-2" href="/login" style="margin: 5px;">Войти</button>
        </router-link>

    </form>
</template>

<script>

</script>