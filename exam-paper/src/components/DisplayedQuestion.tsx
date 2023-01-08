import React, { useContext, useMemo } from "react";
import { Typography, Radio, Input, DatePicker, Checkbox, Space, DatePickerProps, RadioChangeEvent } from "antd";
import { QuestionProp } from "../types/QuesPropTypes";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { QuesContext } from "../context/QuesContext";
import { AnsObject, QuesContextType } from "../types/QuesContextType";
const { TextArea } = Input;


const DisplayedQuestion:React.FC<QuestionProp> = ({questionid,question,questionType,questionoption,onChangeCheckbox,onChangeInput,onChangeRadioEvent}) => {
    const {answerArr,setAnswerArr} = useContext(QuesContext) as QuesContextType
    function disabledDate(current:any) {
        // Can not select days after today
        return current && current.valueOf() > Date.now();
    }

    const onChangeDatePicker: DatePickerProps['onChange'] = (date, dateString) => {
       questionoption[0].optionvalue = dateString
       questionoption[0].selected = true

        let ansobj:AnsObject = {
            "questionid":questionid,
            "question":question,
            "ansValue":dateString
        } 
        let dateAnsIndex = answerArr.findIndex(e => e.questionid === ansobj.questionid)
        if(dateAnsIndex !== -1){
            answerArr[dateAnsIndex].ansValue = dateString
            setAnswerArr(answerArr)
        }
        else {
            setAnswerArr([...answerArr,ansobj])
        }
        
    };
    const onChangeRadio = (e: RadioChangeEvent) => {
       onChangeRadioEvent(e.target.value)

    };

    const onChangeCheck = (e:CheckboxChangeEvent) => {
       onChangeCheckbox(e.target.value)
    }

    const onChangeTextArea = (optionValue:string,optionid:number) => {
        onChangeInput(optionValue,optionid)
    }
    const displayOptions = useMemo(() => {
        // display options
        switch (questionType){
            case "Radio":
                return (
                    <Radio.Group onChange={onChangeRadio}>
                        <Space direction="vertical">
                            {questionoption && questionoption.map((v,i) => (
                                <Radio 
                                    key={v.optionid} 
                                    value={v.optionid}>
                                    {v.optionvalue}
                                </Radio>
                            ))}
                        </Space>
                    </Radio.Group>   
                )
            case "Checkbox":
                return (
                    <>
                        {questionoption && questionoption.map((v,i) => (
                            <div >
                                <Checkbox 
                                    key={v.optionid} 
                                    value={v.optionid} 
                                    onChange={onChangeCheck}>
                                        {v.optionvalue}
                                </Checkbox>
                            </div>
                        ))}
                    </>
                )
            case "Date":
                return (
                    <>
                        {questionoption && questionoption.map((v,i) => (
                            <DatePicker key={v.optionid} disabledDate={disabledDate} onChange={onChangeDatePicker}/>
                        ))}
                    </>
                )
                
            case "Textarea":
                return (
                    <>
                        {questionoption && questionoption.map((v,i) => (
                            <TextArea 
                                key={v.optionid} 
                                rows={4} 
                                onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => onChangeTextArea(e.currentTarget.value,v.optionid)}>

                            </TextArea>
                        ))}
                    </>
                    
                )            
            default:
                return (
                    <></>
                )    
        }
    },[questionType,questionoption,question])
    return (
        <div>
            <Typography.Title level={4}>{question}</Typography.Title>
            {displayOptions}
        </div>
    )
}

export default DisplayedQuestion