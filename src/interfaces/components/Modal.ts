export interface IModalProps {
  onClose: () => void;
  isOpen: boolean;
  isCentered?: boolean;
  title: string;
  description: string;
}