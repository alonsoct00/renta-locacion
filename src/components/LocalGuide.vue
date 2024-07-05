<template>
  <section class="section" id="local-guide">
    <div class="container">
      <h1 class="title">Guía Local</h1>
      <div class="row">
        <div class="col-md-3 mb-4" v-for="item in localGuides" :key="item.id">
          <div class="card h-100">
            <img :src="item.image" class="card-img-top" :alt="item.title">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.description }}</p>
              <a :href="item.link" target="_blank" class="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LocalGuideSection',
  data() {
    return {
      localGuides: [
        { id: 1, image: 'https://dummyimage.com/300x200/000/fff', title: 'Lugar 1', description: 'Descripción del lugar 1', link: 'https://example.com' },
        { id: 2, image: 'https://dummyimage.com/300x200/000/fff', title: 'Lugar 2', description: 'Descripción del lugar 2', link: 'https://example.com' },
        { id: 3, image: 'https://dummyimage.com/300x200/000/fff', title: 'Lugar 3', description: 'Descripción del lugar 3', link: 'https://example.com' },
        { id: 4, image: 'https://dummyimage.com/300x200/000/fff', title: 'Lugar 4', description: 'Descripción del lugar 4', link: 'https://example.com' },
        { id: 5, image: 'https://dummyimage.com/300x200/000/fff', title: 'Lugar 5', description: 'Descripción del lugar 5', link: 'https://example.com' },
        { id: 6, image: 'https://dummyimage.com/300x200/000/fff', title: 'Lugar 6', description: 'Descripción del lugar 6', link: 'https://example.com' },
        { id: 7, image: 'https://dummyimage.com/300x200/000/fff', title: 'Lugar 7', description: 'Descripción del lugar 7', link: 'https://example.com' },
        { id: 8, image: 'https://dummyimage.com/300x200/000/fff', title: 'Lugar 8', description: 'Descripción del lugar 8', link: 'https://example.com' },
        { id: 9, image: 'https://dummyimage.com/300x200/000/fff', title: 'Lugar 9', description: 'Descripción del lugar 9', link: 'https://example.com' },
        { id: 10, image: 'https://dummyimage.com/300x200/000/fff', title: 'Lugar 10', description: 'Descripción del lugar 10', link: 'https://example.com' },
        { id: 11, image: 'https://dummyimage.com/300x200/000/fff', title: 'Lugar 11', description: 'Descripción del lugar 11', link: 'https://example.com' },
        { id: 12, image: 'https://dummyimage.com/300x200/000/fff', title: 'Lugar 12', description: 'Descripción del lugar 12', link: 'https://example.com' },
        { id: 13, image: 'https://dummyimage.com/300x200/000/fff', title: 'Lugar 13', description: 'Descripción del lugar 13', link: 'https://example.com' },
        { id: 14, image: 'https://dummyimage.com/300x200/000/fff', title: 'Lugar 14', description: 'Descripción del lugar 14', link: 'https://example.com' },
        { id: 15, image: 'https://dummyimage.com/300x200/000/fff', title: 'Lugar 15', description: 'Descripción del lugar 15', link: 'https://example.com' },
        { id: 16, image: 'https://dummyimage.com/300x200/000/fff', title: 'Lugar 16', description: 'Descripción del lugar 16', link: 'https://example.com' }
      ]
    };
  }
}
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}

#local-guide h1 {
  margin-bottom: 60px;
}
</style>
