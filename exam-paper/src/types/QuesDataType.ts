export type  AnsOption = {
    optionid: number,
    optionvalue: string | undefined,
    price: number,
    optionaction: string | undefined,
    selected: boolean,
    subquestion : [] | null
}

export type QuesObject = {
    questionid: number,
    question: string,
    questiontype: string,
    attributetype: number,
    validation: boolean,
    questionoption: Array<AnsOption> 
}

export default interface QuestionData{
    questions:Array<QuesObject>,
}
