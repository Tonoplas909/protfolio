<template>
  <div class="home">
    <v-row>
      <v-col cols="3">
        <v-card>
          <v-list>
            <v-list-item v-for="link in links" :key="link.to">
              <v-btn @click="redirectTo(link.to)" block>{{ link.text }}</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn @click="downloadFile" block>Mon CV</v-btn>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="9">
        <h1>Bienvenue sur mon portfolio</h1>
        <p>Je m'appelle Matis Demore, étudiant en deuxième année de BUT Informatique en alternance à l'IUT Informatique
          Alternance campus Valbonne Sophia Antipolis. Passionné par le monde de l'informatique et des nouvelles
          technologies, je m'efforce de constamment élargir mes compétences et de rester à la pointe des innovations
          dans ce
          domaine dynamique.</p>

        <p>Au cours de ma première année d'alternance chez Himydata, j'ai eu l'opportunité de participer à divers
          projets
          qui m'ont permis de développer une solide expertise en programmation, gestion de bases de données et
          administration de réseaux. Ces expériences m'ont également appris l'importance du travail en équipe, de la
          gestion
          efficace du temps et de l'adaptabilité face aux nouvelles technologies.</p>

        <p>Doté d'un esprit analytique et rigoureux, je m'efforce de trouver des solutions créatives et efficaces aux
          défis
          techniques. Je suis particulièrement intéressé par les projets innovants et ambitieux, et je suis toujours à
          la
          recherche de nouvelles opportunités pour approfondir mes connaissances et améliorer mes compétences.</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import cvFile from '@/assets/cv.pdf';

  export default {
  name: 'Home',
  data() {
    return {
      links: [
        { to: '/contact', text: 'Contact' },
        { to: '/projects', text: 'Mes projets' },
      ],
    };
  },
  methods: {
    redirectTo(to) {
      this.$router.push(to);
    },
    
    downloadFile() {
      const link = document.createElement('a');
      link.href = cvFile;
      link.download = 'cv.pdf';
      link.click();
    }
  },
}
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 10px;
}
</style>
