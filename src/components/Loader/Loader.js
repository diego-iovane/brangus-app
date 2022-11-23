import { Spinner } from './Elements'

const Loader = () => {
    return (
        <Spinner
            viewBox="25 25 50 50"
            strokeWidth="3"
        >
            <circle cx="50" cy="50" r="20" />
        </Spinner>
    )
}

export default Loader