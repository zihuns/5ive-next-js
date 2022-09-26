import Link from "next/link";

export default function ProductRec({ imgsrc, link, context }) {
  return (
    <>
      <div className="wrapper">
        <Link href="/">
          <a>
            <div>
              <img src="/sample.png" />
            </div>
            <div style={{ marginTop: "5%" }}>
              <p>가격</p>
              <p>가격</p>
              <p>할인율</p>
            </div>
          </a>
        </Link>
      </div>

      <style jsx>{`
        .wrapper {
          border: 1px solid;
          border-radius: 20px;
          background-color: #f5f5f5;

          img {
            max-height: 192px;
            height: 10vw;
          }
        }
      `}</style>
    </>
  );
}
