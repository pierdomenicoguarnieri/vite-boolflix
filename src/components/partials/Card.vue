<script>
export default {
  name: "Card",
  props:{
    image: String,
    originalTitle: String,
    translatedTitle: String,
    language: String,
    rating: Number
  }
}
</script>

<template>
  <div class="col mb-5">
    <div class="pg-card d-flex flex-column">
      <img :src="`https://image.tmdb.org/t/p/w342${image}`" :alt="originalTitle" :title="originalTitle">
      <h1>Titolo originale: {{originalTitle}}</h1>
      <h2>Titolo italiano: {{translatedTitle}}</h2>
      <span>Lingua: language</span>
      <span>Media voti: {{rating}}/10</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .col{
    .pg-card{
      color: white;
      img{
        width: 100%;
      }
    }
  }
</style>