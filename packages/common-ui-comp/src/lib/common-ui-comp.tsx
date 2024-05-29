import styles from './common-ui-comp.module.css';

/* eslint-disable-next-line */
export interface CommonUiCompProps {}

export function CommonUiComp(props: CommonUiCompProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CommonUiComp!</h1>
    </div>
  );
}

export default CommonUiComp;
