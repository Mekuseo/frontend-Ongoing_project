export const analyze = (step, userResponse) => {
    return step === 0
      ? {
          time: "6:00",
          purpose: "issue",
          message: `The room was too small`,
        }
      : step === 1
      ? {
          purpose: "thanks",
          message:
            "thank you, we will revert to you shortly"
        }
      : step === 2
      ? {
          purpose: "thanks",
          message:
            "thank you, we will revert to you shortly"
        }
      : step === 3
      ? {
          purpose: "thanks",
          message:
          "thank you, we will revert to you shortly"
        }
      : step === 4
      ? {
          purpose: "thanks",
          message: "thank you, we will revert to you shortly"
        }
      : step === 5
      ? userResponse === "Yeah sure!"
        ? {
            purpose: "thanks",
            message: "thank you, we will revert to you shortly"
          }
        : {
            purpose: "thanks",
            message: "thank you, we will revert to you shortly"
          }
      : step === 6
      ? {
          purpose: "thanks",
          message:
          "thank you, we will revert to you shortly"
        }
      : step === 7
      ? {
          purpose: "thanks",
          message:
          "thank you, we will revert to you shortly"
        }
      : step === 8
      ? {
          purpose: "thanks",
          message:
          "thank you, we will revert to you shortly"
        }
      : step === 9
      ? {
          purpose: "end",
          message:
            "Thank you so much for spending time chatting with me."
        }
      : {
          purpose: "bye",
          message: "Bye!"
        };
  };
  