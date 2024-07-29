<template>
  <section class="section" id="amenities">
    <div class="container">
      <h1 class="title">{{ $t('amenities.title') }}</h1>

      <div class="amenity">
        <h3>{{ $t('amenities.services') }}</h3>
        <div class="amenity-list">
          <div class="amenity-item" v-for="(item, key) in serviceItems" :key="key">
            <span>
              <i class="icon-am">
                <img :src="item.icon" :alt="$t(item.alt)">
              </i>
              {{ $t(item.text) }}
            </span>
          </div>
        </div>
      </div>

      <div class="amenity" v-for="(amenity, key) in otherAmenities" :key="key">
        <h3>{{ $t(amenity.title) }}</h3>
        <div class="amenity-list">
          <div class="amenity-item" v-for="item in amenity.items" :key="item.alt">
            <span>
              <i class="icon-am">
                <img :src="item.icon" :alt="$t(item.alt)">
              </i>
              {{ $t(item.text) }}
            </span>
          </div>
        </div>
      </div>

      <div class="amenity">
        <h3>{{ $t('amenities.notIncluded') }}</h3>
        <div class="amenity-list">
          <div class="amenity-item">
            <i class="bi bi-x text-danger"></i>
            <span>{{ $t('amenities.notIncludedList.noAC') }}</span>
          </div>
          <div class="amenity-item">
            <i class="bi bi-x text-danger"></i>
            <span>{{ $t('amenities.notIncludedList.noSmokeDetector') }}</span>
          </div>
          <div class="amenity-item">
            <i class="bi bi-x text-danger"></i>
            <span>{{ $t('amenities.notIncludedList.noCO2Detector') }}</span>
          </div>
          <div class="amenity-item">
            <i class="bi bi-x text-danger"></i>
            <span>{{ $t('amenities.notIncludedList.noHeating') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AmenitiesSection',
  data() {
    return {
      serviceItems: [
        { icon: '/img/icons/icons8-shower-50.png', alt: 'amenities.amenitiesList.bathroom', text: 'amenities.amenitiesList.bathroom' },
        { icon: '/img/icons/icons8-towel-50.png', alt: 'amenities.amenitiesList.towels', text: 'amenities.amenitiesList.towels' },
        { icon: '/img/icons/icons8-water-heater-50.png', alt: 'amenities.amenitiesList.hotWater', text: 'amenities.amenitiesList.hotWater' },
        { icon: '/img/icons/icons8-hair-dryer-50.png', alt: 'amenities.amenitiesList.hairDryer', text: 'amenities.amenitiesList.hairDryer' },
        { icon: '/img/icons/icons8-housekeeping-50.png', alt: 'amenities.amenitiesList.cleaningProducts', text: 'amenities.amenitiesList.cleaningProducts' },
        { icon: '/img/icons/icons8-washing-machine-50.png', alt: 'amenities.amenitiesList.washingMachine', text: 'amenities.amenitiesList.washingMachine' },
        { icon: '/img/icons/icons8-closet-50.png', alt: 'amenities.amenitiesList.wardrobe', text: 'amenities.amenitiesList.wardrobe' },
        { icon: '/img/icons/icons8-hanger-50.png', alt: 'amenities.amenitiesList.hangers', text: 'amenities.amenitiesList.hangers' },
        { icon: '/img/icons/icons8-theatre-curtain-50.png', alt: 'amenities.amenitiesList.blackoutCurtains', text: 'amenities.amenitiesList.blackoutCurtains' },
        { icon: '/img/icons/icons8-iron-50.png', alt: 'amenities.amenitiesList.iron', text: 'amenities.amenitiesList.iron' }
      ],
      otherAmenities: {
        homeSafety: {
          title: 'amenities.homeSafety',
          items: [
            { icon: '/img/icons/icons8-dome-camera-50.png', alt: 'amenities.safetyList.securityCameras', text: 'amenities.safetyList.securityCameras' },
            { icon: '/img/icons/icons8-fire-extinguisher-50.png', alt: 'amenities.safetyList.fireExtinguisher', text: 'amenities.safetyList.fireExtinguisher' },
            { icon: '/img/icons/icons8-first-aid-kit-50.png', alt: 'amenities.safetyList.firstAidKit', text: 'amenities.safetyList.firstAidKit' }
          ]
        },
        internetOffice: {
          title: 'amenities.internetOffice',
          items: [
            { icon: '/img/icons/icons8-wi-fi-connected-50.png', alt: 'amenities.internetOfficeList.wifi', text: 'amenities.internetOfficeList.wifi' },
            { icon: '/img/icons/icons8-home-office-50.png', alt: 'amenities.internetOfficeList.workArea', text: 'amenities.internetOfficeList.workArea' }
          ]
        },
        kitchenDining: {
          title: 'amenities.kitchenDining',
          items: [
            { icon: '/img/icons/icons8-kitchen-room-50.png', alt: 'amenities.kitchenDiningList.kitchenUse', text: 'amenities.kitchenDiningList.kitchenUse' },
            { icon: '/img/icons/icons8-microwave-50.png', alt: 'amenities.kitchenDiningList.microwave', text: 'amenities.kitchenDiningList.microwave' },
            { icon: '/img/icons/icons8-kitchen-50.png', alt: 'amenities.kitchenDiningList.cookingBasics', text: 'amenities.kitchenDiningList.cookingBasics' },
            { icon: '/img/icons/icons8-restaurant-50.png', alt: 'amenities.kitchenDiningList.dishes', text: 'amenities.kitchenDiningList.dishes' },
            { icon: '/img/icons/icons8-fridge-50.png', alt: 'amenities.kitchenDiningList.miniFridge', text: 'amenities.kitchenDiningList.miniFridge' },
            { icon: '/img/icons/icons8-cooker-50.png', alt: 'amenities.kitchenDiningList.stoveOven', text: 'amenities.kitchenDiningList.stoveOven' },
            { icon: '/img/icons/icons8-coffee-maker-50.png', alt: 'amenities.kitchenDiningList.coffeeMaker', text: 'amenities.kitchenDiningList.coffeeMaker' },
            { icon: '/img/icons/icons8-blender-50.png', alt: 'amenities.kitchenDiningList.blender', text: 'amenities.kitchenDiningList.blender' },
            { icon: '/img/icons/icons8-table-50.png', alt: 'amenities.kitchenDiningList.diningTable', text: 'amenities.kitchenDiningList.diningTable' }
          ]
        },
        outdoors: {
          title: 'amenities.outdoors',
          items: [
            { icon: '/img/icons/icons8-balcony-50.png', alt: 'amenities.outdoorsList.balcony', text: 'amenities.outdoorsList.balcony' },
          ]
        },
        additionalServices: {
          title: 'amenities.additionalServices',
          items: [
            { icon: '/img/icons/icons8-pets-50.png', alt: 'amenities.additionalServicesList.petsAllowed', text: 'amenities.additionalServicesList.petsAllowed' },
            { icon: '/img/icons/icons8-host-50.png', alt: 'amenities.additionalServicesList.selfCheckin', text: 'amenities.additionalServicesList.selfCheckin' },
            { icon: '/img/icons/icons8-data-encryption-50.png', alt: 'amenities.additionalServicesList.smartLock', text: 'amenities.additionalServicesList.smartLock' }
          ]
        }
      }
    };
  }
};
</script>

<style scoped>
.section {
  padding: 80px 0;
  background-color: #f9f9f9;
  text-align: left;
}

.title {
  color: #333;
  margin-bottom: 40px;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.amenity {
  margin-bottom: 40px;
}

.amenity h3 {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

.amenity-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.amenity-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.amenity-item i {
  font-size: 20px;
  color: #999;
}

.amenity-item span {
  font-size: 18px;
  color: #666;
}

.amenity-item .icon-am {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  float: left;
}

.amenity-item .icon-am img {
  width: 100%;
  height: auto;
}
</style>
