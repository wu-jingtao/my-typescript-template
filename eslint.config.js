const sufu = require('eslint-config-sufu');

module.exports = [
    /**
     * 如果你的项目只有 javascript 那就选 js
     * 如果你的项目只有 typescript 那就选 ts
     * 如果你的项目既有 javascript 又有 typescript 那就选 js-ts
     */
    ...sufu['js-ts'],
    {
        rules: {
            /**
             * 添加自定义规则
             */
        }
    }
];
