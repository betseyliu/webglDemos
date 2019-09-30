export default async () => {
  const [htmlCode, jsCode] = await Promise.all([
    import('!raw-loader!~/common/index.html'),
    import('!raw-loader!./index.js'),
  ]);

  return {
    html: {
      code: htmlCode, // HTML 代码
      transformer: 'html',
      visible: false,
    },
    javascript: {
      code: jsCode, // JavaScript 代码
      transformer: 'javascript',  // JavaScript transformer
      visible: true,  // 是否显示编辑器
    },
  }
}