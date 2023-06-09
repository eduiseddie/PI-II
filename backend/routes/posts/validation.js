const joi = require('joi');

const addPostSchema = joi.object({
    title: joi.string().max(50).allow(null, ''),
    post_content: joi.string().max(255).required(),
    user_id: joi.number().integer().required()
});

const editPostSchema = joi.object({
    title: joi.string().max(50).allow(null, ''),
    post_content: joi.string().max(255).required()
});

const addCommentSchema = joi.object({
    comment_content: joi.string().max(255).required(),
    user_id: joi.number().integer().required()
});

module.exports = {
    addPostSchema,
    editPostSchema,
    addCommentSchema,
};