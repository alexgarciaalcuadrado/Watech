import Button from '@mui/material/Button';

const RedButton = (props) => {
    return (
        <Button className='red_button' variant="contained" color='primary' onClick={props.onClick} disabled={props.disabled} {...props}>{props.title}</Button>
    )
}

export default RedButton;