<template>
  <div>
    <h1>List of products</h1>
    <ul>
      <CardProduct
        v-for="product in formattedProducts"
        :key="product.idBlock"
        :idBlock="product.idBlock"
        :name="product.name"
        :resistance="product.resistance"
        :hardness="product.hardness"
        :image="product.image"
      ></CardProduct>
    </ul>
  </div>
</template>

<script>
import CardProduct from "./Products/CardProduct";

export default {
  name: "ListProduct",
  components: {
    CardProduct,
  },
  props: {
    products: Array,
  },
  computed: {
    formattedProducts() {
      return this.products.map((product) => {
        return {
          idBlock: product._id,
          name: product.name,
          resistance: product.resistance,
          hardness: product.hardness,
          image: product.image,
        };
      });
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

table {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 10px;
}
ul {
  display: flex;
  flex-wrap: wrap;
}
</style>
