/*
 * @Author: turka
 * @Date: 2023-02-15 18:39:25
 * @LastEditTime: 2023-02-23 10:44:07
 * @LastEditors: turka
 * @Description: 
 */

import { defineConfig } from 'vite'

export default defineConfig ({
    base: "./",
    build: {
        outDir: "./dist",
        assetsDir: "./"
    }
});
