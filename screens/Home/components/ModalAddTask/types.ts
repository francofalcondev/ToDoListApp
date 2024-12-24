import { Dispatch, SetStateAction } from "react";

export interface ModalAddTaskProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}
