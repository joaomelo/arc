import { AppError } from '__ser/core/error';
import { ROUTER_ERRORS } from './errors';

export const createServiceHandler = (service, options = {}) => async (req, res, next) => {
  const userId = req.userId;
  const context = { userId };
  const payload = req.body;

  try {
    const { isPublic } = options;
    if (!(isPublic || userId)) throw new AppError(ROUTER_ERRORS.PRIVATE_ROUTE_WITHOUT_CREDENTIALS);

    const result = await service(payload, context);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
