/*
 * @Author: turka
 * @Date: 2023-02-15 18:23:38
 * @LastEditTime: 2023-02-16 21:58:55
 * @LastEditors: turka
 * @Description: 主文件
 */

import "./style.css"
import { initEditor, getContentText } from "./editor"
import { convertEggyText } from "./eggy"
import ClipboardJS from "clipboard"
import showToast from "show-toast"

initEditor(".eggy-editor")

const clipboard = new ClipboardJS(".eggy-btn", {
    text: function(trigger) {
        let contentText = getContentText()
        return convertEggyText(contentText)
    }
})

clipboard.on("success", function(event) {
    showToast({
        str: "文本已复制，请粘贴至游戏内",
        time: 1500,
        position: 'top'
    })
})
