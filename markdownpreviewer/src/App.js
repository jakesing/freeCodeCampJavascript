import React from 'react';
import Editor from './components/editor'
import Preview from './components/preview'
import './App.css';


// User Story #1: I can see a textarea element with a corresponding id="editor".
//DONE
// User Story #2: I can see an element with a corresponding id="preview".
//DONE
// User Story #3: When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.
//DONE
// User Story #4: When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).

// User Story #5: When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

// User Story #6: When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.

// Optional Bonus (you do not need to make this test pass): My markdown previewer interprets carriage returns and renders them as br (line break) elements.

const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<inline style>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

The coolest part is probably the toolbar, so go ahead and check that out. There are libraries out there that embed pre-coded toolbards like [SimpleMDE](https://simplemde.com/), but I decided to try to undertake the challenge myself, so this is definitely not perfect (some scrolling issues), but for the most part it works.

There's also [links](https://www.freecodecamp.com/no-stack-dub-sack), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With differnt indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. The tool bar keeps adding 1s.
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)

Well, that's it! Thanks for visiting my project. The code is in desperate need of a refactor, so maybe I will improve later and add additional functionality like syntax highlighting and fix some of the bugs. For this first round, I was just exploring these techniques and focusing on getting things working. 

Feel free to play around and leave some comments if you have any thoughts!
`

class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			input: placeholder
		}
	}



	handleEditorInput = (event) => {
		this.setState({
			input: event.target.value
		})
	}

	render() {
		return (
			<div>
				<Editor handleChange={this.handleEditorInput} text={this.state.input}/>
				<Preview text={this.state.input}/>
			</div>
		)
		
	}
}

export default App;
