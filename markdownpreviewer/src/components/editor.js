import React from 'react';



function Editor(props){

	return (
		<div>
			<label htmlFor="editor">Enter plaintext:</label>
			<textarea
				id="editor"
				name="editor"
				rows="10"
				cols="50"
				onChange={props.handleChange}
				defaultValue={props.text}
			></textarea>
		</div>	
	)
}	

export default Editor;