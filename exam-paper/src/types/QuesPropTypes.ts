import { AnsOption } from "./QuesDataType";

export type QuestionProp = {
    questionid: number,
    question:string,
    questionType: string,
    validation: boolean,
    questionoption: AnsOption[],
    onChangeRadioEvent: (optionid:number) => void,
    onChangeCheckbox:(optionid:number) => void,
    onChangeInput:(optionvalue:string,optionid:number) => void,
}