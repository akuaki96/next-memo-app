import { ChangeEvent, useState, FC } from "react";
import style from "../styles/home.module.scss";
import { InputArea } from "./components/inputArea";
import { MemoArea } from "./components/memoArea";

const Home: FC = () => {
  const [inputMemo, setInputMemo] = useState<string>("");
  const [memoList, setMemoList] = useState<string[]>([]);

  const onChangeMemo = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputMemo(e.target.value);
  };

  const onClickAddButton = () => {
    const newMemoList: Array<string> = [...memoList];
    newMemoList.push(inputMemo);
    setMemoList(newMemoList);
    setInputMemo("");
  };

  const onClickDeleteButton = (index: number): void => {
    const newMemoList: Array<string> = [...memoList];
    newMemoList.splice(index, 1);
    setMemoList(newMemoList);
  };

  return (
    <div>
      <div className={style.title}>
        <h1>簡単メモアプリ</h1>
      </div>

      <InputArea
        input={inputMemo}
        onChange={onChangeMemo}
        addButton={onClickAddButton}
      ></InputArea>

      <MemoArea
        memoList={memoList}
        deleteButton={onClickDeleteButton}
      ></MemoArea>
    </div>
  );
};

export default Home;
