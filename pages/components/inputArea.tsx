import { FC, ChangeEvent } from "react";
import style from "../../styles/home.module.scss";

type Props = {
  input: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  addButton: () => void;
};

export const InputArea = (props: Props) => {
  const { input, onChange, addButton } = props;

  return (
    <div className={style.inputArea}>
      <input placeholder="メモを入力" value={input} onChange={onChange}></input>
      <button
        className={`${style.inputButton} ${style.button}`}
        onClick={addButton}
      >
        追加
      </button>
    </div>
  );
};
