interface Props {
    number?: React.ReactNode;
    title?: React.ReactNode;
    id?: React.ReactNode;
    className?: any;
    onClick: () => void;
}
export const Button: React.FC<Props> = ({ number, title, onClick }) => {
    return (
        <button className="button" onClick={onClick}>
            <span className="buttonNumber">{number}</span>
            <p>{title}</p>
        </button>
    );
};
