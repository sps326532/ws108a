# ���ʬ��� 12-mvcServer

model : lib/model.js
view  : lib/view.js   + view/*.html
controller  : server.js

# ���ʬ��� 11-loginServer

user : ccc
password: 1234

# ���ʬ��� 10-editServer

�Ҽ{�ϥ� Fetch API : https://github.com/camsong/blog/issues/2


# ���ʬ��� 09-katexRendering

## �����ɮסG user/book/markdown/math.md

�[�J�̫ᨺ�ӷ|�j�r��m�����ƾǦ��C

```
\int_0^{\infty} f(x) dx
```

$$\int_0^{\infty} f(x) dx$$


$$
\int_0^{\infty} f(x) dx
$$

## �����ɮ� : render/view.html


�ק�[�J�U�C�q���A��O�i�H�b�e�ݧe�{ tex �ƾǦ�

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css">

...

<script>
var htmlBox = document.getElementById("htmlBox");

function texRender(text) {
  var tex1 = text.replace(/\$\$\s*\n\s*([^$]+)\s*\n\s*\$\$/gi, function(flag,match,end){
		return katex.renderToString(match, { displayMode: true });
  });
	var tex2 = tex1.replace(/\$\$([^$]+)\$\$/gi, function(flag,match,end){
		return katex.renderToString(match);
  });
	return tex2;
}

function load() {
	htmlBox.innerHTML = texRender(htmlBox.innerHTML);
}
</script>

...
<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js"></script>

...

