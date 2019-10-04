const d = {
    '在': '在', 
    '我': '我',  
    '们': '們', 
    '周': '周', 
    '围': '圍', 
    '各': '各', 
    '处': '處', 
    '转': '轉', 
    '.': '.',
  '换': '換',  
  '编': '編', 
  '码': '碼', 
  '说': '說', 
  '明': '明', 
  '.': '.'
   
  }
 
  function s2t(text) {
    let result = []
    for (let i=0; i<text.length; i++) {
      let c = text.charAt(i)
      let tc = d[c]
      let c1 = (tc==null) ? c : tc
      result.push(c1)
    }
    return result.join('')
  }
  
  const sText = '在我们周围各处.转换编码说明.繁简'
  let tText = s2t(sText)
  console.log('tText=', tText)