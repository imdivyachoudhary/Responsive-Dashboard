import styles from "./AssessmentCard.module.css";

// This can be implemented using styled-components in React, because we need same html element with dynamic css properties
function AssessmentStudent({ name, bgcolor, left }) {
  return (
    <div className={styles.Student} style={{backgroundColor: bgcolor, left: left}}>
      {name}
    </div>
  );
}

export default AssessmentStudent;
