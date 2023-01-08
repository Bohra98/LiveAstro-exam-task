import React, { useEffect, useState, createContext} from "react";
import { QuesData } from "../constant/QuesData";
import { AnsObject, QuesContextType, QuesProviderProps } from "../types/QuesContextType";
import { QuesObject } from "../types/QuesDataType";

export const QuesContext = createContext<QuesContextType | null>(null)

const QuesProvider: React.FC<QuesProviderProps> = ({children}) => {
    const [questions,setQuestions] = useState<QuesObject[]>([])
    const [activeIndex,setActiveIndex] = useState<number>(0)
    const [answerArr, setAnswerArr] = useState<AnsObject[]>([])
    useEffect(() => {
        setQuestions(QuesData.questions)
    },[])

    const onSubmit = () => {

    }
    const onNext = () => {
        setActiveIndex(activeIndex + 1)

    }
    const onPrevious = () => {
        setActiveIndex(activeIndex - 1)

    }
    const onReset = () => {
        setAnswerArr([])
        setQuestions(QuesData.questions)
    }
    return <QuesContext.Provider value={{questions, onSubmit, onNext, onPrevious, activeIndex,answerArr,setAnswerArr, onReset}}>{children}</QuesContext.Provider>
}

export default QuesProvider