import styles from "./nextLoader.module.css"

export const NextLoader = ({ ...rest }) => {
  return (
    <div {...rest} className={"absolute left-0 top-0 h-3 w-full overflow-x-hidden bg-light-blue-100"}>
      <div className={" animate-shake   relative flex h-3 w-1/2 rounded-sm bg-light-blue-300 " + styles.slide} />
    </div>
  )
}
