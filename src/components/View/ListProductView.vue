<template>
  <div id="app">
    <ListProduct :products="products" />
  </div>
</template>

<script>
import ListProduct from "./../ListProduct";

// récupération des données
/* let jsonData;
fetch("https://nodejs-gray-seven.vercel.app/products")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Network response was not ok");
    }
  })
  .then((data) => {
    console.log(data);
    jsonData = data;
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
  */

export default {
  name: "ListProductView",
  components: {
    ListProduct,
  },
  data() {
    return {
      products: [
        // https://nodejs-gray-seven.vercel.app/products
        {
          _id: "63e6663faa86075000048998",
          name: "Oak Log",
          resistance: "2",
          image:
            "https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/f1/Spruce_Log_%28UD%29_JE5_BE3.png",
          hardness: "2",
          _created: "2023-02-10T15:43:59.717Z",
          _changed: "2023-02-10T15:43:59.717Z",
          _createdby: "api",
          _changedby: "api",
          _version: 0,
        },
        {
          _id: "63e66470aa86075000048975",
          name: "Dirt",
          resistance: "0.5",
          hardness: "0.5",
          image:
            "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2f/Dirt.png",
          _created: "2023-02-10T15:36:16.811Z",
          _changed: "2023-02-10T15:36:16.811Z",
          _createdby: "api",
          _changedby: "api",
          _version: 0,
        },
        {
          _id: "63e664b5aa86075000048978",
          name: "Stone",
          resistance: "6",
          hardness: "1.5",
          image:
            "https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/99/Obsidian_JE3_BE2.png",
          _created: "2023-02-10T15:37:25.505Z",
          _changed: "2023-02-10T15:37:25.505Z",
          _createdby: "api",
          _changedby: "api",
          _version: 0,
        },
        {
          _id: "63e664edaa8607500004897d",
          name: "Stone",
          resistance: "6",
          image:
            "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d4/Stone.png",
          hardness: "1.5",
          _created: "2023-02-10T15:38:21.300Z",
          _changed: "2023-02-10T15:38:21.300Z",
          _createdby: "api",
          _changedby: "api",
          _version: 0,
        },

        {
          _id: "63e66403aa86075000048972",
          name: "Wool",
          resistance: "2",
          hardness: "2",
          image:
            "https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/66/White_Wool_JE2_BE2.png",
          _created: "2023-02-10T15:34:27.017Z",
          _changed: "2023-02-10T15:34:27.017Z",
          _createdby: "api",
          _changedby: "api",
          _version: 0,
        },
        {
          _id: "63e664f4aa8607500004897f",
          name: "Diorite",
          resistance: "6",
          image:
            "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/08/Diorite.png",
          hardness: "1.5",
          _created: "2023-02-10T15:38:28.004Z",
          _changed: "2023-02-10T15:38:28.004Z",
          _createdby: "api",
          _changedby: "api",
          _version: 0,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
