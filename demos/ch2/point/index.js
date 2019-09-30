// 定点着色器
const vShaderSource = `
  void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    gl_PointSize = 10.0;
  }
`;
// 片源着色器
const fShaderSource = `
  void main() {
    gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
  }
`;


/**
 * 获取canvas元素
 * 获取WEBGL绘图上下文
 * 初始化着色器
 * 设置canvas背景色
 * 清除canvas
 * 绘图
 */
function main() {
  const canvas = document.getElementById('webgl');
  const gl = getWebGLContext(canvas);
  if(!gl) {
    console.log('Fail to get the rendering context for webgl');
    return;
  }

  
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  
  if(!initShaders(gl, vShaderSource, fShaderSource)) {
    console.log('Fail to initialize shader');
    return;
  }
  gl.drawArrays(gl.POINTS, 0, 1);
}

main();