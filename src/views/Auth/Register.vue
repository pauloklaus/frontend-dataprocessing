<template>
    <div class="container">
        <form @submit.prevent="submit">
            <h1>Registre-se</h1>

            <TimeoutMessage v-model="error" variant="danger" />

            <div class="field">
                <label for="name">Nome</label><br>
                <input type="text" :disabled="processing" ref="name" name="name" v-model="form.name">
            </div>

            <div class="field">
                <label for="email">E-mail</label><br>
                <input type="email" :disabled="processing" ref="email" name="email" v-model="form.email">
            </div>

            <div class="field">
                <label for="password">Senha</label><br>
                <input type="password" :disabled="processing" ref="password" name="password" xminlength="8" v-model="form.password">
            </div>

            <div class="actions">
                <button type="submit" :disabled="processing">Confirmar</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

import ValidationError from "@/data/Error/Validation/ValidationError";
import User from "@/data/Auth/Register/User";
import UserFactory from "@/data/Auth/Register/UserFactory";

export default Vue.extend({
    data() {
        return {
            processing: false,
            error: null,
            form: new User
        }
    },
    created() {
        this.focusOn("name");
    },
    methods: {
        focusOn(field: string): void {
            this.$nextTick(() => {
                if (this.$refs[field])
                    this.$refs[field].focus();
            });
        },
        async submit() {
            this.processing = true;
            const UserService = UserFactory.factory();

            try {
                await UserService.insert(this.form);
            }
            catch (error) {
                this.error = error.message;

                if (error instanceof ValidationError)
                    this.focusOn(error.field);
            }
            finally {
                this.processing = false;
            }
        }
    }
})
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
}
form {
    padding: 40px;
    border: 1px solid gainsboro;
    width: 500px;
}
h1 {
    text-align: center;
    margin-bottom: 10px;
}
</style>
