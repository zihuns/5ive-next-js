import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className="wrapper">
        <div className="logo">
          <Link href="/">
            <img src="/vercel.svg" />
          </Link>
        </div>
        <div className="search">
          <form>
            <input type="text"></input>
          </form>
        </div>
        <div className="icons">
          <Link href="/">
            <img src="/vercel.svg" />
          </Link>
        </div>
        <style jsx>{`
          @media screen and (min-width: 769px) {
            /* 데스크탑에서 사용될 스타일을 여기에 작성합니다. */
            .wrapper {
              max-width: 1280px;
              margin: 0 auto;
              display: flex;
              justify-content: space-between;
            }
          }
          @media screen and (max-width: 768px) {
            /* 모바일에 사용될 스트일 시트를 여기에 작성합니다. */
          }
        `}</style>
      </div>
    </div>
  );
}
