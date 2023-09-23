import type { AppRouteRecordRaw } from '@/router/types';
import { CodeSandboxOutlined } from '@ant-design/icons-vue';

const three: AppRouteRecordRaw[] = [
  {
    meta: {
      title: 'three',
      icon: CodeSandboxOutlined,
      keepAlive: false,
      needLogin: false,
      isRootMenu: true,
      ignoreAuth: true,
      auth: [],
      orderNo: 1
    },
    path: '',
    name: 'threeIndex',
    children: [
      {
        meta: {
          title: 'three',
          keepAlive: true,
          needLogin: false,
          ignoreAuth: true,
          hideMenu: true,
          auth: []
        },
        path: 'three',
        name: 'three',
        component: () => import('@/views/threejs/index.vue'),
      },
      {
        meta: {
          title: '电子围栏',
          keepAlive: true,
          needLogin: false,
          ignoreAuth: true,
          auth: []
        },
        path: 'three/electronic-fence',
        name: 'ElectronicFence',
        component: () => import('@/views/threejs/children/fence/index.vue')
      },
      {
        meta: {
          title: '光线围栏',
          keepAlive: true,
          needLogin: false,
          ignoreAuth: true,
          auth: []
        },
        path: 'three/light-line-fence',
        name: 'LightLineFence',
        component: () => import('@/views/threejs/children/light-line-fence/index.vue')
      },
      {
        meta: {
          title: '雷达扫描',
          keepAlive: true,
          needLogin: false,
          ignoreAuth: true,
          auth: []
        },
        path: 'three/radar-scan',
        name: 'RadarScan',
        component: () => import('@/views/threejs/children/radar/index.vue')
      },
      {
        meta: {
          title: '火焰🔥',
          keepAlive: true,
          needLogin: false,
          ignoreAuth: true,
          auth: []
        },
        path: 'three/fire',
        name: 'Fire',
        component: () => import('@/views/threejs/children/fire/index.vue')
      },
      {
        meta: {
          title: '烟雾🌫️',
          keepAlive: true,
          needLogin: false,
          ignoreAuth: true,
          auth: []
        },
        path: 'three/smoke',
        name: 'Smoke',
        component: () => import('@/views/threejs/children/smoke/index.vue')
      },
      {
        meta: {
          title: '雪花❄️',
          keepAlive: true,
          needLogin: false,
          ignoreAuth: true,
          auth: []
        },
        path: 'three/snow',
        name: 'Snow',
        component: () => import('@/views/threejs/children/snow/index.vue')
      },
      {
        meta: {
          title: '视频',
          keepAlive: true,
          needLogin: false,
          ignoreAuth: true,
          auth: []
        },
        path: 'three/video',
        name: 'Video',
        component: () => import('@/views/threejs/children/video/index.vue')
      },
      {
        meta: {
          title: '三维网页',
          keepAlive: true,
          needLogin: false,
          ignoreAuth: true,
          auth: []
        },
        path: 'three/three-web',
        name: 'ThreeWeb',
        component: () => import('@/views/threejs/children/3d-web-container/index.vue')
      },
      {
        meta: {
          title: '可拖拽物体',
          keepAlive: true,
          needLogin: false,
          ignoreAuth: true,
          auth: []
        },
        path: 'three/drag-object',
        name: 'DragObject',
        component: () => import('@/views/threejs/children/drag-object/index.vue')
      },
      {
        meta: {
          title: '辉光',
          keepAlive: true,
          needLogin: false,
          ignoreAuth: true,
          auth: []
        },
        path: 'three/bloom-effect',
        name: 'BloomEffect',
        component: () => import('@/views/threejs/children/glow/index.vue')
      },
      {
        meta: {
          title: '海水🌊',
          keepAlive: true,
          needLogin: false,
          ignoreAuth: true,
          auth: []
        },
        path: 'three/water',
        name: 'SeaWater',
        component: () => import('@/views/threejs/children/water/index.vue')
      },
      {
        meta: {
          title: '碰撞检测💥',
          keepAlive: true,
          needLogin: false,
          ignoreAuth: true,
          auth: []
        },
        path: 'three/collision-detection',
        name: 'CollisionDetection',
        component: () => import('@/views/threejs/children/collision-detection/index.vue')
      },
      {
        meta: {
          title: 'earth',
          keepAlive: true,
          needLogin: false,
          ignoreAuth: true,
          auth: []
        },
        path: 'three/earth',
        name: 'earth',
        component: () => import('@/views/threejs/children/earth/index.vue')
      }
    ]
  },
];

export default three;
