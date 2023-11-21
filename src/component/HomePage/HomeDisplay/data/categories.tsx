// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';

const SVG1 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23" fill="none">
        <path d="M1 1V18M1 14.3571H22M22 18V10.9571C22 9.59702 22 8.9169 21.7457 8.39743C21.522 7.94049 21.165 7.56892 20.726 7.33614C20.2269 7.07143 19.5734 7.07143 18.2667 7.07143H10.3333V14.026M5.66667 9.5H5.67833M6.83333 9.5C6.83333 10.1707 6.31099 10.7143 5.66667 10.7143C5.02234 10.7143 4.5 10.1707 4.5 9.5C4.5 8.82935 5.02234 8.28571 5.66667 8.28571C6.31099 8.28571 6.83333 8.82935 6.83333 9.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

const SVG2 = () => (
    <svg xmlns="http://w3.org/2000/svg" width="23" height="21" viewBox="0 0 23" fill="none">
        <path d="M3.80008 20V11.2309H1L11.5001 1L22 11.2306H19.2001V19.9998H13.6001V13.423H9.40008V19.9998L3.80008 20Z" stroke="black" stroke-width="2" stroke-miterlimit="5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

const SVG3 = () => (
    <svg xmlns="http://w3.org/2000/svg" width="23" height="26" viewBox="0 0 23" fill="none">
        <path d="M11.6093 0C5.32354 0 0 4.53958 0 9.91606C0 15.5469 6.17071 21.3052 10.3213 25.3524C10.3375 25.3687 11.0084 26 11.8345 26H11.9073C12.7343 26 13.4004 25.3687 13.4167 25.3524C17.3113 21.5563 23 15.2958 23 9.91606C23 4.53877 18.8475 0 11.6093 0ZM11.9935 24.262C11.96 24.2904 11.9111 24.3221 11.868 24.3489C11.8239 24.3229 11.776 24.2904 11.7405 24.262L11.2393 23.7729C7.30442 19.9459 1.91571 14.7043 1.91571 9.91525C1.91571 5.42036 6.35471 1.62343 11.6083 1.62343C18.1528 1.62343 21.0824 5.78762 21.0824 9.91525C21.0824 13.5505 18.0243 18.3785 11.9935 24.262ZM11.5335 4.91984C8.35858 4.91984 5.78354 7.10228 5.78354 9.79499C5.78354 12.4877 8.35858 14.6701 11.5335 14.6701C14.7085 14.6701 17.2835 12.4869 17.2835 9.79499C17.2835 7.1031 14.7095 4.91984 11.5335 4.91984ZM11.5335 13.0451C9.41946 13.0451 7.65613 11.5517 7.65613 9.75924C7.65613 7.96681 9.37538 6.50914 11.4895 6.50914C13.6045 6.50914 15.3228 7.96681 15.3228 9.75924C15.3237 11.5517 13.6486 13.0451 11.5335 13.0451Z" fill="black"/>
    </svg>
);

export const categories = [
  {
    name: 'Lagos',
    icon: <SVG1 />,
    hotel: 'Lagos Hotel',
    state: 'Lagos State, Nigeria',
  },
  {
    name: 'Lagos',
    icon: <SVG1 />,
    hotel: 'Lagos Airport Hotel',
    state: 'Lagos State, Nigeria',
  },
  {
    name: 'Lagos',
    icon: <SVG1 />,
    hotel: 'Lagos Oriental Hotel',
    state: 'Lagos State, Nigeria',
  },
  {
    name: 'Lagos',
    icon: <SVG1 />,
    hotel: 'Raddison blue',
    state: 'Lagos State, Nigeria',
  },
  {
    name: 'Lagos',
    icon: <SVG1 />,
    hotel: 'Transcorp Hilton Hotel',
    state: 'Lagos State, Nigeria',
  },
  {
    name: 'Abuja',
    icon: <SVG2 />,
    hotel: 'Abuja Hotel',
    state: 'Abuja State, Nigeria',
  },
  {
    name: 'Abuja',
    icon: <SVG1 />,
    hotel: 'Transcorp Hilton Hotel',
    state: 'Abuja State, Nigeria',
  },
  {
    name: 'Abuja',
    icon: <SVG1 />,
    hotel: 'Transcorp Hilton Hotel',
    state: 'Abuja State, Nigeria',
  },
  {
    name: 'Abuja',
    icon: <SVG1 />,
    hotel: 'Abuja Airport Hotel',
    state: 'Abuja State, Nigeria',
  },
  {
    name: 'Portharcourt',
    icon: <SVG3 />,
    hotel: 'Portharcourt Hotel',
    state: 'Portharcourt, Nigeria',
  },
  {
    name: 'Portharcourt',
    icon: <SVG3 />,
    hotel: 'Another Portharcourt Hotel',
    state: 'Portharcourt, Nigeria',
  },
  {
    name: 'Portharcourt',
    icon: <SVG3 />,
    hotel: 'Second Portharcourt Hotel',
    state: 'Portharcourt, Nigeria',
  },
];
