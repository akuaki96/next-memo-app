import style from "../../styles/home.module.scss";

type Props = {
  memoList: string[];
  deleteButton: (index: number) => void;
};

export const MemoArea = (props: Props) => {
  const { memoList, deleteButton } = props;

  return (
    <div className={style.memoArea}>
      <ul>
        {memoList.map((memo, index) => (
          <li key={index}>
            <div className={style.memoList}>
              <p>{memo}</p>
              <button
                className={`${style.deleteButton} ${style.button}`}
                onClick={() => deleteButton(index)}
              >
                削除
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
