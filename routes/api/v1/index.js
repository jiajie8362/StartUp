/**
 * Created by jiajie on 17/5/5.
 */
const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
	res.send({ app: 'Start Up' });
});

export default router;
