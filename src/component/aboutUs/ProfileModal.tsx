import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import { arrowLeft, arrowRight } from "./AboutUsProfileData";
import Sheet from "@mui/joy/Sheet";

interface ProfileModalProps {
  setOpen: (open: boolean) => void;
  open: boolean;
  profiles: any[];
  currentIndex: number;
  onNext: () => void;
  onPrevious: () => void;
}

export default function ProfileModal({
  setOpen,
  open,
  profiles,
  currentIndex,
  onNext,
  onPrevious,
}: ProfileModalProps) {
  const profile = profiles[currentIndex];

  return (
    <React.Fragment>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="plain"
          sx={{
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <div className="profileModal-container">
            <div className="profileModal-btn previousBtn" onClick={onPrevious}>
              {arrowLeft()}
            </div>
            <img src={profile?.image} alt="profile-image" />
            <div className="profileModal-info">
              <p>{profile?.name}</p>
              <p>{profile?.position}</p>
              <p>{profile?.description}</p>
              <p>{profile?.email}</p>
            </div>
            <div className="profileModal-btn nextBtn" onClick={onNext}>
              {arrowRight()}
            </div>
          </div>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
