const aboutProfileData = [
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Christina George",
    position: "Chief Executive Officer",
    email: "christina@gmail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eveniet ab ipsum, ea repellendus quo, nisi",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1666265384842-31bdda25f026?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ogunlade Gbenga",
    position: "Chief Operating Officer",
    email: "gbenga@gmail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eveniet ab ipsum, ea repellendus quo, nisi",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1675034393381-7e246fc40755?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Anita Olamide",
    position: "Human Resource Manager",
    email: "anita@gmail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eveniet ab ipsum, ea repellendus quo, nisi",
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Adetorera Mike",
    position: "Front End Developer",
    email: "adetorera@gmail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eveniet ab ipsum, ea repellendus quo, nisi",
  },
  {
    image:
      "https://images.unsplash.com/photo-1612720779828-8ba209f069ff?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mutiu Wale",
    position: "Back End Developer",
    email: "mutiu@gmail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eveniet ab ipsum, ea repellendus quo, nisi",
  },
  {
    image:
      "https://images.unsplash.com/photo-1525357927799-d0c81a81d9c9?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Emeka Ronaldo",
    position: "Front End Developer",
    email: "emeka@gmail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eveniet ab ipsum, ea repellendus quo, nisi",
  },
  {
    image:
      "https://images.unsplash.com/photo-1628375385883-6e086364f66d?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Modee Mohamed",
    position: "UI/UX Designer",
    email: "modee@gmail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eveniet ab ipsum, ea repellendus quo, nisi",
  },
  {
    image:
      "https://images.unsplash.com/photo-1605666119503-780442f4992f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mary Ogunlade",
    position: "Social Media Manager",
    email: "mary@gmail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eveniet ab ipsum, ea repellendus quo, nisi",
  },
];

export const arrowRightIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 0L12.3888 0.00600014C15.5361 0.108025 18.5171 1.44305 20.689 3.72313C22.8608 6.00321 24.0494 9.04561 23.9984 12.1941C23.9474 15.3426 22.6608 18.3449 20.4163 20.5534C18.1717 22.762 15.1489 23.9997 12 23.9997C8.85108 23.9997 5.82833 22.762 3.58374 20.5534C1.33915 18.3449 0.0525963 15.3426 0.00157709 12.1941C-0.0494422 9.04561 1.13916 6.00321 3.31102 3.72313C5.48287 1.44305 8.46393 0.108025 11.6112 0.00600014L12 0ZM12.7356 6.252C12.4944 6.0655 12.1913 5.97781 11.8878 6.00672C11.5843 6.03563 11.3031 6.17899 11.1015 6.40766C10.8999 6.63634 10.7928 6.9332 10.8021 7.23794C10.8114 7.54268 10.9364 7.83245 11.1516 8.0484L13.9008 10.8H7.2L7.0596 10.8084C6.75589 10.8445 6.47743 10.9953 6.28112 11.2298C6.08481 11.4643 5.98547 11.765 6.00339 12.0703C6.02132 12.3757 6.15516 12.6626 6.37756 12.8726C6.59996 13.0825 6.89415 13.1997 7.2 13.2H13.9008L11.1516 15.9516L11.052 16.0644C10.8655 16.3056 10.7778 16.6087 10.8067 16.9122C10.8356 17.2157 10.979 17.4969 11.2077 17.6985C11.4363 17.9001 11.7332 18.0072 12.0379 17.9979C12.3427 17.9886 12.6325 17.8636 12.8484 17.6484L17.6484 12.8484L17.736 12.75L17.8128 12.6432L17.8872 12.5076L17.94 12.3756L17.976 12.2412L17.9964 12.09L18 12L17.9916 11.8584L17.9568 11.6808L17.9148 11.5548L17.85 11.4192L17.7648 11.286C17.7294 11.2384 17.6904 11.1935 17.6484 11.1516L12.8484 6.3516L12.7356 6.252Z"
        fill="white"
      />
    </svg>
  );
};

export const arrowLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="32"
      viewBox="0 0 18 32"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.341 0.90901C18.2197 1.78769 18.2197 3.21231 17.341 4.09099L5.43198 16L17.341 27.909C18.2197 28.7877 18.2197 30.2123 17.341 31.091C16.4623 31.9697 15.0377 31.9697 14.159 31.091L0.65901 17.591C-0.21967 16.7123 -0.21967 15.2877 0.65901 14.409L14.159 0.90901C15.0377 0.0303301 16.4623 0.0303301 17.341 0.90901Z"
        fill="#94A3B8"
      />
    </svg>
  );
};

export const arrowRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.659 8.90901C16.5377 8.03033 17.9623 8.03033 18.841 8.90901L32.341 22.409C33.2197 23.2877 33.2197 24.7123 32.341 25.591L18.841 39.091C17.9623 39.9697 16.5377 39.9697 15.659 39.091C14.7803 38.2123 14.7803 36.7877 15.659 35.909L27.568 24L15.659 12.091C14.7803 11.2123 14.7803 9.78769 15.659 8.90901Z"
        fill="#475569"
      />
    </svg>
  );
};

export default aboutProfileData;