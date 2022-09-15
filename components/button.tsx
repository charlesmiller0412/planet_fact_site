interface Props {
    number?: React.ReactNode;
    title?: React.ReactNode;
}
export const Button: React.FC<Props> = ({ number, title }) => {
    return (
        <button className="button">
            <span className="buttonNumber">{number}</span>
            <p>{title}</p>
        </button>
    );
};
