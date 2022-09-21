import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="top">
          <ul>
            <li>
              <Link href="/">
                <a>팀 소개</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>팀 소개</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>팀 소개</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/">
                <a>공지사항</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>FAQ</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>문의사항</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div>Kka-Kka의 모든 콘텐츠는 저작권의 보호를 받고 있습니다.</div>
          <div>
            까까(주) | 주소 : 서울특별시 서초구 서초대로74길 33 비트교육센터 |
            대표이사: 최솔지 | 공동대표: 신우주, 서지훈, 오명주, 김혜연 | 평일 :
            10:00 - 17:00 (주말, 공휴일 휴무)
          </div>
          <div>&copy; Copyright KKA-KKA Co.,LTD. All rights reserved.</div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          width: 100%;
          border: 0;
          background-color: #f8f8f8;
        }

        .top {
          width: 85%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
        }

        .top ul {
          padding: 0;
          display: flex;
          list-style: none;
        }

        .bottom {
          width: 85%;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}
