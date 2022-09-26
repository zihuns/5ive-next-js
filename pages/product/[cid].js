import Link from "next/link";
import { useRouter } from "next/router";
import NavBar from "../../components/common/NavBar";
import ProductRec from "../../components/product/ProductRec";
import Sidebar from "../../components/product/Sidebar";

export default function productCidList() {
  // 카테고리 아이디별 호출
  // https://nomadcoders.co/nextjs-fundamentals/lectures/3451 7분 참고
  const router = useRouter();
  const q_test = (cid) => {
    router.push({
      pathname: `/product/${cid}`,
      query: {
        cid,
        title: "test",
      },
    });
  };
  console.log(router.query);

  return (
    <>
      <div className="contents">
        <div className="sidebar">
          카테고리 아이디 : {router.query.cid}
          <Sidebar />
        </div>

        <ul className="productList">
          <li className="productInner">
            <div className="productBox">
              <ProductRec />
            </div>
          </li>
          <li className="productInner">
            <div className="productBox">
              <ProductRec />
            </div>
          </li>
          <li className="productInner">
            <div className="productBox">
              <ProductRec />
            </div>
          </li>
          <li className="productInner">
            <div className="productBox">
              <ProductRec />
            </div>
          </li>
          <li className="productInner">
            <div className="productBox">
              <ProductRec />
            </div>
          </li>
          <li className="productInner">
            <div className="productBox">
              <ProductRec />
            </div>
          </li>
          <li className="productInner">
            <div className="productBox">
              <ProductRec />
            </div>
          </li>
          <li className="productInner">
            <div className="productBox">
              <ProductRec />
            </div>
          </li>
          <li className="productInner">
            <div className="productBox">
              <ProductRec />
            </div>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .contents {
          margin: 0 auto;
          width: 70%;
          display: flex;
          .sidebar {
            display: inline-block;
            width: 23%;
            margin-right: 5%;
          }

          .productList {
            display: table;
            width: 100%;
            .productInner {
              display: inline-block;
              width: 33.33%;
              margin-bottom: 7%;

              .productBox {
                width: 90%;
                margin: 0 auto;
              }
            }
          }
        }
      `}</style>
    </>
  );
}
