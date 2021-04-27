const Button = (props) => {
    
    const {onClickFunction, buttonText} = props;
    return (
        <button onClick={onClickFunction}>{buttonText} button</button>
    )
}

export default Button;