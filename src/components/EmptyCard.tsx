import { catFace } from "@/common/Icons"
import Image from "next/image"
import { Empty } from "./styles/Card.styled"


const EmptyCard = () => {

    return (
        <Empty>
            <Image src={catFace} width={150} height={150} alt=''/>
        </Empty>
    )
}

export default EmptyCard