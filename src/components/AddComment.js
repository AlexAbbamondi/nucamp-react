// import React from "react"
// import {COMMENTS} from "../shared/comments"

// class AddComment extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: '', comments: COMMENTS};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     handleClick() {
//         const text= document.getElementById("textarea").value;
//         this.state.comments.push(text)
//     }

//     render() {
//       return (
//           <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>Comment:</label>
//             <textarea value={this.state.value} onChange={this.handleChange} id="textarea"/>
//           <input type="submit" value="Submit" onClick={this.handleClick}/>
//         </form>
//         <div className="preview">
//         <h1>Preview</h1>
//         <div>{this.state.value}</div>
//       </div>
//       </div>
//       );
//     }
//   }
  

// export default AddComment