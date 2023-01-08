import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Card, Col, DatePickerProps, Divider, Row } from "antd";
import React, { useContext } from "react";
import DisplayedQuestion from "../components/DisplayedQuestion";
import { QuesContext } from "../context/QuesContext";
import { AnsObject, QuesContextType } from "../types/QuesContextType";
import { useNavigate } from "react-router-dom";

const QuesCard = () =>  {
    const {questions,activeIndex,onNext, onPrevious, setAnswerArr, answerArr} = useContext(QuesContext) as QuesContextType
    const history = useNavigate()

    const onChangeCheckbox = (optionid:number) => {
        let ansSelected = questions[activeIndex].questionoption.findIndex(e1 => e1.optionid === optionid)
        let selectedAnswer;
        if(ansSelected > -1){
            questions[activeIndex].questionoption[ansSelected].selected = true
            selectedAnswer = questions[activeIndex].questionoption[ansSelected].optionvalue
        }
        let ansobj:AnsObject = {
            "questionid":questions[activeIndex].questionid,
            "question":questions[activeIndex].question,
            "ansValue":selectedAnswer
        }
        let checkboxIndex = answerArr.findIndex(e1 => e1.questionid === ansobj.questionid)
        if(checkboxIndex > -1){
            answerArr[checkboxIndex].ansValue = ansobj.ansValue
            setAnswerArr(answerArr)
        }
        else {
            setAnswerArr([...answerArr,ansobj])
        }
    }

    const onChangeRadioEvent = (optionid:number) => {
        let ansSelected = questions[activeIndex].questionoption.findIndex(e1 => e1.optionid === optionid)
        let selectedAnswer;
        if(ansSelected > -1){
            questions[activeIndex].questionoption[ansSelected].selected = true
            selectedAnswer = questions[activeIndex].questionoption[ansSelected].optionvalue
        }
        let ansobj:AnsObject = {
            "questionid":questions[activeIndex].questionid,
            "question":questions[activeIndex].question,
            "ansValue":selectedAnswer
        }
        let radioIndex = answerArr.findIndex(e1 => e1.questionid === ansobj.questionid)
        if(radioIndex > -1){
            answerArr[radioIndex].ansValue = ansobj.ansValue
            setAnswerArr(answerArr)
        }
        else {
            setAnswerArr([...answerArr,ansobj])
        }
        
    }
    
    const onChangeInput = (optionvalue:string,optionid:number) => {
        let ansSelected = questions[activeIndex].questionoption.findIndex(e1 => e1.optionid === optionid)
        if(ansSelected > -1){
            questions[activeIndex].questionoption[ansSelected].selected = true
            questions[activeIndex].questionoption[ansSelected].optionvalue = optionvalue
        }
        let ansobj:AnsObject = {
            "questionid":questions[activeIndex].questionid,
            "question":questions[activeIndex].question,
            "ansValue":optionvalue
        }
        let radioIndex = answerArr.findIndex(e1 => e1.questionid === ansobj.questionid)
        if(radioIndex > -1){
            answerArr[radioIndex].ansValue = ansobj.ansValue
            setAnswerArr(answerArr)
        }
        else {
            setAnswerArr([...answerArr,ansobj])
        }
        
    }

    const OnSubmit:React.MouseEventHandler = () => {
        history('/submittedAns')
    }
    return (
        <Row justify={"center"}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
         <Card title={null}>
            {activeIndex !==0 &&(<Button type={"primary"} shape="circle" className="prev-btn" onClick={() => onPrevious()} icon={<ArrowLeftOutlined />}/>)}
            <Divider/>
            {questions.length > 0 && (
                <div >
                    <DisplayedQuestion
                        questionid={questions[activeIndex].questionid}
                        validation={questions[activeIndex].validation} 
                        question={questions[activeIndex].question} 
                        questionType={questions[activeIndex].questiontype}
                        questionoption={questions[activeIndex].questionoption}
                        onChangeCheckbox={onChangeCheckbox}
                        onChangeRadioEvent={onChangeRadioEvent}
                        onChangeInput={onChangeInput}/>    
                </div>
            )} 
            <Divider/>
            {activeIndex !== questions.length -1 && (<Button type={"primary"} className="submit-btn" onClick={() => onNext()}>Next</Button>)}
            {activeIndex === questions.length -1 && (<Button type={"primary"} onClick={OnSubmit} className="submit-btn">Submit</Button>)}
         </Card>
        </Col> 
     </Row>
    )
}

export default QuesCard