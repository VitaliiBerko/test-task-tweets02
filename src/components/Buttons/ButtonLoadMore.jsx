import PropTypes from "prop-types";
import { Btn } from "./ButtonLoadMore.styled";
export const ButtonLoadMore =({text, onClickFn})=> {

    return (
        <Btn type="button"  onClick={onClickFn}>{text}</Btn>
    )

}

ButtonLoadMore.propTypes ={
    text: PropTypes.string.isRequired,
    onClickFn: PropTypes.func.isRequired
}