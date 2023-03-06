/*
 * @Author: turka
 * @Date: 2023-02-15 18:23:38
 * @LastEditTime: 2023-03-06 09:58:23
 * @LastEditors: turka
 * @Description: 彩字编辑框
 */

import tinymce from "tinymce"
import "tinymce/themes/silver"
import "tinymce/models/dom"
import "tinymce/icons/default"
import "tinymce/skins/ui/oxide/skin.min.css"
import "tinymce/skins/ui/oxide/skin.min.css"
import "tinymce/skins/content/default/content.css"

function initEditor(selector) {
    tinymce.init({
        selector: selector,
        toolbar: "forecolor | undo redo",
        toolbar_location: "bottom",
        menubar: false,
        statusbar: false,
        auto_focus: true,
        placeholder: "开始编辑..."
    })
}

function getContentText() {
    let editorContent = tinymce.activeEditor.getContent()
    return editorContent
}

export { initEditor, getContentText }
