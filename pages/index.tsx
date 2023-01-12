import { useState } from "react";
import style from "../styles/home.module.scss";

const Home = () => {
  const [inputMemo, setInputMemo] = useState<string>("");
  const [memoList, setMemoList] = useState<string[]>([]);

  const onClickAddButton = () => {
    setMemoList([...memoList, inputMemo]);
    setInputMemo("");
  };

  const onChangeMemo = (e: any) => {
    console.log(e);
    setInputMemo(e.target.value);
  };

  const onClickDeleteButton = () => {};

  return (
    <div>
      <div className={style.title}>
        <h1>簡単メモアプリ</h1>
      </div>

      <div className={style.inputArea}>
        <input
          placeholder="メモを入力"
          value={inputMemo}
          onChange={onChangeMemo}
        ></input>
        <button
          className={`${style.inputButton} ${style.button}`}
          onClick={onClickAddButton}
        >
          追加
        </button>
      </div>

      <div className={style.memoArea}>
        <ul>
          {memoList.map((memo) => (
            <li>
              <div className={style.memoList}>
                <p>{memo}</p>
                <button
                  className={`${style.deleteButton} ${style.button}`}
                  onClick={onClickDeleteButton}
                >
                  削除
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
