<template>
    <v-container>
        <h1>Mes Projets</h1>
        <v-card>
            <v-card-title>IA for Youth</v-card-title>
            <v-card-text>
                <p>IA for Youth est un projet dans lequel j'ai développé une intelligence artificielle.</p>
                <p>Technologies utilisées : Python, TensorFlow</p>
            </v-card-text>
        </v-card>

        <v-card>
            <v-card-title>Monopoly Java</v-card-title>
            <v-card-text>
                <p>Monopoly Java est un projet dans lequel j'ai recréé le jeu de société Monopoly en utilisant Java.</p>
                <p>Technologies utilisées : Java, Swing</p>
            </v-card-text>
        </v-card>

        <v-card>
            <v-card-title>Jeu Unreal Engine</v-card-title>
            <v-card-text>
                <p>Jeu Unreal Engine est un projet dans lequel j'ai développé un jeu en utilisant le moteur de jeu Unreal Engine.</p>
                <p>Technologies utilisées : Unreal Engine, C++</p>
            </v-card-text>
        </v-card>

        <v-btn @click="$router.go(-1)" color="primary">Retour</v-btn>
    </v-container>
</template>

<script>
export default {
    name: 'Projets',
}
</script>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 20px;
}

v-card {
    margin-bottom: 20px;
}
</style>