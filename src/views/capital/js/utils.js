// @copyright所有
// 云码资源淘宝店铺  大数据可视化大屏模板专家
// https://shop188702750.taobao.com/search.htm?spm=a1z10.1-c.0.0.1221421cqgmNaI&search=y
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}
