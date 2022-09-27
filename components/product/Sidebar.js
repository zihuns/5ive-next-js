import Link from "next/link";
import { useRouter } from "next/router";
import NavBar from "../../components/common/NavBar";

export default function Sidebar() {
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
        <div className="title">
          <h2>과자모음</h2>
        </div>
        <ul>
          <li>
            <div onClick={() => q_test(1)} className="category">
              <Link href={`/product/1`}>
                <a>전체</a>
              </Link>
            </div>
          </li>
          <li>
            <Link href="/product/productList">
              <a>비스킷/샌드</a>
            </Link>
          </li>
          <li>
            <Link href="/product/productList">
              <a>스낵/봉지과자</a>
            </Link>
          </li>
          <li>
            <Link href="/product/productList">
              <a>캔디/사탕/젤리</a>
            </Link>
          </li>
          <li>
            <Link href="/product/productList">
              <a>초콜릿</a>
            </Link>
          </li>
          <li>
            <Link href="/product/productList">
              <a>껌/자일리톨</a>
            </Link>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .contents {
          width: 100%;

          .title {
            border-bottom: 1px solid;
            line-height: 1vw;
          }

          ul {
            padding: 0;
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            /* align-items: center; */
          }

          li {
            font-size: 17px;
            font-weight: 700;
            line-height: 40px;
            padding: 0;
            color: #3a3a3a;
          }
        }
      `}</style>
    </>
  );
}
