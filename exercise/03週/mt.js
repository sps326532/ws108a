const d = {
    a: '一隻', 
    dog: '狗', 
    chase: '追', 
    the: '這隻', 
    cat: '貓', 
    '.': '.'
  }
  
  function e2c(text) {
    let words = text.split(' ')
    let cwords = []
    console.log('words=%j', words)
    for (let word of words) {
      cwords.push(d[word])
    }
    console.log('cwords=%j', cwords)
    return cwords.join(' ')
  }
  
  const eText = 'a dog chase a cat . a dog eat a cat .'
  e2c(eText)