import { createRouter, createWebHistory } from 'vue-router';

// 연결할 각 컴포넌트 import (src/views폴더 아래 컴포넌트들 생성해둠)
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
// 라우터 설계
const routes = [
	{ path: '/', component: HomeView },
	{ path: '/about', component: AboutView },
];

// 라우터 생성
const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

//외부에서 사용할수있도록 내보냄
export default router;
