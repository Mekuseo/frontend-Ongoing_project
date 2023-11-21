import { leftArrowMenuIcon, rightArrowMenuIcon } from "./TableMenuIcons";
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
} from "@mui/material";
import "./TableMenu.css";
import RecieptModal from "./RecieptModal";

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
    | "guestName"
    | "guestEmailAddress"
    | "bookingID"
    | "guestPhoneNo"
    | "paymentOptions"
    | "paymentStatus"
    | "amountPaid"
    | "totalAmount"
    | "viewSentReceiptToProperty"
    | "viewInvoiceFromProperty"
    | "typeOfProperty"
    | "address"
    | "stateCountry"
    | "guestReview";
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
  guestName: string;
  guestEmailAddress: string;
  bookingID: number;
  guestPhoneNo: string;
  paymentOptions: string;
  paymentStatus: string;
  amountPaid: string;
  totalAmount: string;
  viewSentReceiptToProperty: string;
  viewInvoiceFromProperty: string;
  typeOfProperty: string;
  address: string;
  stateCountry: string;
  guestReview: string;
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
  { id: "guestName", label: "Guest Name", minWidth: 150 },
  { id: "guestEmailAddress", label: "Guest Email Address", minWidth: 150 },
  { id: "bookingID", label: "Booking ID", minWidth: 150 },
  { id: "guestPhoneNo", label: "Guest Phone No.", minWidth: 150 },
  { id: "paymentOptions", label: "Payment Options", minWidth: 150 },
  { id: "paymentStatus", label: "Payment Status", minWidth: 150 },
  { id: "amountPaid", label: "Amount Paid", minWidth: 150 },
  { id: "totalAmount", label: "Total Amount", minWidth: 150 },
  {
    id: "viewSentReceiptToProperty",
    label: "View Sent Receipt To Property",
    minWidth: 150,
  },
  {
    id: "viewInvoiceFromProperty",
    label: "View Invoice From Property",
    minWidth: 150,
  },
  { id: "typeOfProperty", label: "Type Of Property", minWidth: 150 },
  { id: "address", label: "Address", minWidth: 180 },
  { id: "stateCountry", label: "State Country", minWidth: 150 },
  { id: "guestReview", label: "Guest Review", minWidth: 150 },
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
  guestName: string,
  guestEmailAddress: string,
  bookingID: number,
  guestPhoneNo: string,
  paymentOptions: string,
  paymentStatus: string,
  amountPaid: string,
  totalAmount: string,
  viewSentReceiptToProperty: string,
  viewInvoiceFromProperty: string,
  typeOfProperty: string,
  address: string,
  stateCountry: string,
  guestReview: string
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
    guestName,
    guestEmailAddress,
    bookingID,
    guestPhoneNo,
    paymentOptions,
    paymentStatus,
    amountPaid,
    totalAmount,
    viewSentReceiptToProperty,
    viewInvoiceFromProperty,
    typeOfProperty,
    address,
    stateCountry,
    guestReview,
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
    "Gbenga",
    "gbengadaniels@gmail.com",
    10112023,
    "123456789",
    "Paypal",
    "Paid",
    "N250,000",
    "N250,000",
    "View Image",
    "View Image",
    "Hotel",
    "Abuja, Nigeria",
    "Abuja",
    "Excellent"
  );
};

const rows: Data[] = Array.from({ length: 20 }, (_, index) =>
  createSampleRow(index + 1)
);

const BookingHistory = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleScroll = (direction: "left" | "right") => {
    const table = document.getElementById("bookingHistoryTable");
    if (table) {
      const scrollAmount = direction === "left" ? -30 : 30;
      table.scrollLeft += scrollAmount;
    }
  };

  const renderTableCell = (column: Column, value: any, columnIndex: number) => (
    <TableCell
      key={column.id}
      align={column.align}
      style={{
        textAlign: "center",
        borderRight:
          columnIndex < columns.length - 1 ? "1px solid #e0e0e0" : "none",
      }}
    >
      {column.id === "viewSentReceiptToProperty" ||
      column.id === "viewInvoiceFromProperty" ? (
        <RecieptModal />
      ) : (
        <>
          {column.format && typeof value === "number"
            ? column.format(value)
            : value}
        </>
      )}
    </TableCell>
  );

  return (
    <div>
      <div className="bookingHistory-container">
        <span>Booking History</span>
        <div className="tableMenu-scrollBtn">
          <div className="tableMenu-scrollBtn">
            <button onClick={() => handleScroll("left")}>
              {leftArrowMenuIcon()}
            </button>
            <span>Move</span>
            <button onClick={() => handleScroll("right")}>
              {rightArrowMenuIcon()}
            </button>
          </div>
        </div>
      </div>

      <Paper sx={{ width: "100%", overflow: "scroll" }}>
      <TableContainer
          sx={{
            maxHeight: 440,
            maxWidth: 1120,
            overflowX: "auto",
            overflowY: "auto",
            position: "relative",
          }}
          id="bookingHistoryTable"
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
                      renderTableCell(column, row[column.id], columnIndex)
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

export default BookingHistory;
