/**
 * Created by jiajie on 17/5/5.
 */
const router = express.Router({ mergeParams: true });
const apiRoot = Routes.api;

router.use('/', apiRoot.v1.index);

export default router;
