import { Cat } from "@/pages/Tinder"
import { CardCat, CardInfo, Tag, Tags } from "./styles/Card.styled"
import Image from "next/image";
import { globe, pets, scale } from "@/common/Icons";

interface ICatData {
    catData: Cat
}

const Card: React.FC<ICatData> = (props) => {
    const { breeds, url } = props.catData

    return (
        <CardCat>
            <Image src={url} alt='' fill/>
            <CardInfo>
                <div className="cat-data">
                    <div className="info">
                        <Image src={globe} alt='' width={15} height={15}/>
                        <span>{breeds.origin}</span>
                    </div>
                    <div className="info">
                        <Image src={pets} alt='' width={15} height={15}/>
                        <span>{breeds.name}</span>
                    </div>
                    <div className="info">
                        <Image src={scale} alt='' width={15} height={15}/>
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