import Home from '../views/home/home.vue'
import SplitPane from '../views/splitPane'
import VirtualList from '../views/virtualList'

// 汇总相关路由
export const liRoutes = [
    {
      path: '/splitPane',
      name: 'splitPane',
      component: SplitPane,
      meta: {
        name: '面板分割'
      }
    },
    {
      path: '/virtualList',
      name: 'virtualList',
      component: VirtualList,
      meta: {
        name: '长列表优化-虚拟列表'
      }
    }
]

export const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    ...liRoutes
  ]
