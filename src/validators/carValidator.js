import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Тільки букви від 1 до 20 символів'
    }),
    price: Joi.number().min(0).max(1_000_000).required().messages({
        'number.min': 'Не менше 0',
        'number.max': 'Не більше 1 000 000'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min': 'Не менше 1990',
        'number.max': `Не більше ${new Date().getFullYear()}`
    })
})

export {carValidator}