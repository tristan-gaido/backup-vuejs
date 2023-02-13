<template>
  <div>
    <div class="card" style="width: 18rem">
      <img :src="image" class="card-img-top" :alt="name" />
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text">Resistance : {{ resistance }}</p>
        <p class="card-text">Hardness : {{ hardness }}</p>
        <router-link
          :to="{
            name: 'DetailsProductView',
            params: {
              id: idBlock,
              name: name,
              image: image,
              hardness: hardness,
              resistance: resistance,
            },
          }"
        >
          Voir
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: {
    idBlock: String,
    name: String,
    hardness: String,
    resistance: String,
    image: String,
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
