import Link from "next/link";
import { useRouter } from "next/router";
import NavBar from "../../components/common/NavBar";

export default function Mysidebar() {
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
          <h2>마이페이지</h2>
        </div>
        <ul>
          <li>
            <div onClick={() => q_test(1)} className="category">
              <Link href={`/product/1`}>
                <a>내 정보 수정</a>
              </Link>
            </div>
          </li>
          <li>
            <Link href="/product/productList">
              <a>주문내역</a>
            </Link>
          </li>
          <li>
            <Link href="/product/productList">
              <a>쿠폰함</a>
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
            align-items: center;
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
