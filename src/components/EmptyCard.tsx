import { catFace } from "@/common/Icons"
import Image from "next/image"
import { Empty } from "./styles/Card.styled"


const EmptyCard = () => {

    return (
        <Empty>
            <Image src={catFace} width={50} height={50} alt=''/>
        </Empty>
    )
}

export default EmptyCard