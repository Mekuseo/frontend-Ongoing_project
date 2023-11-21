/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { ChangeEvent } from 'react';

interface PaymentInfoProps {
  accountNumber: string;
  bankName: string;
  accountName: string;
  swiftCode: string;
  email: string;
  billingName: string;
  billingEmail: string;
  phoneNumber: string;
  countries: { code: string; label: string; phone: string }[];
  handleCountrySelect: (code: string) => void;
  setAccountNumber: (value: string) => void;
  setBankName: (value: string) => void;
  setAccountName: (value: string) => void;
  setSwiftCode: (value: string) => void;
  setEmail: (value: string) => void;
  setBillingName: (value: string) => void;
  setBillingEmail: (value: string) => void;
  setPhoneNumber: (value: string) => void;
}

export default PaymentInfoProps;