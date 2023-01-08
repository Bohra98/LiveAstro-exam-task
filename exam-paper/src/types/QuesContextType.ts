import { ReactElement } from "react"
import { QuesObject } from "./QuesDataType"

export type AnsObject = {
    questionid:number,
    question:string,
    ansValue:string | undefined,
}

export type QuesContextType = {
    questions: QuesObject[],
    onSubmit: () => void,
    onNext:() => void,
    onPrevious:() => void,
    onReset:() => void,
    activeIndex: number,
    answerArr:AnsObject[],
    setAnswerArr:(value:AnsObject[]) => void;
}

export type QuesProviderProps = {
    children: ReactElement
}