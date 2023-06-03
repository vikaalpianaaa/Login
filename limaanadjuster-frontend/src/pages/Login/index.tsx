import {Card, Button, Row, Col, Form, Input, Switch} from "antd";
import {Typography} from "antd";
import login from "public/Login.png";

const LoginPage = () => {
  const [form] = Form.useForm();
  const {Title, Paragraph} = Typography;
  return (
    <div
      className="absolute top-1/3 bottom-1/3 w-1/2 left-1/2 right-1/2"
      style={{transform: "translate(-50%, -50%)"}}>
      <Card
        className="w-full"
        style={{
          background:
            "linear-gradient(to left, #1E3957, #1E3957 50%, transparent 50%)",
          display: "flex",
          width: "120%",
          height: "430px",
        }}>
        <div style={{flex: 1}}></div>
        <Title level={3} style={{textIndent: "128px"}}>
          Sign In
        </Title>
        <Row>
          <Col span={12}>
            <Form form={form} layout="vertical" autoComplete="off">
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {required: true},
                  {type: "email", warningOnly: true},
                  {type: "string", min: 6},
                ]}
                style={{width: "300px", textAlign: "center"}}>
                <Input placeholder="Enter email address" />
              </Form.Item>
            </Form>
            <Form form={form} layout="vertical" autoComplete="off">
              <Form.Item
                name="password"
                label={
                  <span>
                    Password
                    <span style={{marginLeft: "125px", fontSize: "12px"}}>
                      Forgot Password ?
                    </span>
                  </span>
                }
                rules={[
                  {required: true},
                  {type: "url", warningOnly: true},
                  {type: "string", min: 6},
                ]}
                style={{width: "300px"}}>
                <Input placeholder="Masukkan password" />
              </Form.Item>
              <Form.Item>
                <Form.Item valuePropName="checked">
                  <Switch style={{transform: "scale(0.7)"}} />
                  Remember Me
                </Form.Item>
                <Button
                  type="ghost"
                  htmlType="submit"
                  style={{
                    backgroundColor: "#1E3957",
                    color: "#FFFFFF",
                    width: "300px",
                  }}
                  block>
                  Sign In
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={12}>
            <div style={{paddingLeft: "100px", marginTop: "20px"}}>
              <img src={login} alt="logo" width={430} height={400} />
            </div>
            <div style={{textAlign: "center", color: "#FFFFFF"}}>
              <Title level={3} style={{textIndent: "110px", color: "#FFFFFF"}}>
                Welcome Back!
                <Paragraph
                  style={{
                    marginTop: "6px",
                    marginLeft: "5px",
                    marginBottom: "1px",
                    fontSize: "12px",
                    color: "#FFFFFF",
                  }}>
                  Enter personal details to your
                </Paragraph>
                <Paragraph
                  style={{
                    marginLeft: "5px",
                    fontSize: "12px",
                    color: "#FFFFFF",
                  }}>
                  employee account
                </Paragraph>
              </Title>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default LoginPage;
