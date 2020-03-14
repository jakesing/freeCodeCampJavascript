import React from 'react';
import marked from 'marked';

function Preview(props){
	marked.setOptions({
		  breaks: true,
		});

	const renderer = new marked.Renderer();
		renderer.link = function (href, title, text) {
		  return `<a target="_blank" href="${href}">${text}` + '</a>';
		}
		renderer.code = function(code, language) {
		  return '<pre><code class=language-' + language + '>' + code + '</code></pre>';
		}

    return (
        <div id='preview'>
          <div dangerouslySetInnerHTML={{__html: marked(props.text, { renderer: renderer })}} />
        </div>
    )
}


export default Preview;