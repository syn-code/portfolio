import * as VueRouter from 'vue-router';

import routes from './routes';

    //bind routes to and register them in vue router
   const router = VueRouter.createRouter({
        history: VueRouter.createWebHashHistory(),
        routes
    })

export default router;
