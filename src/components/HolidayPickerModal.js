import ReactModal from "react-modal";
import { Button } from "./StyledComponents";

export default function HolidayPickerModal({ isModalOpen, setIsModalOpen }) {
  return (
    <ReactModal isOpen={isModalOpen}>
      <div>test</div>
      <Button type="button" onClick={() => setIsModalOpen(false)}>
        Close it!
      </Button>
    </ReactModal>
  );
}
