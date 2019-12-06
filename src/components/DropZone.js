import React, {Component} from 'react';
import './DropZone.css';


class DropZone extends Component {
  constructor(props) {
    super(props);
    this.fileInputRef = React.createRef();
    this.state = {
        hightlight: false 
    }

    this.openFileDialog = this.openFileDialog.bind(this);
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  openFileDialog() {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  }

  onFilesAdded(evt) {
    if (this.props.disabled) return;

    const files = evt.target.files;

    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files);
      this.props.onFilesAdded(array);
    }
  }

  fileListToArray(list) {
    const array = [];

    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }

    return array;
  }

  onDragOver(evt) {
    evt.preventDefault();
  
    if (this.props.disabled) return;
  
    this.setState({ hightlight: true });
  }

  onDragLeave() {
    this.setState({ hightlight: false });
  }

  onDrop(event) {
    event.preventDefault();
  
    if (this.props.disabled) return;
  
    const files = event.dataTransfer.files;
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files);
      this.props.onFilesAdded(array);
    }
    this.setState({ hightlight: false });
  }

  render() {
    return (
        <div className="Card-Dropzone">
            <div className={`Dropzone ${this.state.hightlight ? "Highlight" : ""}`}
                 onDragOver={this.onDragOver}
                 onDragLeave={this.onDragLeave}
                 onDrop={this.onDrop}
                 onClick={this.openFileDialog}
                 style={{ cursor: this.props.disabled ? "default" : "pointer" }}
            >
                <img
                    alt="upload"
                    className="Icon"
                    src="https://cdn3.iconfinder.com/data/icons/file-and-folder-outline-icons-set/144/File_Add-512.png"
                />
                <input
                    ref={this.fileInputRef}
                    className="FileInput"
                    type="file"
                    multiple
                    onChange={this.onFilesAdded}
                />
                <span>Upload Files</span>
            </div>
        </div>
    );
  }

}

export default DropZone;


