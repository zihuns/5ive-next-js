export default function SNSButton({ img, color, context }) {
  return (
    <>
      <div style={{ backgroundColor: color }}>
        <a>{context}</a>
      </div>

      <style jsx>{`
        div {
          position: relative;
          width: 30%;
          height: 4vw;
          text-align: center;
          margin: 0 auto;
          box-shadow: 5px 5px 5px 5px gray;

          a {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%); /* 자식요소에 translate 값 주기*/
          }
        }
      `}</style>
    </>
  );
}
