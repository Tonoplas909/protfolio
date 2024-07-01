<template>
    <v-container>
        <v-card>
            <v-card-title>
                <h2>Contactez moi</h2>
            </v-card-title>
            <v-card-text>
                <v-form @submit.prevent="submitForm">
                    <v-text-field v-model="name" label="Nom"></v-text-field>
                    <v-text-field v-model="email" label="Email"></v-text-field>
                    <v-textarea v-model="message" label="Message"></v-textarea>
                    <v-btn type="submit" color="primary">Envoyer</v-btn>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" @click="goBack">Retour</v-btn>
            </v-card-actions>
        </v-card>
        <v-snackbar v-model="snackbar">
            {{ text }}
            <template v-slot:actions>
                <v-btn color="pink" variant="text" @click="snackbar = false">
                    Fermer
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            message: '',
            text: 'Le formulaire de contact a bien été envoyé',
            snackbar: false
        }
    },
    methods: {
        submitForm() {
            // Clear les inputs
            this.name = '';
            this.email = '';
            this.message = '';

            this.snackbar = true;
        },
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.container {
    max-width: 600px;
    margin: 0 auto;
}

.card {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.card-title {
    font-size: 24px;
    margin-bottom: 20px;
}

.form-field {
    margin-bottom: 20px;
}

.submit-btn {
    margin-top: 20px;
}
</style>
