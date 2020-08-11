import React, { useRef } from "react";

import Workspace from "./Workspace";
import Canvas from "./Canvas";
import DatabaseUpload from "./component/DatabaseUpload";
import Button from "@material-ui/core/Button";
import firebase from "firebase";

import "./Workspace.scss";

import AddIcon from "@material-ui/icons/Add";

function Workarea(props) {
  const user = firebase.auth().currentUser;

  const refPass = useRef();

  return (
    <div>
      <div className="toolbar">
        <Button>Welcome to the Canvas - Click or Drag to add Content</Button>
        <div
          onClick={() => refPass.current.passMessage()}
          className="droppable-element"
          draggable={true}
          unselectable="on"
          onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
        >
          <AddIcon
            style={{ color: "white", fontSize: "30px", cursor: "pointer" }}
          />
        </div>
        {/* <div className='save'>Save</div> */}

        {!user ? (
          <div style={{ marginRight: 0 }}>Sign in to Save your work</div>
        ) : (
          <DatabaseUpload
            className="save"
            createGallery={props.createGallery}
          />
        )}
      </div>
      <Workspace ref={refPass} />
    </div>
  );
}

export default Workarea;
