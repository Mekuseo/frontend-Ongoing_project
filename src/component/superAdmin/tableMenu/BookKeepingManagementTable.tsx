import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Select,
  MenuItem,
} from "@mui/material";
import "./TableMenu.css";
import QuadSwitch from "./QuadSwitch";
// import TableMenu from "./TableMenu";

interface Column {
  id:
    | "sn"
    | "propertyName"
    | "checkInDate"
    | "checkOutDate"
    | "numberOfNights"
    | "roomType"
    | "phoneNo"
    | "propertyEmail"
    | "propertyAddress"
    | "availabilityOfRooms"
    | "reservationMode"
    | "confirmAvailability";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

interface Data {
  sn: number;
  propertyName: string;
  checkInDate: string;
  checkOutDate: string;
  numberOfNights: number;
  roomType: string;
  phoneNo: string;
  propertyEmail: string;
  propertyAddress: string;
  availabilityOfRooms: string;
  reservationMode: string;
  confirmAvailability: string;
}

const columns: Column[] = [
  { id: "sn", label: "S/N", minWidth: 50 },
  { id: "propertyName", label: "Property Name", minWidth: 170 },
  { id: "checkInDate", label: "Check-in Date", minWidth: 150 },
  { id: "checkOutDate", label: "Check-out Date", minWidth: 150 },
  {
    id: "numberOfNights",
    label: "No. of Nights",
    minWidth: 80,
    align: "right",
  },
  { id: "roomType", label: "Room type/class", minWidth: 120 },
  { id: "phoneNo", label: "Phone no. of property", minWidth: 180 },
  { id: "propertyEmail", label: "Property E-mail", minWidth: 150 },
  { id: "propertyAddress", label: "Property Address", minWidth: 150 },
  { id: "availabilityOfRooms", label: "Availability of Rooms", minWidth: 170 },
  {
    id: "reservationMode",
    label: "Reservation Manual/Automatic",
    minWidth: 200,
  },
  { id: "confirmAvailability", label: "Confirm Availability", minWidth: 180 },
];

const createData = (
  sn: number,
  propertyName: string,
  checkInDate: string,
  checkOutDate: string,
  numberOfNights: number,
  roomType: string,
  phoneNo: string,
  propertyEmail: string,
  propertyAddress: string,
  availabilityOfRooms: string,
  reservationMode: string,
  confirmAvailability: string
): Data => {
  return {
    sn,
    propertyName,
    checkInDate,
    checkOutDate,
    numberOfNights,
    roomType,
    phoneNo,
    propertyEmail,
    propertyAddress,
    availabilityOfRooms,
    reservationMode,
    confirmAvailability,
  };
};

const createSampleRow = (sn: number): Data => {
  return createData(
    sn,
    "Property 1",
    "2023-01-01",
    "2023-01-05",
    4,
    "Standard",
    "123456789",
    "property1@example.com",
    "Address 1",
    "Available",
    "Automatic",
    ""
  );
};

const rows: Data[] = Array.from({ length: 8 }, (_, index) =>
  createSampleRow(index + 1)
);

const BookKeepingManagementTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedAvailability, setSelectedAvailability] = useState<
    Record<number, string>
  >({});

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleAvailabilityChange = (value: string | number, rowSn: number) => {
    setSelectedAvailability((prev) => ({
      ...prev,
      [rowSn]: String(value),
    }));
    // You can add your logic or dispatch an action here
  };

  const renderTableCell = (
    column: Column,
    value: any,
    columnIndex: number,
    rowSn: number
  ) => (
    <TableCell
      key={column.id}
      align={column.align}
      style={{
        textAlign: "center",
        borderRight:
          columnIndex < columns.length - 1 ? "1px solid #e0e0e0" : "none",
      }}
    >
      {column.id === "availabilityOfRooms" ? (
        <Select
          label="Availability"
          value={selectedAvailability[rowSn] || value}
          onChange={(e) => handleAvailabilityChange(e.target.value, rowSn)}
          sx={{ borderRadius: "30px" }}
        >
          <MenuItem value="Available">Availability of Rooms</MenuItem>
          <MenuItem value="No rooms">No rooms left on this deal</MenuItem>
          <MenuItem value="Not Available">1 room left on this deal</MenuItem>
          <MenuItem value="2 rooms">2 rooms left on this deal</MenuItem>
          <MenuItem value="3 rooms">3 rooms left on this deal</MenuItem>
          <MenuItem value="4 rooms">4 rooms left on this deal</MenuItem>
          {/* Add more menu items as needed */}
        </Select>
      ) : (
        // Render other columns normally
        <>
          {column.format && typeof value === "number"
            ? column.format(value)
            : value}
        </>
      )}

      {column.id === "confirmAvailability" && <QuadSwitch />}
    </TableCell>
  );

  return (
    <div className="bookKeeping-tableContainer">
      <Paper sx={{ width: "100%", overflow: "scroll" }}>
        <TableContainer
          sx={{
            maxHeight: 440,
            maxWidth: 1120,
            overflowX: "auto",
            overflowY: "auto",
            position: "relative",
          }}
          id="bookKeepingTable"
        >
          <Table stickyHeader aria-label="sticky table" sx={{ margin: 0 }}>
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      textAlign: "center",
                      minWidth: column.minWidth,
                      borderRight:
                        index < columns.length - 1
                          ? "1px solid #e0e0e0"
                          : "none",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, rowIndex) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.sn}>
                    {columns.map((column, columnIndex) =>
                      renderTableCell(
                        column,
                        row[column.id],
                        columnIndex,
                        row.sn
                      )
                    )}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default BookKeepingManagementTable;
