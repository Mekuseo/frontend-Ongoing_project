// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from "react";
import DeleteConfirmation from "./deleteEvent";
import "./manageEvent.css";

const array = [
  {
    button: "TITLE OF EVENTS",
  },
  {
    button: "LOCATION",
  },
  {
    button: "DATE CREATED",
  },
  {
    button: "NUMBER OF BOOKINGS",
  },
  {
    button: "TOTAL AMOUNT RECEIVED",
  },
];

interface Row {
  id: number;
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  editing?: boolean;
}

const ManageEventListings: React.FC = () => {
  const initialRows: Row[] = [
    {
      id: 1,
      col1: "Dee event",
      col2: "Wuse Abuja",
      col3: "5th August, 2023",
      col4: "22",
      col5: "N100,000.00",
    },
    {
      id: 2,
      col1: "Piper parties",
      col2: "Maitama Abuja",
      col3: "10th August 2023",
      col4: "78",
      col5: "N40,000.00",
    },
  ];

  const [rows, setRows] = useState<Row[]>(initialRows);
  const [newRow, setNewRow] = useState<Row | null>(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState<Row | null>(null);
  const [isAddingRow, setIsAddingRow] = useState(false);

  const handleDelete = (row: Row) => {
    setRowToDelete(row);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (rowToDelete) {
      const updatedRows = rows.filter((row) => row.id !== rowToDelete.id);
      setRows(updatedRows);
    }
    setDeleteModalOpen(false);
    setRowToDelete(null);
  };

  const handleAddRow = () => {
    if (newRow && (newRow.col1 || newRow.col2 || newRow.col3 || newRow.col4 || newRow.col5)) {
      setRows([...rows, newRow]);
      setNewRow(null);
      setIsAddingRow(false);
    }
  };

  return (
    <div>
      <>
        <h1 className="manageEventHead">Manage Event Listing</h1>

        <div className="manageEventContainer">
          <div className="manageEventContent">
            <div className="manageEventButtonContainer">
              {array.map((item, index) => (
                <div key={index}>
                  <button>{item.button}</button>
                </div>
              ))}
            </div>
            <table>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td>
                      {row.editing ? (
                        <input
                          type="text"
                          value={row.col1}
                          onChange={(e) => handleInputChange(e, row.id, "col1")}
                        />
                      ) : (
                        row.col1
                      )}
                    </td>
                    <td>
                      {row.editing ? (
                        <input
                          type="text"
                          value={row.colq}
                          onChange={(e) => handleInputChange(e, row.id, "col2")}
                        />
                      ) : (
                        row.col2
                      )}
                    </td>
                    <td>
                      {row.editing ? (
                        <input
                          type="text"
                          value={row.col3}
                          onChange={(e) => handleInputChange(e, row.id, "col3")}
                        />
                      ) : (
                        row.col3
                      )}
                    </td>
                    <td>
                      {row.editing ? (
                        <input
                          type="text"
                          value={row.col4}
                          onChange={(e) => handleInputChange(e, row.id, "col4")}
                        />
                      ) : (
                        row.col4
                      )}
                    </td>
                    <td>
                      {row.editing ? (
                        <input
                          type="text"
                          value={row.col5}
                          onChange={(e) => handleInputChange(e, row.id, "col5")}
                        />
                      ) : (
                        row.col5
                      )}
                    </td>
                    <div className="manageEventEditButtons">
                      <button onClick={() => handleDelete(row)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <g clip-path="url(#clip0_6377_7024)">
                                <path d="M2 3.5H10" stroke="#929292" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5 5.5V8.5" stroke="#929292" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 5.5V8.5" stroke="#929292" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.5 3.5L3 9.5C3 9.76522 3.10536 10.0196 3.29289 10.2071C3.48043 10.3946 3.73478 10.5 4 10.5H8C8.26522 10.5 8.51957 10.3946 8.70711 10.2071C8.89464 10.0196 9 9.76522 9 9.5L9.5 3.5" stroke="#929292" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.5 3.5V2C4.5 1.86739 4.55268 1.74021 4.64645 1.64645C4.74021 1.55268 4.86739 1.5 5 1.5H7C7.13261 1.5 7.25979 1.55268 7.35355 1.64645C7.44732 1.74021 7.5 1.86739 7.5 2V3.5" stroke="#929292" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_6377_7024">
                                <rect width="12" height="12" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                      </button>
                    </div>
                  </tr>
                ))}
              </tbody>
            </table>

            {isAddingRow && (
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Title"
                    value={newRow?.col1 || ""}
                    onChange={(e) => setNewRow({ ...newRow, col1: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Location"
                    value={newRow?.col2 || ""}
                    onChange={(e) => setNewRow({ ...newRow, col2: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Date Created"
                    value={newRow?.col3 || ""}
                    onChange={(e) => setNewRow({ ...newRow, col3: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Number Of Bookings"
                    value={newRow?.col4 || ""}
                    onChange={(e) => setNewRow({ ...newRow, col4: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Amount Received"
                    value={newRow?.col5 || ""}
                    onChange={(e) => setNewRow({ ...newRow, col5: e.target.value })}
                  />
                </td>
              </tr>
            )}
            {rowToDelete && (
              <DeleteConfirmation
                isOpen={isDeleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirmDelete={handleConfirmDelete}
              />
            )}

            {!isAddingRow && (
              <button onClick={() => setIsAddingRow(true)} className="addButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M18.1997 0H8.37449C4.10674 0 1.5625 2.7125 1.5625 7.2625V17.725C1.5625 22.2875 4.10674 25 8.37449 25H18.188C22.4557 25 25 22.2875 25 17.7375V7.2625C25.0117 2.7125 22.4674 0 18.1997 0ZM17.9769 13.4375H14.1664V17.5C14.1664 18.0125 13.7678 18.4375 13.2871 18.4375C12.8064 18.4375 12.4077 18.0125 12.4077 17.5V13.4375H8.59726C8.11655 13.4375 7.71791 13.0125 7.71791 12.5C7.71791 11.9875 8.11655 11.5625 8.59726 11.5625H12.4077V7.5C12.4077 6.9875 12.8064 6.5625 13.2871 6.5625C13.7678 6.5625 14.1664 6.9875 14.1664 7.5V11.5625H17.9769C18.4576 11.5625 18.8563 11.9875 18.8563 12.5C18.8563 13.0125 18.4576 13.4375 17.9769 13.4375Z" fill="#6E9E76"/>
                </svg>
                Create an event
              </button>
            )}
            {isAddingRow && (
              <button onClick={handleAddRow} className="addButton">Save</button>
            )}
          </div>
        </div>
      </>
    </div>
  );
};

export default ManageEventListings;
