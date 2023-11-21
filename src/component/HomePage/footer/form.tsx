// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import "./footer.css";
import "./footerMobile.css";

const FormSub = () => {
  return (
    <>
      <h1>Get Inspired to travel!</h1>

      <form class="footerForm" action="/">
        <input type="email" id="email" placeholder="Your Email" name="email" />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_6972_9783)">
              <path
                d="M2.5 5.83341C2.5 5.39139 2.67559 4.96746 2.98816 4.6549C3.30072 4.34234 3.72464 4.16675 4.16667 4.16675H15.8333C16.2754 4.16675 16.6993 4.34234 17.0118 4.6549C17.3244 4.96746 17.5 5.39139 17.5 5.83341V14.1667C17.5 14.6088 17.3244 15.0327 17.0118 15.3453C16.6993 15.6578 16.2754 15.8334 15.8333 15.8334H4.16667C3.72464 15.8334 3.30072 15.6578 2.98816 15.3453C2.67559 15.0327 2.5 14.6088 2.5 14.1667V5.83341Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.5 5.83325L10 10.8333L17.5 5.83325"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_6972_9783">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Subscribe
        </button>
      </form>

      <p>
        Subscribe now to receive destination inspiration, travel tips,upcoming
        events and all the best things to do around the world
      </p>
    </>
  );
};

export default FormSub;
