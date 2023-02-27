import { Cat } from "@/pages/Tinder"
import { CardCat, CardInfo, Tag, Tags } from "./styles/Card.styled"
import pets from '../assets/pets.svg';
import globe from '../assets/public.svg';
import scale from '../assets/scale.svg';

interface ICatData {
    catData: Cat
}

const Card: React.FC<ICatData> = (props) => {
    const { id, breeds, url } = props.catData

    return (
        <CardCat>
            <img className="cat-img" src={url}/>
            <CardInfo>
                <div className="cat-data">
                    <div className="info">
                        <img src={globe.src} alt=''/>
                        <span>{breeds.origin}</span>
                    </div>
                    <div className="info">
                        <img src={pets.src} alt=''/>
                        <span>{breeds.name}</span>
                    </div>
                    <div className="info">
                        <img src={scale.src} alt=''/>
                        <span>{breeds.weight.metric + 'kg'}</span>
                    </div>
                </div>
                <Tags>
                    {breeds.temperament.slice(0,3).map((temp, index) => {
                        return <Tag key={index}>{temp}</Tag>
                    })}
                </Tags>
            </CardInfo>
        </CardCat>
    )
}

export default Card