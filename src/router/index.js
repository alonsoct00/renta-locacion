import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeSection from '@/components/Home.vue';
import GallerySection from '@/components/Gallery.vue';
import ContactSection from '@/components/Contact.vue';
import AmenitiesSection from '@/components/Amenities.vue';
import LocalGuideSection from '@/components/LocalGuide.vue';
import PoliciesPage from '@/views/Policies.vue';
import NotFound from '@/components/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: HomeSection },
  { path: '/gallery', name: 'Gallery', component: GallerySection },
  { path: '/contact', name: 'Contact', component: ContactSection },
  { path: '/policies', name: 'Policies', component: PoliciesPage },
  { path: '/amenities', name: 'Amenities', component: AmenitiesSection },
  { path: '/local-guide', name: 'LocalGuide', component: LocalGuideSection },

  { path: '*', component: NotFound }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;