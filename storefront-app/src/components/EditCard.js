import React from "react";

const EditCard = ({
  setItemToEdit,
  editItem,
  itemToEdit,
  saveEdit,
  setItems
}) => {
  return (
    <div>
      <form onSubmit={saveEdit}>
        <legend>edit item</legend>
        <label>
          item name:
          <input
            onChange={e =>
              setItemToEdit({ ...itemToEdit, item: e.target.value })
            }
            value={itemToEdit.item}
          />
        </label>
        <label>
          <input
            onChange={e =>
              setItemToEdit({
                ...itemToEdit
                // code: { hex: e.target.value }
              })
            }
          />
        </label>
        <div>
          <button type="submit">save</button>
          <button onClick={() => setItems(false)}>cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditCard;
