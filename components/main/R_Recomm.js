import Title from "../common/Title";
import SNSButton from "../member/SNSButton";
import ProductEc from "../product/ProductEc";
import ProductRec from "../product/ProductRec";

export default function C_Recomm() {
  return (
    <>
      <div className="contents">
        <div className="wrapper">
          <div className="title">
            <h2>평점 추천</h2>
          </div>

          <div className="product">
            <ProductRec />
            <ProductRec />
            <ProductRec />
            <ProductRec />
          </div>
        </div>
      </div>
      <style jsx>{`
        .contents {
          width: 70%;
          /* height: 30vw; */
          margin: 3% auto 3%;

          .wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            .title {
              height: 50%;

              h2 {
                padding: 0;
                color: #3a3a3a;
                font-size: 36px;
                font-weight: 700;
                line-height: 1;
              }
            }

            .product {
              width: 90%;
              display: flex;
              justify-content: space-between;
            }
          }
        }
      `}</style>
    </>
  );
}
