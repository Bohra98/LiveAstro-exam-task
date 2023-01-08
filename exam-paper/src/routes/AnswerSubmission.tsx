import React, {useContext} from "react";
import { QuesContext } from "../context/QuesContext";
import { QuesContextType } from "../types/QuesContextType";
import { Button, Card, Col, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const AnswerSubmission = () =>  {
    const {answerArr,onReset} = useContext(QuesContext) as QuesContextType
    const history = useNavigate()
    
    const goBack:React.MouseEventHandler = () => {
        onReset()
        history("/")
    }
  
    return (
        <Row justify={"center"}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                <Card title={null}>
                  {answerArr.map((v,i) => (
                    <div key={v.questionid}>
                        <Typography.Title level={4}>{v.question}</Typography.Title>
                        <Typography.Text>{v.ansValue}</Typography.Text>
                    </div>
                  ))}  
                </Card>
                <Button type="primary" onClick={goBack}>Back</Button>
            </Col>
        </Row>
    )
}

export default AnswerSubmission;