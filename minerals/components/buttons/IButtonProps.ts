export default interface IButtonProps {
    action?: () => void;
    text?: string;
    url?: string;
    color?: string;
    disabled?: boolean;
}