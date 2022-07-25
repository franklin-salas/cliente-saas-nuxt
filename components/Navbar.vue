<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand to="/">
                    Stream
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav >
                <b-navbar-nav>
                    <b-nav-item href="">Mis videos</b-nav-item>
                    <b-nav-item href="">Planes</b-nav-item>
                </b-navbar-nav>
                <client-only>
                    <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown  right v-if="$auth.loggedIn">
                        <template #button-content >
                            {{$auth.user.name}}
                        </template>
                        <b-dropdown-item to="/dashboard">Mi cuenta</b-dropdown-item>
                        <b-dropdown-item href="#" @click.prevent="logout" >Cerrar sesión</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <template v-if="!$auth.loggedIn">
                    <b-nav-item to="/login">Login</b-nav-item>
                    <b-nav-item href="">Registrarse</b-nav-item>

                    </template>
                </b-navbar-nav>
                </client-only>
            </b-collapse>
        </b-navbar>
        Menu de Navegacion
    </div>
</template>

<script>
export default {
   
   methods: {
    async logout(){
        await this.$auth.logout();  
        this.$router.replace({name: 'login'})
    }
   },
}
</script>