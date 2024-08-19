import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdcCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";

const TodoListItem = () => {
  return (
    <div>
      <div>
        <MdCheckBoxOutlineBlank />
        <div>할 일</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
