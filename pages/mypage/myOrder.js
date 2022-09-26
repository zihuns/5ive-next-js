import Mysidebar from "../../components/mypage/mysidebar";

export default function myOrder() {
  return (
    <>
      <div>
        <div className="contents">
          <div className="sidebar">
            <Mysidebar />
          </div>
          <div className="wrapper">
            <div className="myinfo">
              <div className="myinfo_left">익명의 회원님</div>
              <div className="myinfo_right">주문내역 쿠폰</div>
            </div>
            <div className="myorder">
              <div className="myorderTitle">주문내역</div>
              <div className="myorderProduct">상품</div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .contents {
            margin: 0 auto;
            width: 70%;
            display: flex;
            .sidebar {
              display: inline-block;
              width: 18%;
              margin-right: 7%;
            }

            .wrapper {
              max-width: 970px;
              width: 75%;
              .myinfo {
                margin-bottom: 10%;
                display: flex;
                border: 1px solid;
              }

              .myorder {
                .myorderTitle {
                  font-size: 24px;
                  font-weight: 700;
                  color: #3a3a3a;
                  border-bottom: 2px solid #3a3a3a;
                  line-height: 24px;
                  padding-bottom: 15px;
                }
              }
            }
          }
        `}</style>
      </div>
    </>
  );
}
