import EvilLogo from './EvilLogo'
import SmileySun from './SmileySun'

type Props = {}

const Logos = (props: Props) => {
    return (
        <div className="logos">
            <EvilLogo />
            <SmileySun />
        </div>
    )
}

export default Logos