import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeSection from '@/components/Home.vue';
import GallerySection from '@/components/Gallery.vue';
import ContactSection from '@/components/Contact.vue';
import PoliciesSection from '@/components/Policies.vue';
import AmenitiesSection from '@/components/Amenities.vue';
import ServicesSection from '@/components/Services.vue';
import LocalGuideSection from '@/components/LocalGuide.vue';
import BookingIframe from '@/components/BookingIframe.vue';
import NotFound from '@/components/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: HomeSection },
  { path: '/gallery', name: 'Gallery', component: GallerySection },
  { path: '/contact', name: 'Contact', component: ContactSection },
  { path: '/policies', name: 'Policies', component: PoliciesSection },
  { path: '/amenities', name: 'Amenities', component: AmenitiesSection },
  { path: '/services', name: 'Services', component: ServicesSection },
  { path: '/local-guide', name: 'LocalGuide', component: LocalGuideSection },
  { path: '/booking', name: 'Booking', component: BookingIframe },
  { path: '*', component: NotFound }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;