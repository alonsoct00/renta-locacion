<template>
    <div class="slider">
      <div class="slider-wrapper" :style="sliderStyles">
        <div
          class="slide"
          v-for="(image, index) in images"
          :key="index"
          :style="{ backgroundImage: 'url(' + image + ')' }"
        ></div>
      </div>
      <div class="arrows">
        <button @click="prevSlide" class="arrow prev">&lt;</button>
        <button @click="nextSlide" class="arrow next">&gt;</button>
      </div>
      <div class="bullets">
        <span
          v-for="(image, index) in images"
          :key="index"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'ImageSlider',
    props: {
      images: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        currentIndex: 0
      };
    },
    computed: {
      sliderStyles() {
        return {
          transform: `translateX(-${this.currentIndex * 100}%)`
        };
      }
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prevSlide() {
        this.currentIndex =
          (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
      goToSlide(index) {
        this.currentIndex = index;
      }
    }
  };
  </script>

  <style scoped>
  .slider {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .slider-wrapper {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .slide {
    min-width: 100%;
    height: 300px; /* Adjust based on your requirement */
    background-size: cover;
    background-position: center;
  }

  .arrows {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
  }

  .arrow {
    background: rgba(255, 255, 255, 0.5);
    border: none;
    padding: 10px;
    cursor: pointer;
  }

  .bullets {
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .bullets span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    cursor: pointer;
  }

  .bullets span.active {
    background: rgba(255, 255, 255, 1);
  }
  </style>