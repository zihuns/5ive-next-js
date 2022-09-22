import Title from "../../components/common/Title";
import SNSButton from "../../components/member/SNSButton";

export default function login() {
  return (
    <>
      <Title title="로그인" />
      <div className="contents">
        <div className="login-area">
          <div className="login-title">
            <h2>로그인</h2>
          </div>
          <div className="login-subtitle">
            SNS로 편리하게 로그인하시고
            <br />
            다양한 서비스를 이용해보세요.
          </div>
          <div className="login-button">
            <SNSButton color="#f9e000" context="카카오로 시작하기" />
            <SNSButton color="#2db400" context="네이버로 시작하기" />
            <SNSButton color="#000000" context="Apple로 시작하기" />
            <SNSButton color="#e9e9e9" context="QR코드로 시작하기" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .contents {
          width: 70%;
          margin: 0 auto;

          .login-area {
            display: block;
            text-align: center;
          }

          .login-title {
            min-height: 30px;
            padding: 34px 0 20px;
            line-height: 1;
            margin: 0px;

            h2 {
              padding: 0;
              color: #3a3a3a;
              font-size: 36px;
              font-weight: 700;
              line-height: 1;
            }
          }

          .login-subtitle {
            color: #999999;
            font-size: 16px;
            line-height: 26px;
          }

          .login-button {
            margin: 2vw 0;
            display: flex;
            height: 20vw;
            flex-direction: column;
            justify-content: space-between;
          }
        }
      `}</style>
    </>
  );
}
