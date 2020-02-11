import React from "react";
import { InputGroup, Form, Alert } from "react-bootstrap";

class CopyClipboard extends React.Component {
  copyClipboardFill() {
    var copy = document.getElementById("url-copy-to-clipboard");
    copy.value = window.location.origin + "/room/" + this.props.roomId;

    document
      .getElementById("url-copy-icon")
      .addEventListener("click", event => {
        var copyText = document.getElementById("url-copy-to-clipboard");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/

        /* Copy the text inside the text field */
        document.execCommand("copy");

        var alert = document.getElementById("copy-alert");
        alert.style.opacity = 1;
        setTimeout(() => {
          document.getElementById("copy-alert").style.opacity = 0;
        }, 1500);
      });
  }

  componentDidMount() {
      this.copyClipboardFill();
  }

  render() {
    return (
      <div>
        <InputGroup>
          <Form.Control id="url-copy-to-clipboard" type="text" readOnly />
          <InputGroup.Append id="url-copy-icon">
            <InputGroup.Text className="shadow" id="inputGroupPrepend">
              Copy
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>

        <Alert
          style={{ opacity: 0, transition: "opacity 0.5s" }}
          className="mt-2"
          variant="success"
          id="copy-alert"
        >
          Successfully copied to clipboard!
        </Alert>
      </div>
    );
  }
}

export default CopyClipboard;