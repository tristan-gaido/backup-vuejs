<template>
  <div>
    <div class="titleImage">
      <h5 class="card-title">{{ $route.params.name }}</h5>
      <img
        :src="$route.params.image"
        class="card-img-top"
        :alt="$route.params.name"
      />
      <h5 class="card-title">{{ $route.params.name }}</h5>
      <p class="card-text">Blast resistance: {{ $route.params.resistance }}</p>
      <p class="card-text">Hardness: {{ $route.params.hardness }}</p>
      <p class="card-text">
        <!--{{ computeSolidity($route.params.hardness, $route.params.resistance) }}-->
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailsProduct",
  props: {
    name: String,
    resistance: String,
    hardness: String,
    solidity: String,
    image: String,
  },
  computed: {
    computeSolidity(hardness, resistance) {
      return (hardness * resistance) / 2;
    },
  },
  created() {
    console.log(this.name);
  },
};
console.log("yop");
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

.titleImage {
  display: flex;
  flex-direction: column;
}
img {
  width: 30%;
}
</style>