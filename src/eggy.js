/*
 * @Author: turka
 * @Date: 2023-02-16 20:10:40
 * @LastEditTime: 2023-02-23 10:27:40
 * @LastEditors: turka
 * @Description: 将颜色文本转换为蛋仔派对彩色字文本
 */ 

import { colord } from "colord"

function convertEggyText(htmlText) {
    let originText = htmlText
    let outputText = ""
    originText = originText.replace("<p>", "")
    originText = originText.replace("</p>", "")

    let textList = originText.split('<span style="color: ')
    for(let i = 0; i < textList.length; i++) {
        let currentText = textList[i]
        if(currentText.indexOf("rgb(") != -1) {
            let rgbText = currentText.substring(0, currentText.indexOf(';">'))
            let hexText = colord(rgbText).toHex()
            hexText = hexText.replace("#", "")
            let colorText = `#c${hexText}`
            currentText = currentText.replace(`${rgbText};">`, colorText)
        }

        /* 若后面再无颜色代码则替换为黑色代码 */

        if(currentText.indexOf("</span>") != -1 && i == textList.length - 1) {
            currentText = currentText.replace("</span>", "#000000")
        }
        else {
            currentText = currentText.replace("</span>", "")
        }

        /* 去除多余字符串 */

        let flagSpanEnd = currentText.indexOf("#000000</span>")
        if(flagSpanEnd != -1) {
            currentText = currentText.substring(0, flagSpanEnd)
        }

        flagSpanEnd = currentText.indexOf("#000000")
        let flagEndText = currentText.substring(flagSpanEnd + 8)
        if (flagEndText.length == "") {
            currentText = currentText.replace("#000000", "")
        }

        outputText += currentText
    }

    return outputText
}

export { convertEggyText }
