
/**
 * 获取canvas元素
 * 获取WEBGL绘图上下文
 * 设置canvas背景色
 * 清除canvas
 * 绘图
 */
function main() {
  const canvas = document.getElementById('webgl');
  // 获取WEBGL上下文，getWebGLContext(elment, [,debug]);
  const gl = getWebGLContext(canvas);
  if(!gl) {
    console.log('Fail to get the rendering context for webgl');
    return;
  }
  // 指定绘图区域的背景色
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // 将指定缓冲区设置为默认值，如果清空的是颜色缓冲区，那么将使用gl.clearColor()指定的值
  gl.clear(gl.COLOR_BUFFER_BIT);
}


main();