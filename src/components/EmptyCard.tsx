import { catFace } from "@/assets/Icons"
import { CardCat, Empty } from "./styles/Card.styled"


const EmptyCard = () => {

    return (
        <Empty>
            <img src={catFace.src}/>
        </Empty>
    )
}

export default EmptyCard