import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [value, setValue] = useState("");
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");

  function search(event) {
    if (event.key === "Enter") {
      window.location.href = `/product?search=${value}`;
      setValue("");
    }
  }

  const getMemberName = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };

    const body = {};

    try {
      const res = await axios.post(
        `/product?search=${value}`,
        {
          body: body, // price라는 이름의 객체에 price 변수에 담은 값 전달
        },
        {
          headers: headers, // headers에 headers 객체 전달
        },
      );
      console.log(res);
      setName(res);
      setGrade(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setToken(localStorage.getItem("accessToken"));
    // getMemberName();
  }, []);

  return (
    <div>
      <div className="wrapper">
        <div className="logo">
          <Link href="/">
            <img height="52" src="/vercel.svg" />
          </Link>
        </div>
        <div className="search">
          <input
            type="text"
            size="30"
            placeholder="검색어를 입력해주세요"
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
            onKeyUp={(event) => {
              search(event, value);
            }}
          ></input>

          <Link href={`/product?search=${value}`}>
            <img src="/common/main_search.png" />
          </Link>
        </div>
        <div className="icons">
          <div className="top">
            {token ? (
              <>
                <Link href="/member/join">
                  <a>등급:{grade}</a>
                </Link>

                <Link href="/member/login">
                  <a>이름:{name}</a>
                </Link>
              </>
            ) : (
              <>
                <Link href="/member/join">
                  <a>회원가입</a>
                </Link>

                <Link href="/member/login">
                  <a>로그인</a>
                </Link>
              </>
            )}
          </div>
          <div className="bottom">
            <Link href="/mypage">
              <img src="/common/top_mypage.png" />
            </Link>

            <Link href="/member/cart">
              <img src="/common/top_cart.png" />
            </Link>
          </div>
        </div>
        <style jsx>{`
          .wrapper {
            max-height: 120px;
            height: 15vh;
          }
          @media screen and (min-width: 769px) {
            /* 데스크탑에서 사용될 스타일을 여기에 작성합니다. */
            .wrapper {
              max-width: 1280px;
              margin: 0 auto;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .search {
              margin-left: -35%;
              border: 2px solid #ed1b23;
              border-radius: 40px;
              padding: 0 17px;

              input[type="text"] {
                border: none;
                border-radius: 40px;
                width: 317px;
                height: 45px;
                line-height: 45px;
                padding: 0;
                box-sizing: border-box;
                color: #c5c9cd;
                font-size: 1em;
                font-weight: 600;
              }

              input[type="text"]:focus {
                outline: none;
                color: #000;
              }

              img {
                width: 24px;
                height: 24px;
                position: relative;
                top: 5px;
              }
            }

            .icons {
              height: 80px;
              width: 100px;
              margin: auto 0;

              .top {
                line-height: 40px;
                font-weight: 700;
                font-size: 12px;
                display: flex;
                justify-content: space-between;
                position: relative;
                top: -15px;
              }

              .bottom {
                display: flex;
                justify-content: space-around;
              }
            }
          }

          @media screen and (max-width: 900px) {
            .search {
              display: none;
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
