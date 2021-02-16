
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      testText: "testing 123"
    }
  }
  handleEditorChange = (e) => {
    console.log(
      'Content was updated:',
      e.target.getContent()
    );
  }

  render() {
    const { testText } = this.state;
    return (
      <Editor
        apiKey="v0molh31bgfou1f7ya72fddj12bjhkyxqw0v15x5uizmldkn"
        initialValue={testText}
        // placeholder={testText}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount',
            'emoticons',
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help | emoticons'
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default App;