const validate = (schema) => {
    const validateMiddleware = async (req, res, next) => {
        try {
            const validatedData = await schema.parseAsync(req.body);
            req.validatedData = validatedData;
            next();
        } catch (error) {
            next(error);
        }
    };
    return validateMiddleware;
};

export default validate;