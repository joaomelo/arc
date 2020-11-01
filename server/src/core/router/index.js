export const createServiceHandler = service => async (req, res, next) => {
  try {
    const payload = req.body;
    const context = { userId: req.userId };
    const result = await service(payload, context);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
